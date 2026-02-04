import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import Navbar from "./Navbar";
import All from "./All";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";

function App() {
  return (
    <>
      <Routes>
        {/* --- Everything in this group SHOWS the Navbar --- */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />}>
            <Route index element={<All />} />
            <Route path="fruits" element={<Fruits />} />
            <Route path="vegetables" element={<Vegetables />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>

        {/* --- Everything below this does NOT show the Navbar --- */}
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

        {/* Redirect for 404s */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
