import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';



// const useStyles = makeStyles({
//     root: {
//             borderRadius: '5px',
//           opacity:'1' ,
//           backgroundColor:'white',
//           width:"100%",
//     },
  // });

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // width: '25ch',
        backgroundColor:'white',
        borderRadius:'5px',
        // width:"95%",
      },
    },
  }));



export default function Footeremail() {
    const classes = useStyles();
    
  return (
      
      
    <form className={classes.root} noValidate autoComplete="off">
  
  <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
          
  </form>
  )
}