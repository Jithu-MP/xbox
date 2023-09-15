import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CheckoutPage from "./pages/Checkout/Checkout";
import HomePage from "./pages/Home";



const App = () => {
  return (
    <Routes>
      <Route path={"/checkout"} element={<CheckoutPage/>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
    // <Navbar/>
    // <MapWithSidebar />
    // <Example/>

  )}


export default App;
