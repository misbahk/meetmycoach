import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Resources1 from './Resources1';
import Resources2 from './Resources2';
import Resources3 from './Resources3';
import Resources4 from './Resources4';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <>
      <div>
      <p style={{fontSize:"28px", fontWeight:"800", padding:"2rem"}}>Resources</p>
      </div>

    <div className={classes.root}>
    <Grid container direction="row" >
   
      <Grid item xs={1} >
       
        </Grid>
  
        <Grid item xs={5} >
       

         <Resources1/>

   
        </Grid>
        <Grid item xs={5} >
      <Resources2/>
        </Grid>
        
      
        <Grid item xs={1} >
       
       </Grid>
 

      </Grid>
      <Grid container direction="row" >
   
      <Grid item xs={1} >
       
       </Grid>
 
       <Grid item xs={5} >
      <Resources3/>
       </Grid>
       <Grid item xs={5} >
<Resources4/>
       </Grid>
       
     
       <Grid item xs={1} >
      
      </Grid>

   </Grid>

<br/>
<br/>
<a href="#" style={{color:"black", fontSize:"20px", fontWeight:"600"}}>View all Resources</a>
<br/>
<br/>
    </div>
    </>
  );
}

