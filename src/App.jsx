// import { Routes, Route, Navigate } from "react-router-dom";

// import HomePage from "./pages/Home";
// import Navbar from "./components/navbar/Navbar";
// import Sidebar from "./components/navbar/sidebar/Sidebar";
// // import { Popover } from "";
// import PopOver from "./components/navbar/popover/Popover";
import MapWithSidebar from "./components/navbar/map-with-side-bar/MapWithSidebar";
// import Example from "./components/navbar/popover/Popover";

const App = () => {
  return (
    // <Routes>
    //   <Route path={"/home"} element={<HomePage />} />
    //   <Route path="*" element={<Navigate to="/home" />} />
    // </Routes>
    // <Navbar/>
    <MapWithSidebar />
    // <Example/>
  );
};

export default App;
