import React from "react";
import './Style.scss';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemCard from "../../components/productCheckout/ProductCard";
import ServiceCard from "../../components/serviceCheckout/serviceCheckout";
import ButtonAppBar from "../../components/navbar/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const productData = [
  {
    id: 1,
    name: "RAIN JACKET",
    description:"SPF 50+ fabric technology: The fabric of the jacket is treated with a special sunscreen that blocks 98% of harmful UV rays. This helps to protect your skin from sunburn, and skin tanning.",
    price:"₹1,499"
  },
  {
    id: 2,
    name: "Minimalist Sunscreen SPF 50 Lightweight with Multi-Vitamins",
    title: "Walking Shoes",
    description:"HA light weight, moisturiser-meets-sunscreen. This broad spectrum SPF 50 with PA++++ rating, has a very light texture that spreads easily & disappears leaving behind a natural, moisturized, non-shiny look. Loaded with Vitamins A, B, E & F that help repair skin and minimize damage caused by UV exposure",
    price:"₹399"
  },
  {
    id: 3,
    name: "RAAYA Leather Winter Woolen Gloves For Girls And Women",
    title: "Walking Shoes",
    description:"Premium PU Leather- Extremely soft and comfortable to wear; wearable and durable. Exquisite Craft- Reliable quality! Brings you the best wearing experience and perfectly highlights your good taste",
    price:"₹349"
  },
];

const serviceData = [
  {
    id: 1,
    name: "LAUNDRY",
    description:"Get your laundry done hassle free while travelling",
  },
  {
    id: 2,
    name: "CLINICAL SERVICES",
    description:"Travel with less worries, your health concerns got covered here",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="box-box">
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Checkout = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate()


  return (
    <div className="container">
      <ButtonAppBar />
      <div className="checkout">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
            >
              <Tab label="Products" {...a11yProps(0)} />
              <Tab label="Services" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
          {productData.map((p) => (
            <ItemCard item={{
              key:p.id,
              name: p.name,
              description: p.description,
              price: p.price}} /> ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          {serviceData.map((s) => (
            <ServiceCard item={{
              id:s.id,
              name: s.name,
              description: s.description,
            }} />))}
          </CustomTabPanel>
        </Box>
      </div>
      <Button variant="contained" color="primary" onClick={() => {navigate('/payment')}}>
          Continue
      </Button>
    </div>
  );
};

export default Checkout;
