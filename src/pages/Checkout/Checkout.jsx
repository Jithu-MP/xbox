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

const productData = [
  {
    id: 1,
    name: "BLUE TYGA SUNSCREEN JACKET",
    description:"SPF 50+ fabric technology: The fabric of the jacket is treated with a special sunscreen that blocks 98% of harmful UV rays. This helps to protect your skin from sunburn, and skin tanning.",
    price:"₹1,499"
  },
  {
    id: 2,
    name: "BLUE TYGA SUNSCREEN JACKET",
    title: "Walking Shoes",
    description:"Height increasing non marking Rubber Outsole made with light weight compound and orthopedic memory foam shoes which provides extra comfort to your feet with a perfect grip",
    price:"₹1,099"
  },
  {
    id: 3,
    name: "BLUE TYGA SUNSCREEN JACKET",
    title: "Walking Shoes",
    description:"Height increasing non marking Rubber Outsole made with light weight compound and orthopedic memory foam shoes which provides extra comfort to your feet with a perfect grip",
    price:"₹1,099"
  },
  {
    id: 4,
    name: "BLUE TYGA SUNSCREEN JACKET",
    title: "Walking Shoes",
    description:"Height increasing non marking Rubber Outsole made with light weight compound and orthopedic memory foam shoes which provides extra comfort to your feet with a perfect grip",
    price:"₹1,099"
  },
];

const serviceData = [
  {
    id: 1,
    name: "BLUE TYGA SUNSCREEN JACKET",
    description:"SPF 50+ fabric technology: The fabric of the jacket is treated with a special sunscreen that blocks 98% of harmful UV rays. This helps to protect your skin from sunburn, and skin tanning.",
  },
  {
    id: 2,
    name: "BLUE TYGA SUNSCREEN JACKET",
    description:"Height increasing non marking Rubber Outsole made with light weight compound and orthopedic memory foam shoes which provides extra comfort to your feet with a perfect grip",
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
      </div>
  );
};

export default Checkout;
