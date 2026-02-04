import { NavLink, Outlet } from "react-router";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="categories-wrap" id="categories-section">
      {/* Header container */}
      <div className="header-category">
        <h1> Browse Categories </h1>

        <div className="categories-tabs">
          <NavLink className="link" to="/">
            All
          </NavLink>
          <NavLink className="link" to="fruits">
            Fruits
          </NavLink>
          <NavLink className="link" to="vegetables">
            Vegetables
          </NavLink>
        </div>
      </div>

      <div className="category-content">
        <Outlet />
      </div>
    </div>
  );
};
export default Categories;
