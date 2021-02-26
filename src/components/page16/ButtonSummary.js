import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

}));

export default function ButtonSummary() {
  const classes = useStyles();

  return (
    <div >
  
      <Button variant="contained" style={{backgroundColor:"#FF8E31", color:"#ffff"}}>
      TRY FOR FREE - 30 DAYS TRAIL
      </Button>

  
    </div>
  );
}
