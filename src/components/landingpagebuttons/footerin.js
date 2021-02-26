import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


// const useStyles = makeStyles({
//     // root: {
//     //       //   borderRadius: '5px',
//     //       // opacity:'1' ,
//     //       // backgroundColor:'white',
//     //       // width:"100%",
          
//     // },

//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },

//   });

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
      backgroundColor:'white',
      borderRadius:'5px',
    },
  },
}));



export default function Footername() {
    const classes = useStyles();
    
  return (
      
    <form className={classes.root} noValidate autoComplete="off">
  
  <TextField id="outlined-basic" label="Name" variant="outlined" size="small"/>
          
  </form>
  )
}