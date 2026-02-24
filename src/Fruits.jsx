import "./header.css";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity } from "./slice";

const BASE_URL = "https://dailysabji.com/";

const Fruits = ({ fruitsData = [], sharedIndex }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const safeIndex = fruitsData.length > 0 ? sharedIndex % fruitsData.length : 0;
  const moveDistance = safeIndex * 270;

  return (
    <div className="fruit-container">
      <h1>Fresh Fruits</h1>
      <div className="carousel-window">
        <div
          className="fruit-slider-track"
          style={{
            display: "flex",
            gap: "20px",
            transform: `translateX(-${moveDistance}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {fruitsData.map((item, index) => {
            const unitPrice = (index + 1) * 35;

            const cartItem = cartItems.find(
              (i) => i.subServiceName === item.subServiceName,
            );
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div key={item.subServiceName} className="fruit-card">
                {/* --- FIX: Link ke ANDAR Name aur Image ko daala gaya hai --- */}
                <Link
                  to={`/shop/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <h2 className="fruit-name">{item.subServiceName}</h2>
                  <div className="image-wrapper">
                    <img
                      src={`${BASE_URL}${item.subServiceImageUrl}`}
                      alt={item.subServiceName}
                    />
                  </div>
                </Link>
                {/* --- Fix End --- */}

                <p className="price-text">
                  Rs {quantity > 0 ? unitPrice * quantity : unitPrice}
                </p>

                {quantity === 0 ? (
                  <button
                    className="add-to-cart-btn"
                    onClick={() =>
                      dispatch(addToCart({ ...item, price: unitPrice }))
                    }
                  >
                    ADD TO CART
                  </button>
                ) : (
                  <div className="qty-controls">
                    <button
                      onClick={() =>
                        dispatch(decrementQuantity(item.subServiceName))
                      }
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(incrementQuantity(item.subServiceName))
                      }
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
