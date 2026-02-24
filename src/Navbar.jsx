import { Link, Outlet } from "react-router";
import "./header.css";
// 1. Import useSelector from react-redux
import { useSelector } from "react-redux";

const Navbar = () => {
  // 2. Access the items from your Redux cart slice
  const cartItems = useSelector((state) => state.cart.items);

  // 3. Calculate total quantity (sum of all items' quantities)
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div>
      <div className="header">
        <div>
          <Link className="link" to={"/"}>
            <img alt="Logo" src="https://www.dailysabji.com/assets/logo.png" />
          </Link>
        </div>
        <div className="nav-tabs">
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
              <a className="link" href="#categories-section">
                Categories
              </a>
            </li>
            {/* shop */}
            {/* Navbar.jsx mein Shop link ko change karein */}
            <li>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </li>

            {/* 4. Add the Cart Link with the Badge */}
            <li>
              <Link className="link cart-link" to="/cart">
                🛒 <span className="cart-count">{totalItems}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
