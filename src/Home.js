import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart.js";
import Footer from "./components/Footer.js";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  // console.log(cartItems);
  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route exact path="/" element={<Main setCartItems={setCartItems} />} />
        <Route exact path="/itemDetails/:id" element={<ItemDetails />} />
        <Route exact path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Home;
