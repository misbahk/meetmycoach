import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#FF8E31',
      },
    },
  });


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
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tabpeople() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    
    <ThemeProvider  theme={theme}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example"
        indicatorColor="secondary" textColor="secondary"
        >
          <Tab
            value="one"
            label="SENT"
            
            {...a11yProps('one')}
          />
          <Tab value="two" label="RECIEVED" {...a11yProps('two')} />
          {/* <Tab value="three" label="SKILLS & CAPABILITIES" {...a11yProps('three')} />
          <Tab value="four" label="SELECT PLAN" {...a11yProps('four')} /> */}
        </Tabs>
        </ThemeProvider>
     
      {/* <TabPanel value={value} index="one">
   






        
      </TabPanel> */}
      {/* <TabPanel value={value} index="two">
       
      </TabPanel> */}
      {/* <TabPanel value={value} index="three">
       
      </TabPanel>
      <TabPanel value={value} index="four">
        
      </TabPanel> */}
    </div>
  );
}


export  function Tabpeople2() {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
      
      <ThemeProvider  theme={theme}>
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example"
          indicatorColor="secondary" textColor="secondary"
          >
            <Tab
              value="one"
              label="All"
              
              {...a11yProps('one')}
            />
            <Tab value="two" label="My Connections" {...a11yProps('two')} />
            {/* <Tab value="three" label="SKILLS & CAPABILITIES" {...a11yProps('three')} />
            <Tab value="four" label="SELECT PLAN" {...a11yProps('four')} /> */}
          </Tabs>
          </ThemeProvider>
       
        {/* <TabPanel value={value} index="one">
     
  
  
  
  
  
  
          
        </TabPanel> */}
        {/* <TabPanel value={value} index="two">
         
        </TabPanel> */}
        {/* <TabPanel value={value} index="three">
         
        </TabPanel>
        <TabPanel value={value} index="four">
          
        </TabPanel> */}
      </div>
    );
  }