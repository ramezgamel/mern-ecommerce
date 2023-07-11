const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const ApiError = require("../utils/apiError");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/mail");
const crypto = require("crypto");

const signJwt = (id) => {
  return jwt.sign({ id }, process.env.JWT_SEC);
};

exports.register = asyncHandler(async (req, res) => {
  if (req.file) {
    req.body.profileImg = "imgs/users/" + req.file.filename;
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) throw new ApiError("Email is already exist", 400);
  const newUser = await User.create({ ...req.body });
  await new sendEmail(newUser).sendWelcome();
  const token = signJwt(newUser._id);
  res.status(201).json({
    status: "success",
    response: { newUser, token },
    message: "Signed up",
  });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError("Email or Password empty", 400);
  const user = await User.findOne({ email }).select();
  if (!user || !(await user.checkPass(password, user.password)))
    throw new ApiError("Invalid email or password", 400);
  const token = signJwt(user._id);
  res.status(200).json({
    status: "success",
    response: {
      user: {
        name: user.name,
        email: user.email,
        profileImg: user.profileImg,
        role: user.role,
      },
      token,
    },
    message: "Logged in",
  });
});

exports.forgetPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new ApiError("There is no user with this email.", 404);
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/auth/resetPassword/${resetToken}`;
  try {
    await new sendEmail(user).sendPasswordReset(resetURL);
    res.status(200).json({
      status: "success",
      message: "Get message in mail",
    });
  } catch (err) {
    console.log(err);
    user.passwordResetToken = undefined;
    user.passwordResetExpire = undefined;
    await user.save({ validateBeforeSave: false });
    throw new ApiError(
      "There was an error sending the email. try again later!",
      500
    );
  }
});

exports.resetPassword = asyncHandler(async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpire: { $gt: Date.now() },
  });
  if (!user) throw new ApiError(`Token is invalid or has expired`, 400);
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetExpire = undefined;
  user.passwordResetToken = undefined;
  await user.save();
  const token = signJwt(user._id);
  res.status(200).json({
    status: "success",
    response: { token },
    message: "Password changed",
  });
});

exports.logout = asyncHandler(async (req, res) => {
  res.send("Logout");
});
