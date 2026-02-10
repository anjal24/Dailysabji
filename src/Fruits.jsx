import "./header.css";

const BASE_URL = "https://dailysabji.com/";

const Fruits = ({ fruitsData = [] }) => {
  const fruits = fruitsData.filter(
    (item) => item.service?.serviceName === "Fruits",
  );

  // Double the list so the sliding animation is seamless
  const slidingFruits = [...fruits, ...fruits];

  return (
    <div className="fruit-container">
      <h1>Fruits</h1>
      {/* 1. Added this wrapper div to act as the moving track */}
      <div className="fruit-grid">
        {slidingFruits.map((item, index) => (
          <div key={`${item.id}-${index}`} className="fruit-item">
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

export default Fruits;
