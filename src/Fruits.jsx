import "./header.css";

const BASE_URL = "https://dailysabji.com/";

const Fruits = ({ fruitsData = [], sharedIndex }) => {
  // 1. Logic to wrap the index so it doesn't exceed the data length
  const safeIndex = fruitsData.length > 0 ? sharedIndex % fruitsData.length : 0;

  // 2. Calculate distance: Card Width (250px) + Gap (20px) = 270px
  const moveDistance = safeIndex * 270;

  return (
    <div className="fruit-container">
      <h1>Fruits</h1>

      {/* The window stays still, the track moves inside it */}
      <div className="carousel-window">
        <div
          className="fruit-slider-track"
          style={{
            display: "flex",
            gap: "20px",
            // Uses element.style for the jump
            transform: `translateX(-${moveDistance}px)`,
            // Cubic-bezier makes the move smooth, not a 'jhatka'
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {fruitsData.map((item, index) => (
            <div key={`${item.id}-${index}`} className="fruit-card">
              <h2 className="fruit-name">{item.subServiceName}</h2>
              <div className="image-wrapper">
                <img
                  src={`${BASE_URL}${item.subServiceImageUrl}`}
                  alt={item.subServiceName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
