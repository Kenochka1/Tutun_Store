import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddTabacco from "./Components/Admin/AddTabacco/AddTabacco";
import EditTabacco from "./Components/Admin/EditTabacco/EditTabacco";
import TabaccosList from "./Components/Tabaccos/TabaccosList/TabaccosList";
import Cart from "./Components/Cart/Cart";
import TabaccosDetails from "./Components/Tabaccos/TabaccosDetails/TabaccosDetails";
import Login from "./Components/Auth/Login";
import Registration from "./Components/Auth/Registration";
import Payment from "./Components/Payment/Payment.jsx";
import AboutUs from "./Components/AboutUs/AboutUs";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTabacco />} />
        <Route path="/edit/:id" element={<EditTabacco />} />
        <Route path="/list" element={<TabaccosList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/details/:id" element={<TabaccosDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
