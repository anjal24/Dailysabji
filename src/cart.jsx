import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./slice";
import "./header.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalBill = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty! 🛒</div>;
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.subServiceName} className="cart-item">
            <img
              src={`https://dailysabji.com/${item.subServiceImageUrl}`}
              alt={item.subServiceName}
            />

            <div className="item-details">
              <h3>{item.subServiceName}</h3>
              <p>Price: Rs {item.price}</p>
              <p className="item-total">
                Subtotal: Rs {item.price * item.quantity}
              </p>
            </div>

            <div className="quantity-controls">
              <button
                // CORRECTED: Passing subServiceName instead of subServiceId
                onClick={() => dispatch(decrementQuantity(item.subServiceName))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                // CORRECTED: Passing subServiceName instead of subServiceId
                onClick={() => dispatch(incrementQuantity(item.subServiceName))}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total Amount: Rs {totalBill}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
