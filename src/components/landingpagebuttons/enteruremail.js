import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles({
  root: {
          borderRadius: '5px',
          height:40,
        opacity:'1' ,
        backgroundColor:'white',
        width:"100%",
        // border: "1px solid #CFD3DE",
        
     
  },
});



export default function Enteremail() {
  const classes = useStyles();
  
  return (
    <form >
  
        <TextField className={classes.root}
        // placeholder="Enter your email"
        label="Enter your email"
        size="small"
         variant="outlined"
     
          />
  </form>
  )
}