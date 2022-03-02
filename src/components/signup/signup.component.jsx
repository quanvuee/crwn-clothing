import React,{useState} from "react";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./signup.styles.scss";
import { signUpStart } from "../../redux/user/user.action";

const Signup = ({ signUp }) => {
  const [creadential,setCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = creadential;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUp({ email, password, displayName });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredential({...creadential,[name]: value })
  };

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (signUpInfo) => dispatch(signUpStart(signUpInfo)),
});

export default connect(null, mapDispatchToProps)(Signup);
