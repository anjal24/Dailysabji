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
      <div id="about">
        <About />
      </div>
    </>
  );
};

export default Home;
