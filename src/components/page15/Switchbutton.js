import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    MuiFormLabel :{
color:"#ffff"
    }
}));


export default function Switchbutton() {
    const classes = useStyles();

  return (
    <Grid container direction="row" style={{marginTop:"1rem"}}>
  
  
    <Grid item xs={4} >
  
        </Grid>
      <Grid item xs={2} style={{backgroundColor:"#F1F3F6", borderTopLeftRadius:"2rem", borderBottomLeftRadius:"2rem"}} >
   <p style={{color:"#858A9A"}}>  MONTHLY </p> 
      </Grid>
      <Grid item xs={2} style={{backgroundColor:"#FF8E31", borderTopRightRadius:"2rem", borderBottomRightRadius:"2rem"}}>
   <p style={{color:"#ffff"}}>YEARS</p>     
        </Grid>
  
        <Grid item xs={4} >
  
  </Grid>
  
      </Grid>
  );
}
