import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from './form';

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

export default function Tabform() {
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
          <Tab
            value="one"
            label="BASIC DETAILS"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="PROFILE SUMMARY" {...a11yProps('two')} />
          <Tab value="three" label="SKILLS & CAPABILITIES" {...a11yProps('three')} />
          <Tab value="four" label="SELECT PLAN" {...a11yProps('four')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
   <h2>Let us know few details about you</h2>
   <p style={{color:"#858A9A"}}>Acquire karma points by completing your profile for better visibility.
        Get 10 Bunjis now.</p>
        <p style={{float:"right", color:"#006AB1"}}>Registered with johndoe@example.com</p>



<Form/>


        
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
      <TabPanel value={value} index="four">
        Item Three
      </TabPanel>
    </div>
  );
}
