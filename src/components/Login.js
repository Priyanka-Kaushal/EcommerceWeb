import "../styles/Design.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const title = "Welcome";
  const signIn = "Sign In";
  const image = "./decipherZoneLogo.png";

  const navogateUrl = useNavigate();

  // State to hold email, password, and errors
  const [values, setValues] = useState({ email: "" });
  const [errors, setError] = useState({});
  const [valuesPassword, setPswrdValues] = useState({ password: "" });
  const [errorpswrd, setErrorpswrdMsg] = useState("");

  console.log(values, valuesPassword);

  const validateEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!validateEmail(values.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!valuesPassword.password) {
      errors.password = "Password is required";
    } else if (errorpswrd !== "Password is strong!") {
      errors.password = errorpswrd;
    }

    setError(errors);
  };

  // Function to set email value
  const setEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  // Function to set password value and perform validation
  const setPassword = (e) => {
    const new_pass = e.target.value;
    setPswrdValues({ password: new_pass });

    let lowerCase = /[a-z]/g;
    // let upperCase = /[A-Z]/g;
    // let numbers = /[0-9]/g;

    if (!new_pass.match(lowerCase)) {
      setErrorpswrdMsg("Password should contain lowercase letters!");
    }
    // else if (!new_pass.match(upperCase)) {
    //   setErrorpswrdMsg("Password should contain uppercase letters!");
    // }
    // else if (!new_pass.match(numbers)) {
    //   setErrorpswrdMsg("Password should contain numbers!");
    // }
    // else if (new_pass.length < 10) {
    //   setErrorpswrdMsg("Password length should be at least 10 characters.");
    // }
    else {
      setErrorpswrdMsg("Password is strong!");
    }
  };

  // https://reqres.in/api/login

  //  post api email and password
  // {
  //   "email": "eve.holt@reqres.in",
  //   "password": "pistol"
  // }
  const handleTheApi = () => {
    console.log(values, valuesPassword);
    axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: valuesPassword.password,
      })
      .then(function (result) {
        localStorage.setItem("token", result.data.token);

        navogateUrl("/dashboard");
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="LoginMain">
      <div className="sec-2">
        <form className="mainSec" onSubmit={handleSubmit}>
          <section className="sec">
            <img className="site-logo-image" src={image} alt="Decipher Zone" />
            <header className="headerLogin"> {title} </header>
            <h1 className="signInForm"> {signIn} </h1>

            <input
              className="labdesign"
              type="text"
              placeholder="Enter Your Email Id"
              value={values.email}
              onChange={setEmail}
              required
            />

            {errors.email && <p className="errorMsg"> {errors.email}</p>}

            <input
              className="labdesign"
              type="password"
              placeholder="Enter Your Password"
              onChange={setPassword}
              value={valuesPassword.password}
              required
            />

            <br />

            {errors.password && <p className="errorMsg">{errors.password}</p>}

            <input
              className="buttonDesign"
              type="submit"
              value="Submit"
              onClick={handleTheApi}
            />
          </section>
        </form>
      </div>
    </div>
  );
}

export default Login;
