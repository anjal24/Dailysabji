import "./header.css";

const BASE_URL = "https://dailysabji.com/";

const Vegetables = ({ vegetablesData = [] }) => {
  return (
    <div className="vegetables-container">
      <h1>Vegetables</h1>

      {vegetablesData.map((item, index) => (
        <div
          key={item.id}
          className="vegetables-item"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* correct name */}
          <h2>{item.subServiceName}</h2>

          <div>
            {/* ✅ CONCAT HERE */}
            <img
              src={BASE_URL + item.subServiceImageUrl}
              alt={item.subServiceName}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vegetables;
