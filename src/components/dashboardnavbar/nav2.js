import React from 'react';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ema from '../../Images/ema.svg';
import meetmy from '../../Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider} from "@material-ui/core"

import notify from '../../Images/notification.svg';

import mss from '../../Images/msgg.svg'








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



 

  

  


export default function DashNav() {
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
                

               
                </div>  

       
    
        
        </>
    )
}