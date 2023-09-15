import ButtonAppBar from "../components/navbar/Navbar";
import MapWithSidebar from "../components/navbar/map-with-side-bar/MapWithSidebar";

const HomePage = () => {
  return (
    <div style={{ height: "100vh"}}>
      <ButtonAppBar />
      <MapWithSidebar />
    </div>
  );
};

export default HomePage;
