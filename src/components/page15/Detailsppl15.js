import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import profilepic from './profilepic.jpg'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Buttons from './Buttons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function Detailsppl15() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <center>
   <p style={{fontSize:"20px", fontWeight:"600"}}>DETAILS PEOPLE WILL SEE</p>
  
   <img src={profilepic} alt="profilepic" 
style={{width:"9rem", borderRadius:"5rem"}}
/>

<p style={{fontWeight:"bold"}}>Dr. Raymond Beck</p>

<p>A certified professional in guiding people in 
    overcoming mental health issues</p>
   </center>

   <hr/>


   <Grid container direction={'row'}    >


   <Grid   item xs={2}>
   <span style={{marginTop:"1rem"}} class="lni lni-map-marker" ></span>
       </Grid>


       <Grid  item xs={8}>
   <p>
    98 Shirley Street PIMPAMA QLD4209 AUSTRALIA   
   </p>
     </Grid>

     <Grid   item xs={2}>

       </Grid>


     </Grid>
     <hr/>


    <p style={{textAlign:"left"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
    </p>
<hr/>

<p style={{fontWeight:"bold"}}>Cant help with</p>

<Buttons/>

    </div>
  );
}
