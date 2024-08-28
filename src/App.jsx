// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Cart from "./components/Cart"; // Import Cart component
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Main /></>} />
        <Route path="/shop" element={<><Navbar /><Shop /></>} />
        <Route path="/cart" element={<><Navbar /><Cart /></>} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
}
