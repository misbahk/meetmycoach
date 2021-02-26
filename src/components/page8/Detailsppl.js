import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import loadingimg  from './loadingimg.png'
import Detailsform from './Detailsform';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function Detailsppl() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <center>
   <p style={{fontSize:"20px", fontWeight:"600"}}>DETAILS PEOPLE WILL SEE</p>
  
   <img src={loadingimg} alt="loadingimg" 
style={{width:"9rem", borderRadius:"5rem"}}
/>

   </center>
 <Detailsform/>
 
    </div>
  );
}
