import React from 'react';
import { BrowserRouter , Route, Switch , Link} from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ema from './ema.svg';
import meetmy from './MeetMyCoachLogo.svg'
import { makeStyles , useTheme} from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, FormControl, InputLabel, Select} from "@material-ui/core"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import notify from './notif.svg';
import mss from './chat1.svg';
import { TheatersOutlined } from '@material-ui/icons';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
     
     
    
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

    
   
 

 }));

  


export default function Navbar3(props) {

  const classes = useStyles();
  

    return (
        <>
          <div className={classes.root}>

        

                <React.Fragment>
      <AppBar position="static" color="transparent">
        <Toolbar>
     
          
        <Typography><img src={meetmy}/></Typography>
     
        <Typography component={Link} to="/DashboardPage18"   noWrap style={{marginLeft:"6rem", textDecoration:"none", color:"black"}}>
         Dashboard </Typography>
            <Typography component={Link} to="/JobsPage18"   noWrap style={{marginLeft:"1rem", textDecoration:"none", color:"black"}}>
           Jobs </Typography>
            <Typography noWrap style={{marginLeft:"1rem"}}>
            My Calendar </Typography>
            <Typography noWrap style={{marginLeft:"1rem"}}>
            Connections </Typography>

      <div className={classes.toolbarButtons}>                    
            <img src={mss} className={classes.ll}/>
                        <img src={notify} className={classes.ll}/>
                        <Avatar alt="Remy Sharp" src={ema} />
                        
              </div>  
                    
        </Toolbar>
      </AppBar>
   
    </React.Fragment>
               
                      
                  
        
                </div>  

       </>
    )
}