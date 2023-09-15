import Button from '@mui/material/Button';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ButtonAppBar from "../components/navbar/Navbar";

const HomePage = () => {
  return (
    <div style={{ background: "red", height: "100vh" }}>
      <ButtonAppBar />
      {/* <Button variant="contained" endIcon={<PinDropIcon />}>
        Send
      </Button> */}
    </div>
  );
};

export default HomePage;
