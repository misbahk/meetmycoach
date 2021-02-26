import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" style={{color:"#73787D", border:"2px solid #73787D"}}>HIRE A COACH</Button>
      <Button variant="outlined" style={{backgroundColor:"#FF8E31", color:"#ffff", border:"0"}}>
        JOIN AS A COACH
      </Button>

 
    </div>
  );
}
