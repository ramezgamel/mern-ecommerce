import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Signup,
  Home,
  AdminLayout,
  SellerLayout,
  UserLayout,
  DashBoard,
  ProductDetails,
  ProductsByCategory,
} from "./Routes";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<UserLayout />}>
          <Route path="" element={<Home />}></Route>
          <Route path=":id" element={<ProductDetails />}></Route>
          <Route path=":category/:id" element={<ProductsByCategory />}></Route>
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAuth loginPath={"/"}>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route path="" element={<DashBoard />}></Route>
        </Route>
        <Route
          path="/seller"
          element={
            <RequireAuth loginPath={"/"}>
              <SellerLayout />
            </RequireAuth>
          }
        ></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
