import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import About from "./pages/About";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
