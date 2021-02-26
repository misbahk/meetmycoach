
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
 
import Group33 from './Group33.png';


import InsetDividers from './Divider';
import OutlinedButtons from './OutlinedButtons';


import JoinnowButton from './JoinnowButton';
import Resources from './Resources';

import Grid from '@material-ui/core/Grid';
import bell from './bell.svg';
import gloabe from './gloabe.svg';
import Group32 from './Group32.svg';

import Paper from '@material-ui/core/Paper';


import Ffff from '../landingpagebuttons/foo';

import Navbar from '../navbarrrr/appbar';
function TabPanel(props) {
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {

    textAlign: 'left',

  },
  root1:{
      flexGrow:1,
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<  >
<Navbar/>
<div style={{background:"linear-gradient(180deg, #FFCA9E, #DEEEF500)"}}>
    <p style={{fontSize:"34px", fontWeight:"bold"}}>MEETING A COACH HAS NEVER BEEN EASIER</p>
        <p>A go to app for all your coaching needs, with full set of features that 
            will complement your coaching business</p>
<OutlinedButtons/>


<Grid container direction="row" spacing={1} style={{padding:"6rem"}}>

        <Grid className={classes.paper}
        item xs={4} style={{backgroundColor:"#ffff", boxShadow:"#00000029 0px 6px 3px",
      borderRadius:"10px"}}>
        
        <img src={bell} alt="bell" />
        <br/>
        <p style={{fontSize:"20px", fontWeight:"700"}}>It’s all happening in the channel</p>

        <p>Follow everything related to individual topics,<br/>
         projects or teams in their dedicated channels.</p>
        </Grid>
        <Grid className={classes.paper}
         item xs={4} style={{backgroundColor:"#ffff", boxShadow:"#00000029 0px 6px 3px",
      borderRadius:"10px"}}>
        <img src={gloabe} alt="bell" />
        <br/>
        <p style={{fontSize:"20px", fontWeight:"700"}}>
          History you can see and search</p>

        <p>Projects end, teams change and Slack saves <br/>
         everything. Rather than trying to remember, <br/>
         easily find what you’re looking for.</p>
        </Grid>
        <Grid  className={classes.paper}
        item xs={4} style={{backgroundColor:"#ffff", boxShadow:"#00000029 0px 6px 3px",
      borderRadius:"10px"}}>
        <img src={Group32} alt="bell" />
        <br/>
        <p style={{fontSize:"20px", fontWeight:"700"}}>
        Work more closely with other companies
        </p>

        <p>Follow everything related to individual topics,<br/>
         projects or teams in their dedicated channels.</p>
        </Grid>




        </Grid> 




</div>

<br/>
<br/>

 <Grid container direction="row" >
        <Grid item xs={3}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
        <Grid item xs={6}>
        <AppBar position="static" style={{backgroundColor:"#ffff", color:"#FF8E31"}} >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  
        style={{paddingLeft:"4rem", paddingRight:"4rem"}} >
          <Tab label="Collaborate" {...a11yProps(0)} />
          <Tab label="Growth" {...a11yProps(1)} />
          <Tab label="Subscription" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>

        </Grid> 



 

    <TabPanel value={value} index={0}>
   


    <Grid container direction="row" >

    <Grid item xs={1}>
      </Grid>
    <Grid item xs={6}>

 <img src={Group33} class="img-fluid"
  style={{width:"706px", height:"452px"}} alt="Group33"/>
 </Grid>

 <Grid item xs={4}>
<InsetDividers/>

</Grid>

<Grid item xs={1}>
      </Grid>
  </Grid> 

   </TabPanel>
   <TabPanel value={value} index={1}>
     Item Two
   </TabPanel>
   <TabPanel value={value} index={2}>
     Item Three
   </TabPanel>

 <JoinnowButton/>
<Resources/> 
<Ffff/>
    </ >
  );
}
