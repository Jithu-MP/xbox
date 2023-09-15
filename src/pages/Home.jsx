import Button from '@mui/material/Button';
import PinDropIcon from '@mui/icons-material/PinDrop';

const HomePage = () => {
  return (
    <div style={{ background: "red", height: "100vh" }}>
      Home page{" "}
      <Button variant="contained" endIcon={<PinDropIcon />}>
        Send
      </Button>
    </div>
  );
};

export default HomePage;
