import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart.js";

const Home = () => {
  let cartItems = [];
  console.log(cartItems);
  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route exact path="/" element={<Main cartItems={cartItems} />} />
        <Route exact path="/itemDetails/:id" element={<ItemDetails />} />
        <Route exact path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
