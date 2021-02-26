import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  nextbutton:{
      backgroundColor:"#FF8E31",
      color:"#ffff",
      float:"right",
      width:"6rem"
  }
}));

export default function NextButton() {
  const classes = useStyles();

  return (
    <div >
    
      <Button variant="contained" color="primary"
      className={classes.nextbutton}
      >
    NEXT
      </Button>
     
    </div>
  );
}
