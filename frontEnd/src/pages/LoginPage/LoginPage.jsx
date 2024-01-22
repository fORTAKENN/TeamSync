import React from "react";
import "./LoginPage.css";
import email_icon from "./images/email.png";
import password_icon from "./images/password.png";

const LoginPage = () => {
  return (
    <div className="loginBody">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img className="imputIcon" src={email_icon} alt=""></img>
            <input
              className="imputField"
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="input">
            <img className="imputIcon" src={password_icon} alt=""></img>
            <input
              className="imputField"
              type="password"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <div className="forgottenPassword">
          Forgotten password?
          <span className="fieldSpan">Click Here!</span>
        </div>
        <div className="register">
          Don't have an account? <span className="fieldSpan">Register!</span>
        </div>
        <div className="submitContainer">
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
