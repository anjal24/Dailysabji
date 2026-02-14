import "./Home.css";
import Categories from "./Categories";
import About from "./About";
const Home = () => {
  return (
    <>
      <div className="hero-section" id="home">
        <div className="hero-left">
          <h1>
            Eat Better
            <br />
            Live Better
            <br />
            We
            <span className="highlight">Deliver</span>
          </h1>

          <p className="sub-heading">
            Cultivating Freshness: We bring you The Finest <br />
            Vegetables and fruits, Direct to your door
          </p>
        </div>

        <div className="hero-right">
          <img
            alt="Fruit Basket"
            src="https://dailysabji.com/Fruitsbasket.png"
          />
          <div className=" card-top">
            <h2>20,000+</h2>
            <p>Products across categories</p>
          </div>
          <div className="card-bottom">
            <h2>10,000+</h2>
            <p>Customers served daily</p>
          </div>
        </div>
      </div>

      <div id="categories-section">
        <Categories />
      </div>
      {/* 3rd page */}
      <section className="Whywebest-container">
        <div className="Section-left">
          <h1 className="Heading">Why We Are The Best?</h1>
          <div className="card">
            <div className="feature-card">
              <h2>Farm-Fresh Quality</h2>
              <p>
                We deliver vegetables and fruits from trusted farmers and local
                markets. No middlemen- just pure freshness.
              </p>
            </div>
            <div className="feature-card">
              <h2>Fast & Reliable Services</h2>
              <p>
                We make sure your order reaches you on time.Quick delivery +
                real-time updates = hassle-free shopping.
              </p>
            </div>
            <div className="feature-card">
              <h2>100% Customer Satisfaction</h2>
              <p>
                Easy replacements, quick support, and complete satisfaction
                guaranteed.
              </p>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img
            alt="Daily Sabji Banner"
            src="https://assets.tristatetechnology.com/images/on-demand-grocery/introduction-pic.png"
          />
        </div>
      </section>
      {/* 4th page */}
      <section className="store-section">
        <div className="store-content">
          <div className="store-left">
            <img
              alt="Fresh Vegetables"
              className="store-image"
              src="https://dailysabji.com/Fruits.png"
            />
          </div>
          <div className="store-right">
            <h3 className="tagline">Fresh ● Healthy ● Delevered Daily</h3>
            <h1 className="heading">
              Get Frash Vegetables Delevered Every Morning
            </h1>
            <p className="subtext">
              "Daily Sabji bring ** farm-fresh vegetables & fruits** straight to
              your door. Enjoy premium quality, hygienic packing, and early
              morning delivery."
            </p>
            <div className="offer-box">
              🎉
              <span>
                "Get"
                <strong>50% OFF</strong>
                "on your First Order!"
              </span>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.wertone.dailysabji"
              target="_blank"
              rel="noopner norferrer"
            >
              <button className="order-btn">Order Fresh Now →</button>
            </a>
            <p className="small-note">
              {" "}
              *offer valid for new customers in Selected locations.
            </p>
          </div>
        </div>
      </section>
      {/* 5th page */}
      <div id="about">
        <About />
      </div>
      {/* 6th page */}
      <section className="downloadApp" id="downloadApp">
        <div className="AppImage">
          <img alt="AppScreenshot" src="https://dailysabji.com/PhoneImg.png" />
        </div>
        <div className="AppDetails">
          <div className="Heading">
            <p>Download our app</p>
            <h1>Let's Order With Our App</h1>
          </div>
          <div className="AppLink">
            <div className="PlayStoreLink">
              <a
                href="https://play.google.com/store/apps/details?id=com.wertone.dailysabji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="PlaystoreImage"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/daily-sabji/id6756043023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="AppStoreImage"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                />
              </a>
            </div>
            <div className="QR-Image">
              <img alt="QR Android" src="https://dailysabji.com/qr-code.png" />
              <img alt="QR Image" src="https://dailysabji.com/qr-codeIos.png" />
            </div>
          </div>
        </div>
      </section>
      {/* 7th page */}
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1: Logo and About */}
          <div className="footer-col">
            <h2 className="logo">DailySabji</h2>
            <p className="footer-desc">
              Fresh vegetables & fruits delivered every morning at your
              doorstep. We bring farm-fresh quality directly from trusted
              farmers.
            </p>
            <div className="social-icons">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#categories-section">Browse Categories</a>
              </li>
              <li>
                <a href="#aboutUs">Why Choose Us</a>
              </li>
              <li>
                <a href="#downloadApp">Download App</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact and App Badges */}
          <div className="footer-col">
            <h3>Customer Support</h3>
            <ul>
              <li>📞 +91 9579357086</li>
              <li>✉ contact.dailysabji@gmail.com</li>
              <li>
                <a className="footer-link" href="/helpandsupport">
                  📬 Contact Us
                </a>
              </li>
            </ul>
            <div className="app-buttons">
              <a
                href="https://play.google.com/store/apps/details?id=com.wertone.dailysabji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Google Play"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/daily-sabji/id6756043023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="App Store"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span> | </span>
            <a href="/terms-condition">Terms & Conditions</a>
          </div>
          <p> © 2026 DailySabji — All Rights Reserved. </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
