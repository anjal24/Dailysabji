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

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dailysabji.com/dsapi/subservices/generic")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  const fruits = data.filter((item) => item.service.serviceName === "Fruits");

  const vegetables = data.filter(
    (item) => item.service.serviceName === "Vegetables",
  );

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />}>
          {/* 👇 DATA PASS HERE */}
          <Route index element={<All data={data} />} />
          <Route path="fruits" element={<Fruits fruitsData={data} />} />
          <Route
            path="vegetables"
            element={<Vegetables vegetablesData={data} />}
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
