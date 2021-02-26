import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ShareIcon from '@material-ui/icons/Share';
import imgcamera from './imgcamera.png'
import TextField from '@material-ui/core/TextField';
import Grid28 from "./Grid28";



const useStyles = makeStyles((theme) => ({
    root: {
        padding:"1rem",
      flexGrow: 1,
      backgroundColor:"black"
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: "#ffff",
 
    },
    colbx:{
        backgroundImage: "linear-gradient(to left,#FFAF9E,#FFD09C)",
        padding:"3rem"
    },
    buttons:{
        backgroundColor:"#F1F3F6",
        color:"#858A9A"
    },
    
  }));

export default function Card28() {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);



    const [reschedule, setReschedule] = useState(true);

    function toggle() {
      setReschedule(!reschedule);
    }


  return (
    <Grid  >

    <Grid className={classes.colbx} >



  
    </Grid>

    <Grid>

    <p style={{color:"#ffff", marginTop:"-3rem", fontSize:"24px", marginLeft:"11rem"}}>Create a session</p>
    </Grid>


    <Grid28/>







    






    </Grid>

  );
}


