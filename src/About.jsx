import React from "react";
import "./About.css";

const About = () => {
  const features = [
    "Discover a wide variety of fresh vegetables, fruits, and daily essentials—all handpicked to ensure quality you can trust.",
    "Experience superfast delivery services that bring your groceries right to your doorstep—fresh, timely, and hassle-free.",
    "Save more every day with Daily Sabji's unbeatable prices, exclusive offers, and value-packed combos.",
    "We partner with local farmers and verified suppliers to deliver farm-fresh produce straight from the source to your kitchen.",
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Side: Text and Cards */}
        <div className="about-text-section">
          <h1 className="about-title">About Us?</h1>
          <p className="about-subtitle">
            Effortless shopping with trusted brands, competitive prices, and
            quick, reliable delivery.
          </p>

          <div className="feature-list">
            {features.map((text, index) => (
              <div key={index} className="feature-card">
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Arched Image */}
        <div className="about-image-section">
          <div className="image-arch-wrapper">
            <img
              src="https://iamosahan.com/preview/eatpure/img/hero-banner2.png"
              alt="Delivery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
