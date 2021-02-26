import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card15 from './Card15';
import Switchbutton from './Switchbutton';
import NavbarTwo from '../navbarTwo/navbartwo'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tabform15() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    
    <div className={classes.root}>
    
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example"
       
        >
          <Tab value="one"    label="BASIC DETAILS"  wrapped
            {...a11yProps('one')} />
          <Tab value="two" label="PROFILE SUMMARY" {...a11yProps('two')} />
          <Tab value="three" label="SKILLS & CAPABILITIES" {...a11yProps('three')} />
          <Tab value="four" label="SELECT PLAN" {...a11yProps('four')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
hhh
        
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
      <TabPanel value={value} index="four">

      <h2>Choose a plan that suits you</h2>
          <p style={{color:"#858A9A"}}>A complete suite of features to handle your coaching sessions like a breeze</p>

<Switchbutton/>

<br/>

<Card15/>
         
      </TabPanel>
    </div>
  );
}
