import { Box, Button, FormControl, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

import { loginSuccess, loginFailure } from "../prodRedux/action/LoginAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const navigateUrl = useNavigate();
  const dispatch = useDispatch();

  // const lowerCase = /[a-z]/g;
  // const upperCase = /[A-Z]/g;
  // const numbers = /[0-9]/g;

  // const lowerCase = useMemo(() => /[a-z]/g, []);
  // const upperCase = useMemo(() => /[A-Z]/g, []);
  // const numbers = useMemo(() => /[0-9]/g, []);

  const validateEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleEmailChange = (e) => {
     setEmail(e.target.value);
  };

  useEffect(() => {
    if (email && !validateEmail(email)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }
  }, [email]);


  const handlePasswordChange = (e) => {
      setPassword( e.target.value);
  }

  useEffect(() => {
    if (password) {
      if (!password.match(lowerCase)) {
        setPasswordError("Password should contain lowercase letters.");
      } else if (!password.match(upperCase)) {
        setPasswordError("Password should contain uppercase letters.");
      } else if (!password.match(numbers)) {
        setPasswordError("Password should contain numbers.");
      } else if (password.length < 10) {
        setPasswordError("Password must be at least 10 characters.");
      } else {
        setPasswordError("");
      }
    }
  }, [password, lowerCase, upperCase, numbers]); 

  // below the code i used in useEffect method for cathing the validation errors
  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);
  //   if (!validateEmail(newEmail)) {
  //     setEmailError("Invalid email format.");
  //   } else {
  //     setEmailError("");
  //   }
  // };


  // const handlePasswordChange = (e) => {
  //   const newPassword = e.target.value;
  //   setPassword(newPassword);

  //   if (!newPassword.match(lowerCase)) {
  //     setPasswordError("Password should contain lowercase letters.");
  //     // setSuccess("");
  //   } else if (!newPassword.match(upperCase)) {
  //     setPasswordError("Password should contain uppercase letters.");
  //     // setSuccess("");
  //   } else if (!newPassword.match(numbers)) {
  //     setPasswordError("Password should contain numbers.");
  //     // setSuccess("");
  //   } else if (newPassword.length < 10) {
  //     setPasswordError("Password must be at least 10 characters.");
  //     // setSuccess("");
  //   } else {
  //     setPasswordError("");
  //     // setSuccess("Password meets all criteria!");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      dispatch(loginFailure("Fix the errors before submitting."));
      return;
    }

    const credentials = { email, password };
    dispatch(loginSuccess(credentials));

    localStorage.setItem("token", JSON.stringify(credentials));

    navigateUrl("/ProductPage");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "400px",
            maxWidth: "350px",
            my: 2,
            padding: "40px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
          component="form"
          className="loginForm"
          onSubmit={handleSubmit}
        >
          <div>
            <Typography variant="h4" align="center">
              Welcome
            </Typography>
            <Typography align="center" variant="h6" color="grey">
              Sign in to Continue!
            </Typography>
          </div>

          <FormControl>
            <Box component="label" className="EmailLabel" sx={{ mt: 2 }}>
              Email
            </Box>
            <Input
              placeholder="Please Enter The User Email"
              className="emailInputBox"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <Box sx={{ minHeight: "25px", pt: "2px", pb: "2px" }}>
              {emailError && (
                <Typography style={{ color: "red", fontSize: "14px" }}>
                  {emailError}
                </Typography>
              )}
            </Box>

            <Box component="label" className="passwordLabel" sx={{ mt: 2 }}>
              Password
            </Box>
            <Input
              className="passwordInputBox"
              type="password"
              placeholder="Please enter the Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <Box sx={{ minHeight: "25px", pt: "2px", pb: "2px" }}>
              {passwordError && (
                <Typography style={{ color: "red", fontSize: "14px" }}>
                  {passwordError}
                </Typography>
              )}
            </Box>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              type="submit"
              className="submitData"
            >
              SIGN IN
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default Login;
