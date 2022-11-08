import "./App.css";
import Home from "./components/Home/Home";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Common/Footer/Footer";
import Faq from "./components/Faq/Faq";
import AboutUs from "./components/AboutUs/AboutUs";
// import Blog from "./components/Blog/Blog";
import LundryServices from "./components/Services/LundryService/LaundryServices";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import Blogs from "./components/Blog/Blogs";
import OrderService from "./components/Pages/OrderService/OrderService";
import Dhanmondi from "./components/Pages/Dhanmondi/Dhanmondi";
import Mirpur from "./components/Pages/Mirpur/Mirpur";
import ScrollToTop from "./components/Common/Scroll/ScrollToTop";
import FaqContents from "./components/Faq/FaqContents";
import NotFound from "./components/NotFound";
import Privacy from "./components/Privacy&Terms/Privacy";
import TermsCondition from "./components/Privacy&Terms/TermsCondition";
import data from "./fakeData/data";
import Cart from "./components/Services/Cart/Cart";
import AddProduct from "./components/Pages/AddProduct/AddProduct";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const clickToAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const clickToRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* <Route path="/blog" element={<Blog/>} />
        <Route path="/blogs" element={<Blogs/>} /> */}
        <Route
          path="/laundryService"
          element={
            <LundryServices clickToAdd={clickToAdd} products={products} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orderService" element={<OrderService />} />
        <Route path="/dhanmondi" element={<Dhanmondi />} />
        <Route path="/mirpur" element={<Mirpur />} />
        <Route path="/faqcontent" element={<FaqContents />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              clickToAdd={clickToAdd}
              clickToRemove={clickToRemove}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
