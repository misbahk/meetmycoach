import React,{useState} from 'react';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider} from "@material-ui/core"
import DashNav from './components/dashboardnavbar/nav2';

import notify from './Images/notification.svg';
import mss from './Images/msgg.svg';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';

import IconButton from '@material-ui/core/IconButton';


import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import MenuIcon from '@material-ui/icons/Menu';

import anz from './Images/anz.jpg';
import tg from './Images/toptag.svg';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Card26 from './page26/Card26';
import Card28 from './page28/Card28';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     },

    large: {
      width: theme.spacing(15),
      height: theme.spacing(13),
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

 }));

 function Createsession(){
  const classes = useStyles();
  const [open, setOpen] = useState(false);

 const handleOpen = () => {
  setOpen(true);
};


const handleClose = () => {
  setOpen(false);
};

   
     return(
         <>
            <Button className={classes.proceed} onClick={handleOpen}>Create Session</Button>

            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
       style={{overflow:'scroll'}}
        
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
         <Fade in={open}   >
          
         <Grid container  style={{outline:'none'}}  direction="row-reverse"> 
         <Grid item md={12} style={{backgroundColor:'white'}}>
           <DashNav/>
         </Grid>
            <Grid item md={6} >
          
              
             <div  style={{backgroundColor:'white'}}>
              <Card28/>

             </div>
             </Grid>
         </Grid>
        </Fade>
      </Modal>
         </>
     )
 }

 function View(){
  const classes = useStyles();
   return(
       <>
          <Button className={classes.proceed}>View</Button>
       </>
   )
}

 function Start(){
  const classes = useStyles();
      return(
          <>  
              <Button className={classes.proceed}>START EXPLORING OPPORTUNITIES</Button>
          </>
      )

}

 function Dashboard(){
    const classes = useStyles();
        return(
            <>  
                <Button >Dashboard</Button>
            </>
        )
 }

 function Jobs(){
    const classes = useStyles();
        return(
            <>  
                <Button >Jobs</Button>
            </>
        )
 }

 function Mycalender(){
    const classes = useStyles();
        return(
            <>  
                <Button >Mycalender</Button>
            </>
        )
 }

 function Connections(){
    const classes = useStyles();
        return(
            <>  
                <Button >Connection</Button>
            </>
        )
 }

 function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         Manage
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
         Upcoming
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
          
          placeholder="Search"
        
       
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton></div>
        </>
    
    );
  }


  function Cardsession() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

   const handleOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

    return(
      <>
          <Card>
            <CardActionArea onClick={handleOpen}>
              <Grid container>
              <Grid item md={12} style={{boxShadow: "0px 3px 6px #00000029",borderRadius: "10px"}}>
                <Grid container>
                  <Grid item md={2} style={{marginTop:'7px'}}>
                    <center>
                      <Avatar src={anz} variant="rounded"/>
                      
                      </center>
                      <div >+2 members</div>
                  </Grid>
                  <Grid item md={5}  style={{marginTop:'8px',textAlign:'left'}}>
                      <div style={{font: "normal normal bold 18px/22px Montserrat"}}>Managing Stress at work place</div>
                  <div style={{color:'#000000',textAlign:'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  </Grid>
                  <Grid item md={2}  style={{marginTop:'8px',textAlign:'left',marginLeft:'5px'}}>
                   <div style={{fontWeight:'bolder'}}>SCHEDULED</div>
                  <div style={{fontSize:'10px',color:'#565757'}}>08:30 PM</div>
                  <div style={{color:'#858A9A',textAlign:'left'}}>TODAY</div>
                  <div style={{color:'#858A9A'}}>Oct 15, 2020</div>
                  </Grid>
                  <Grid item md={2} style={{marginTop:'20px'}}>
                    <View/>
                    <br/>
                    <Grid container direction="row">
                      <Grid item md={6}>
                        <div style={{float:'left',textDecoration:'underline'}}>Reschedule</div>
                        </Grid>
                      <Grid item md={5} >
                        <div style={{float:'right',textDecoration:'underline'}}>Cancel
                          </div>
                        </Grid>
                    </Grid>
                  </Grid>
                  {/* <Grid item md={1}><img src={tg}/></Grid> */}
                </Grid>
                <br/>
             
              </Grid>
            </Grid>

            </CardActionArea>
            </Card>

            
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
       style={{overflow:'scroll'}}
        
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
         <Fade in={open}   >
          
         <Grid container  style={{outline:'none'}}  direction="row-reverse"> 
         <Grid item md={12} style={{backgroundColor:'white'}}>
           <DashNav/>
         </Grid>
            <Grid item md={6} >
          
              
             <div  >
              <Card26/>

             </div>
             </Grid>
         </Grid>
        </Fade>
      </Modal>
      </>
    )
    
  }
  

  


export default function Page25() {
    const classes = useStyles();
    return (
        <>
          <div className={classes.root}>

        
                
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Typography><img src={meetmy}/></Typography>
                       <div  className={classes.gett}> 

                           <Dashboard/>
                            <Jobs/> 
                              
                              <Mycalender/>  
                              <Connections/>
                           
                        </div>
                        <SimpleMenu/>
                        
                        <div className={classes.toolbarButtons}>
                        <img src={mss} className={classes.ll}/>
                        <img src={notify} className={classes.ll}/>
                        <Avatar alt="Remy Sharp" src={ema} />
                        
                     
                        
                        </div>

                      
                       
                      
                       

                    </Toolbar>


                    
                </AppBar>
                <Grid container direction="row"  >
                  <Grid item md={1}></Grid>

                    <Grid item md={7} style={{padding:'50px'}} >
                    
                        <Grid container direction="row">
                            <Grid item md={6}>
                                <div style={{float:'left',font: "normal normal normal 35px/43px Montserrat"}}> My Sessions</div>
                            </Grid>
                            <Grid item md={6}>
                               <div style={{float:'right'}}>
                                    <Createsession/>
                                </div> </Grid>
                        </Grid>
                        <br/>
                        <Grid container direction="row">
                            <Grid item md={4}>
                                <div style={{float:'left',font: "normal normal 600 15px/19px Montserrat"}}> Showing 7 upcoming sessions</div>
                            </Grid>
                            <Grid item md={3}>
                               <div style={{float:'right'}}>
                                    <Upcoming />
                                </div> 
                            </Grid>
                            <Grid item md={5}>
                               <div style={{float:'right'}}>
                               <Searc/>
                                </div> 
                            </Grid>
                        </Grid>
                        <br/>


                        <Grid container >
                            <Grid item md={12}>  <Cardsession/></Grid>
                        </Grid>
                        <br/>
                        <Grid container>
                            <Grid item md={12}>  <Cardsession/></Grid>
                        </Grid>
                        <br/>
                        <Grid container>
                            <Grid item md={12}>  <Cardsession/></Grid>
                        </Grid>


                      

                        
                    </Grid>
                    
                    <Grid item md={4} style={{backgroundColor:'#F1F3F6'}}>

                        <Grid container style={{ padding:'50px'}}>
                          <Grid item md={5}>
                           <div style={{float:'left',font:" normal normal 600 25px/25px Montserrat"}}> My Calendar</div>
                            </Grid>
                            <Grid item md={5}>
                           <div style={{float:'right'}}> October 2020</div>
                            </Grid>

                        </Grid>
                        </Grid>
                </Grid>
               
               

               
                </div>  

       
    
        
        </>
    )
}