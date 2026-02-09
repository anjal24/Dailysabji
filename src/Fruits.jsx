import "./header.css";

const BASE_URL = "https://dailysabji.com/";

const Fruits = ({ fruitsData = [] }) => {

  console.log(fruitsData,"fruitsData")
  return (
    <div className="fruit-container">
      <h1>Fruits</h1>

      {fruitsData.map((item, index) => (
        <div
          key={item.id}
          className="fruit-item"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* correct name */}
          <h2>{item.subServiceName}</h2>

          <div>
            {/* ✅ CONCAT HERE */}
            <img
              src={`${BASE_URL}${item?.subServiceImageUrl}`}
              alt={item.subServiceName}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fruits;
