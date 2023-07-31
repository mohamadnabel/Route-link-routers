import React from "react";
import Home from "./routes/Home/home";
import About from "./routes/ContactUs/Contact";
import ContactUs from "./routes/AboutUs/About";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          {" "}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutUs" element={<About />}></Route>

        <Route path="/contactUs" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
