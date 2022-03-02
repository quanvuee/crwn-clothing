import React, { useState } from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.scss";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const Signin = ({ emailSignInStart, googleSignInStart }) => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2> I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          label="Email"
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          label="Password"
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(Signin);
