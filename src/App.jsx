import { Navigate, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import Navbar from "./Navbar";
import All from "./All";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";
import Shop from "./shop";
import Cart from "./cart";

function App() {
  const [data, setData] = useState([]);
  // 1. ADDED SHARED INDEX FOR SYNC
  const [sharedIndex, setSharedIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://dailysabji.com/dsapi/subservices/generic")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  // 2. SHARED TIMER: Tells both components to move together
  useEffect(() => {
    const interval = setInterval(() => {
      setSharedIndex((prev) => prev + 1);
    }, 3000); // Jump every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const fruits = data.filter((item) => item?.service?.serviceName === "Fruits");
  const vegetables = data?.filter(
    (item) => item?.service?.serviceName === "Vegetables",
  );

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="cart" element={<Cart />} />
        {/* shop  route update*/}

        <Route path="shop" element={<Shop data={data} />} />
        <Route path="shop/:id" element={<Shop data={data} />} />
        <Route path="/" element={<Home />}>
          <Route
            index
            element={<All data={data} sharedIndex={sharedIndex} />}
          />

          {/* 3. PASS THE SHARED INDEX TO BOTH */}
          <Route
            path="fruits"
            element={<Fruits fruitsData={fruits} sharedIndex={sharedIndex} />}
          />
          <Route
            path="vegetables"
            element={
              <Vegetables
                vegetablesData={vegetables}
                sharedIndex={sharedIndex}
              />
            }
          />
        </Route>
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
