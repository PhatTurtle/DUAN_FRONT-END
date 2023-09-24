import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({});
  return (
    <>
      <div className="body">
        <div className="back"></div>
        <div className="login">
          <div className="content">
            <a href="#" className="logo">
              SOFA
            </a>
            <h2>Welcome</h2>
            <h3>To Your Name Website</h3>

            <div className="icon">
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>

          <div className="home">
            <div className="account">
              <h2> Sign Up </h2>
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
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                />
                {formik.errors.username && formik.touched.username && (
                  <p>{formik.errors.username}</p>
                )}
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="input">
                <input
                  className="input-mail"
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                />
                {formik.errors.username && formik.touched.username && (
                  <p>{formik.errors.username}</p>
                )}
                <i class="fa-solid fa-envelope"></i>
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
              <div className="input">
                <input
                  className="input-mail"
                  type="password"
                  name="confimPassword"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  placeholder="Enter your ConfimPassword"
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
                <a href="#">Sign In here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
