import Fruits from "./Fruits";
import Vegetables from "./Vegetables";

const All = ({ data = [], sharedIndex }) => {
  // 1. Fruits ko alag kijiye
  const fruitsOnly = Array.isArray(data)
    ? data.filter((item) => item?.service?.serviceName === "Fruits")
    : [];

  // 2. Vegetables ko alag kijiye
  const vegetablesOnly = Array.isArray(data)
    ? data.filter((item) => item?.service?.serviceName === "Vegetables")
    : [];

  return (
    <div className="all-products-view">
      <div className="sections-wrapper">
        {/* Ab sirf fruits jaenge yahan */}
        <Fruits fruitsData={fruitsOnly} sharedIndex={sharedIndex} />

        <br />

        {/* Aur sirf vegetables jaenge yahan */}
        <Vegetables vegetablesData={vegetablesOnly} sharedIndex={sharedIndex} />
      </div>
    </div>
  );
};

export default All;
