import React from 'react';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Tabform from './components/tab';
import notify from './Images/notification.svg';
import mss from './Images/msgg.svg';
import Tabform1 from './components/tab2';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';





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

 
  function Searc() {
    const classes = useStyles();
  
    return (
            <>
      
        <InputBase
          
          placeholder="Search for jobs and connections"
       
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        </>
    
    );
  }


  


export default function Page19() {
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
                <Grid container direction="row"
                 >
                    <Grid item md={12}>
                        <Tabform1 />
                        
                    </Grid>
                </Grid>
               
               

               
                </div>  

       
    
        
        </>
    )
}