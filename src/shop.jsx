import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "./slice";

const Shop = ({ data }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const BASE_URL = "https://dailysabji.com/";

  // Scroll to top when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // --- CASE 1: Agar Navbar se aaye hain (No ID) ---
  if (!id) {
    return (
      <div
        className="all-products-view"
        style={{ padding: "20px", marginTop: "100px" }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          All Fruits & Vegetables
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {data.map((item) => {
            // each item calculate unique..
            const categoryList = data.filter(
              (c) => c?.service?.serviceName === item?.service?.serviceName,
            );
            const indexInCat = categoryList.findIndex((i) => i.id === item.id);
            const price = (indexInCat + 1) * 20;

            return (
              <div
                key={item.id}
                style={{ ...suggestionCard, width: "200px", padding: "20px" }}
              >
                <Link
                  to={`/shop/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={`${BASE_URL}${item.subServiceImageUrl}`}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                  <h3 style={{ margin: "10px 0" }}>{item.subServiceName}</h3>
                  <p style={{ color: "green", fontWeight: "bold" }}>₹{price}</p>
                </Link>
                <button
                  onClick={() =>
                    dispatch(addToCart({ ...item, quantity: 1, price: price }))
                  }
                  style={{
                    ...addCartBtn,
                    padding: "8px 15px",
                    fontSize: "14px",
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --- CASE 2: if vender have click with id  ---
  const selectedProduct = data.find((item) => String(item.id) === id);
  const remainingProducts = data.filter((item) => String(item.id) !== id);

  if (!selectedProduct)
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>Loading...</div>
    );

  // Price Calculation for Single View
  const categoryList = data.filter(
    (item) =>
      item?.service?.serviceName === selectedProduct?.service?.serviceName,
  );
  const indexInCategory = categoryList.findIndex(
    (item) => String(item.id) === id,
  );
  const unitPrice = (indexInCategory + 1) * 20;
  const [qty, setQty] = useState(1);

  return (
    <div className="shop-page" style={{ padding: "20px", marginTop: "130px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        <img
          src={`${BASE_URL}${selectedProduct.subServiceImageUrl}`}
          style={{ width: "100%", maxWidth: "350px", borderRadius: "15px" }}
        />
        <div style={{ flex: "1", minWidth: "300px" }}>
          <span
            style={{
              background: "#e1f5fe",
              color: "#01579b",
              padding: "4px 12px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            {selectedProduct?.service?.serviceName}
          </span>
          <h1>{selectedProduct.subServiceName}</h1>
          <h2 style={{ color: "green", fontSize: "32px" }}>
            ₹{unitPrice * qty}
          </h2>
          <div
            style={{
              margin: "25px 0",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              style={btnStyle}
            >
              {" "}
              -{" "}
            </button>
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>{qty}</span>
            <button onClick={() => setQty(qty + 1)} style={btnStyle}>
              {" "}
              +{" "}
            </button>
          </div>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  ...selectedProduct,
                  quantity: qty,
                  price: unitPrice,
                }),
              )
            }
            style={addCartBtn}
          >
            ADD {qty} TO CART
          </button>
        </div>
      </div>
      {/* Suggestions code will same  */}
    </div>
  );
};

// Styles (same as before)
const btnStyle = {
  padding: "8px 20px",
  cursor: "pointer",
  border: "1px solid #ddd",
  background: "#f9f9f9",
  borderRadius: "5px",
  fontSize: "20px",
};
const addCartBtn = {
  background: "#ff9f00",
  color: "white",
  padding: "15px 40px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};
const suggestionCard = {
  border: "1px solid #ddd",
  padding: "15px",
  textAlign: "center",
  borderRadius: "12px",
  background: "#fff",
  transition: "0.3s",
};

export default Shop;
