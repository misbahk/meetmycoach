import React from 'react';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles ,createMuiTheme, ThemeProvider, withStyles  } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider} from "@material-ui/core"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import notify from './Images/notification.svg';
import mss from './Images/msgg.svg';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import Badge from '@material-ui/core/Badge';

import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';



import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';

import anz from './Images/anz.jpg';
import DashNav from './components/dashboardnavbar/nav2';





import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     },

    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },

    toolbarButtons: {
        marginLeft: 'auto',
        display:'inline-flex',
        
        
      },

    ll:{
      marginRight:theme.spacing(13),

    },

    liner:{
      backgroundImage: "linear-gradient(to left,#FFAF9E,#FFD09C)",
      // height:250,
  },
  
  proceed:{
    background:" #FF8E31 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    opacity: 1,
    color:'white',
    
  
    // padding: theme.spacing(1),
    
    },
  gett:{
    //   padding: theme.spacing(1),
      
      marginLeft:theme.spacing(15),
    },

    shapeCircle: {
      borderRadius:'50%',
      
      backgroundColor:'green',
      width: theme.spacing(1),
      height: theme.spacing(1),
    },

 }));



// tabs 


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


 function Tabf() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 


  return (
    <div className={classes.root}>
      
       
      
     <ThemeProvider  theme={theme}>
        <Tabs value={value}  style={{float:'right'}} indicatorColor="secondary" textColor="secondary" onChange={handleChange} aria-label="wrapped label tabs example">
         
        
        
          <Tab
            value="one"
            label="All REQUESTS"
            
            {...a11yProps('one')}
          />
          <Tab value="two" label="RESPONDED REQUESTS" {...a11yProps('two')} />
          <Tab value="three" label="OLD REQUESTS" {...a11yProps('three')} />
          {/* <Tab value="four" label="SELECT PLAN" {...a11yProps('four')} /> */}
        </Tabs>
        </ThemeProvider>
     
      <TabPanel value={value} index="one">
         






        
      </TabPanel> 
       <TabPanel value={value} index="two">
     
     
      
       
      </TabPanel> 
       <TabPanel value={value} index="three">
      
       
      </TabPanel>
     
    </div>
  );
}



//   upcoming sessions dropdown

function Upcoming() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div style={{boxShadow: "0px 3px 6px #00000029"}}>
        <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'#858A9A',height:'50px'}}>
         Date posted
         <ExpandMoreIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Myrequest</MenuItem>
          <MenuItem >Assesment</MenuItem>
          {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </div>
    );
  }

  function Searc() {
    const classes = useStyles();
  
    return (
            <>
      
        <div   style={{backgroundColor:'#F1F3F6',border: "1px solid #2DABFF30",borderRadius:" 5px"}}><InputBase
          
          placeholder="Search requests and coachees"
        
       
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton></div>
        </>
    
    );
  }


  function Cardsession() {
    const classes = useStyles();
    return(
      <>
          <Card style={{marginBottom:'10px'}}>
            <CardActionArea>
              <Grid container>
              <Grid item md={12} style={{boxShadow: "0px 3px 6px #00000029",borderRadius: "10px"}}>
                <Grid container>
                  <Grid item md={3} style={{marginTop:'15px'}}>
                   
                      <div style={{fontSize:"10px",textDecoration: "underline"}}>Looking for Certified Coach in Stress Management</div>
                  </Grid>
                  <Grid item md={2}  >
                      <div style={{display:'inline-flex',float:'left',marginTop:'10px'}}> 
                      <Avatar alt="Remy Sharp" src={anz} className={classes.small} />
                      <div style={{margin:'3px'}}>@Felix Nguyen</div>
                     <Badge style={{margin:'5px'}}className={classes.shapeCircle}/>
                      </div>
                 
                  </Grid>
                  <Grid item md={3}  style={{textAlign:'left',marginTop:'10px'}}>
                    <div style={{display:'inline-flex'}}>
                    <div style={{margin:'5px',backgroundColor:'#F1F3F6',color:'#858A9A'}}>Mental fitness</div>
                    <div style={{margin:'5px',backgroundColor:'#F1F3F6',color:'#858A9A'}}>Mental fitness</div>
                    <div style={{margin:'5px',backgroundColor:'#F1F3F6',color:'#858A9A'}}>+3</div>
                   </div>
                  </Grid>
                  <Grid item md={1} >
                    <div style={{float:'left',marginTop:'15px'}}>1</div>
                    
                    </Grid>
                    <Grid item md={1} >
                      <div  style={{float:'left',marginTop:'15px'}}>Oct 28, 2020</div>
                    
                    </Grid>
                  <Grid item md={1}>
                    <div style={{textAlign:'center', marginTop:'15px'}}>Today
                      </div>
                    </Grid>
                  <Grid item md={1}>
                    <Button variant="outlined" style={{height:'30px',marginTop:'10px',border: "1px solid #FF8E31"}}>
                    <QuestionAnswerOutlinedIcon style={{color:'#FF8E31'}}/>
                    </Button>
                  </Grid>
                </Grid>
                <br/>
             
              </Grid>
            </Grid>
            </CardActionArea>
            </Card>
      </>
    )
    
  }
  

  


export default function Page33() {
    const classes = useStyles();
    return (
        <>
          <div className={classes.root}>
          <DashNav/>

        
                
                <Grid container direction="row"  >
                  <Grid item md={1}></Grid>

                    <Grid item md={10} style={{padding:'25px'}} >
                    
                        <Grid container direction="row">
                            <Grid item md={12}>
                                <div style={{float:'left',font: "normal normal normal 35px/43px Montserrat"}}> 32 Requests</div>
                            </Grid>
                           
                        </Grid>
                        <Grid container direction="row">
                            <Grid item md={12}>
                                <div style={{float:'left',font: "font: normal normal normal 15px/19px Montserrat"}}> Session requests from others to book your time</div>
                            </Grid>
                           
                        </Grid>
                  </Grid>
                    
                   
                </Grid>
                <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid item md={10} >
                       <div style={{float:'right',marginRight:'25px'}}> 
                       <Tabf/>
                      
                       
                       
                       </div>
                    </Grid>
                 
                </Grid>
                <Divider/>

                <Grid container>
                  <Grid item md={1}></Grid>
                  <Grid item md={3}>
                    <div style={{padding:'25px'}}>
                      <Searc/>
                    </div>
                  </Grid>
                  <Grid item md={7}>
                    <div style={{float:'right',padding:'25px'}}>
                      <Upcoming/></div>
                      <div style={{float:'right',padding:'25px',marginTop:'10px'}}>
                      Sort by</div>
                      </Grid>
                      
                </Grid>

                <Grid container >
                  <Grid item md={1}></Grid>
                  
                  <Grid item md={2}>
                    <div style={{textAlign:'left',fontSize:'12px',marginLeft:'40px'}}>Request details</div>
                  </Grid>
                 
                    <Grid item md={2}>
                      <div style={{fontSize:'12px',marginRight:'30px'}}>Coachee</div>
                    </Grid>
                    <Grid item md={2} >
                      <div style={{textAlign:'left',marginLeft:'30px',fontSize:'12px'}}>Categories</div>
                      </Grid>
                   
                      
                      <Grid item md={1} style={{float:'left',fontSize:'12px'}}>Attendees</Grid>
                     
                      <Grid item md={1} style={{float:'left',fontSize:'12px'}}>
                        Tentative Session Date</Grid>
                      <Grid item md={1} style={{float:'left',fontSize:'12px'}}>Posted</Grid>
                </Grid>



                <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid item md={10} >
                       <div style={{padding:'25px'}}>
                           <Cardsession/>
                           <Cardsession/>
                           <Cardsession/>
                           <Cardsession/>
                           <Cardsession/>
                       </div>
                    </Grid>
                 
                </Grid>
               

               
               
               
               

               
                </div>  

       
    
        
        </>
    )
}