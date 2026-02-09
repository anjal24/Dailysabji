import { useEffect, useState } from "react";
import axios from "axios";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";

const All = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dailysabji.com/dsapi/subservices/generic") // single backend API
      .then((res) => {
        console.log(res.data); // ✅ yahin valid hai
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // data split
  const fruits = data.filter((item) => item.type === "fruit");
  const vegetables = data.filter((item) => item.type === "vegetable");

  return (
    <div className="browse-content">
      <Fruits fruitsData={fruits} />
      <Vegetables vegetablesData={vegetables} />
    </div>
  );
};

export default All;
