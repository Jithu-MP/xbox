import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/payment/payment";

import HomePage from "./pages/Home";
import Maps from "./pages/map";

const App = () => {
  return (
    <Routes>
      <Route path={"/home"} element={<HomePage />} />
      <Route path={"/map"} element={<Maps />} />
      <Route path={"/checkout"} element={<Checkout />} />
      <Route path={"/payment"} element={<Payment />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default App;
