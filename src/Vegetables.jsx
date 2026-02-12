import "./header.css";
const Vegetables = ({ vegetablesData = [], sharedIndex }) => {
  // Use modulo so index stays within the array length
  const safeIndex =
    vegetablesData.length > 0 ? sharedIndex % vegetablesData.length : 0;
  const moveDistance = safeIndex * 270; // 250px + 20px gap

  return (
    <div className="vegetable-container">
      <h1>Vegetables</h1>
      <div className="carousel-window">
        <div
          className="new-carousel-track"
          style={{
            transform: `translateX(-${moveDistance}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)", // The "No Jhatka" glide
          }}
        >
          {vegetablesData.map((item, i) => (
            <div key={i} className="vegetables-item">
              <h2>{item.subServiceName}</h2>
              <img
                src={`https://dailysabji.com/${item.subServiceImageUrl}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetables;
