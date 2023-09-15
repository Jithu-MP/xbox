import Button from '@mui/material/Button';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ButtonAppBar from "../components/navbar/Navbar";
import CheckBox from "../components/checkbox/Checkbox";
import Popup from "../components/popup/popup";

const HomePage = () => {
  return (
    <div style={{ background: "red", height: "100vh" }}>
      <ButtonAppBar />
      <Popup/>
    </div>
  );
};

export default HomePage;
