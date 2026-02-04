import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";
import "./Login.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login Attempt:", values);
      alert("Login successful!");
    },
  });

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login to Daily Sabji</h2>
        <p>Enter your details to manage your fresh deliveries.</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-text">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-text">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          Don't have an account? <Link to="/contact">Contact support</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
