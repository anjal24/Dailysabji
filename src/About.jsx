import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="About-container" id="aboutUs">
      <div className="Section-left">
        <div className="Heading">
          <h1>About Us?</h1>
          <p>
            Effortless shopping with trusted brands, competitive prices, and
            quick, reliable delivery.
          </p>
        </div>

        <div className="Cards">
          <div className="Characteristics-Card">
            <p>
              Discover a wide variety of fresh vegetables, fruits, and daily
              essentials—all handpicked to ensure quality you can trust."
            </p>
          </div>

          <div className="Characteristics-Card">
            <p>
              "Experience superfast delivery services that bring your groceries
              right to your doorstep—fresh, timely, and hassle-free.
            </p>
          </div>

          <div className="Characteristics-Card">
            <p>
              Save more every day with Daily Sabji's unbeatable prices,
              exclusive offers, and value-packed combos.
            </p>
          </div>

          <div className="Characteristics-Card">
            <p>
              We partner with local farmers and verified suppliers to deliver
              farm-fresh produce straight from the source to your kitchen.
            </p>
          </div>
        </div>
      </div>

      <div className="Section-right">
        <img
          src="https://iamosahan.com/preview/eatpure/img/hero-banner2.png"
          alt="Delivery"
        />
      </div>
    </section>
  );
};

export default About;
