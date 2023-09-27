import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confimPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Your name must be at least 3 characters")
        .max(20, "Your name must be under 20 characters")
        .required("You must fill in this section!"),
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      phone: Yup.number()
        .min(0, "Your phone must be at least 0 characters")
        .max(10, "Your name must be under 10 characters")
        .required("You must fill in this section!"),
      password: Yup.string()
        .min(8, "Your name must be at least 3 characters")
        .required("You must fill in this section!"),
      confimPassword: Yup.string()
        .oneOf([Yup.ref("password"), "Password does not match"])
        .required("You must fill in this section!"),
    }),
  });
  return (
    <>
      <div className="body">
        <div className="back"></div>
        <div className="login">
          <div className="content">
            <Link to="/" className="logo">
              SOFA
            </Link>
            <h2>Welcome</h2>
            <h3>Furniture E-Commerce</h3>

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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p>{formik.errors.email}</p>
                )}
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="input">
                <input
                  className="input-mail"
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p>{formik.errors.phone}</p>
                )}
                <i class="fa-solid fa-phone"></i>
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
                  value={formik.values.confimPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  placeholder="Enter your ConfimPassword"
                />
                {formik.errors.confimPassword &&
                  formik.touched.confimPassword && (
                    <p>{formik.errors.confimPassword}</p>
                  )}
                <i class="fa-solid fa-lock"></i>
              </div>

              <div className="input">
                <input type="submit" className="button" value=" Sign Up" />
              </div>
              <div className="log">
                <Link to="/login">Sign In here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
