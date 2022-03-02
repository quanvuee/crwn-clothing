import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserPersistence } from "./redux/user/user.action";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserPersistence());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/shop/*" element={<ShopPage/>} />
        <Route exact path="/checkout" element={<CheckoutPage/>} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </div>
  );
};



export default App;
