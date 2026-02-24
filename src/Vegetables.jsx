import "./header.css";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity } from "./slice";

const Vegetables = ({ vegetablesData = [], sharedIndex }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const safeIndex =
    vegetablesData.length > 0 ? sharedIndex % vegetablesData.length : 0;
  const moveDistance = safeIndex * 270;

  return (
    <div className="vegetable-container">
      <h1>Fresh Vegetables</h1>
      <div className="carousel-window">
        <div
          className="new-carousel-track"
          style={{
            display: "flex",
            gap: "20px",
            transform: `translateX(-${moveDistance}px)`,
            transition: "transform 0.8s ease",
          }}
        >
          {vegetablesData.map((item, i) => {
            const unitPrice = (i + 1) * 20;
            const cartItem = cartItems.find(
              (ci) => ci.subServiceName === item.subServiceName,
            );
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div key={item.subServiceName} className="vegetables-item">
                {/* YAHAN DEKHIYE: Link ke andar Image aur Title hai */}
                <Link
                  to={`/shop/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h2>{item.subServiceName}</h2>
                  <img
                    src={`https://dailysabji.com/${item.subServiceImageUrl}`}
                    alt={item.subServiceName}
                  />
                </Link>

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

export default Vegetables;
