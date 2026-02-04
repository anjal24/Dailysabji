import { Link, Outlet } from "react-router";
import "./header.css";
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div>
          <Link className="link" to={"/"}>
            <img alt="Logo" src="https://www.dailysabji.com/assets/logo.png" />
          </Link>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              {/* <Link  className="link"to ="/categories">Categories</Link> */}
              <a className="link" href="#categories-section">
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Navbar;
