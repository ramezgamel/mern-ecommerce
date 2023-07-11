const router = require('express').Router()
const controller = require('../controllers/review.controller');
const {protect} = require('../middleware/auth.middleware');

router.use(protect);
router.route('/').get(controller.getAllReviews).post(controller.createReview)