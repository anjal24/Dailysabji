import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css";

const Contact = () => {
  const contactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    concern: Yup.string().required("Please select a concern"),
    description: Yup.string().min(10, "Too short!").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      concern: "",
      description: "",
      file: null,
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("Form Data", values);
      alert("Message Sent!");
    },
  });

  return (
    <div className="contact-page-wrapper">
      <div className="contact-card">
        {/* Left Side: Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Fill the form and our team will get back to you within 24 hours.
          </p>
          <ul className="info-list">
            <li>
              <span>📞</span> +91 9005033499
            </li>
            <li>
              <span>📧</span> contact.dailysabji@gmail.com
            </li>
            <li>
              <span>📍</span> Indore
            </li>
          </ul>
        </div>

        {/* Right Side: Formik Form */}
        <div className="contact-form-section">
          <h2>Help & Support</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="error">{formik.errors.name}</div>
                )}
              </div>
              <div className="input-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  {...formik.getFieldProps("mobile")}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="error">{formik.errors.mobile}</div>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
              <div className="input-group">
                <label>Pick a Concern</label>
                <select name="concern" {...formik.getFieldProps("concern")}>
                  <option value="">Select an option</option>
                  <option value="order">Order Issue</option>
                  <option value="delivery">Delivery Issue</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.concern && formik.errors.concern && (
                  <div className="error">{formik.errors.concern}</div>
                )}
              </div>
            </div>

            <div className="input-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Describe your concern..."
                rows="4"
                {...formik.getFieldProps("description")}
              />
            </div>

            <div className="input-group full-width">
              <label>Upload File (optional)</label>
              <input
                type="file"
                onChange={(event) =>
                  formik.setFieldValue("file", event.currentTarget.files[0])
                }
              />
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
