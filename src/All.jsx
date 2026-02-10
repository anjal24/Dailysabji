import Fruits from "./Fruits";
import Vegetables from "./Vegetables";

const All = ({ data = [] }) => {
  return (
    <div className="all-products-view">
      <div className="sections-wrapper">
        <Fruits fruitsData={data} />
        <br />
        <Vegetables vegetablesData={data} />
      </div>
    </div>
  );
};
// At the bottom of All.jsx
export default All;
