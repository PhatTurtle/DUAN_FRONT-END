import React from "react";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Register from "../Register/Register";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("You must fill in this section!"),

      password: Yup.string().required("You must fill in this sectuon!"),
    }),
  });
  return (
    <div className="body">
      <div className="back"></div>
      <div className="login">
        <div className="content">
          <a href="#" className="logo">
            SOFA
          </a>
          <h2>Welcome</h2>
          <h3>To our Name Website</h3>

          <div className="icon">
            <i class="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <div className="home">
          <div className="account">
            <h2> Sign In </h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="input">
              <input
                className="input-mail"
                type="text"
                name="username"
                placeholder="Enter your Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
              {formik.errors.username && formik.touched.username && (
                <p>{formik.errors.username}</p>
              )}
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="input">
              <input
                className="input-mail"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                placeholder="Enter your Password"
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
              <i class="fa-solid fa-lock"></i>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label> Remember me </label>
              <a href="#"> Forgot password </a>
            </div>
            <div className="input">
              <input type="submit" className="button" value=" Sign In" />
            </div>
            <div className="log">
              <p>Already have an account?</p>
              <a href={<Register />}>Sign Up here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
