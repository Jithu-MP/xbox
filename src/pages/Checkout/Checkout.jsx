import React from "react";
import './Style.scss';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemCard from "../../components/productCheckout/ProductCard";
import ServiceCard from "../../components/serviceCheckout/serviceCheckout";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
          Products
          <ItemCard item={{
    name: 'Jacket',
    description: 'abc',
    price: '123'
  }} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Services
          <ServiceCard item={{
    name: 'Jacket',
    description: 'abc',
    price: '123'
  }} />
        </CustomTabPanel>
      </Box>
      </div>
  );
};

export default Checkout;
