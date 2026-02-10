import "./header.css";

const BASE_URL = "https://dailysabji.com/";

const Vegetables = ({ vegetablesData = [] }) => {
  // 👉 vegetables filter
  const vegetables = vegetablesData.filter(
    (item) => item.service?.serviceName === "Vegetables",
  );

  // WE DOUBLE THE LIST: This makes the loop seamless
  const slidingVegetables = [...vegetables, ...vegetables];

  return (
    <div className="vegetables-container">
      <h1>Vegetables</h1>

      {/* 1. Added the track wrapper for the carousel animation */}
      <div className="vegetables-grid">
        {slidingVegetables.map((item, index) => (
          <div key={`${item.id}-${index}`} className="vegetables-item">
            <h2>{item.subServiceName}</h2>
            <img
              src={`${BASE_URL}${item.subServiceImageUrl}`}
              alt={item.subServiceName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;
