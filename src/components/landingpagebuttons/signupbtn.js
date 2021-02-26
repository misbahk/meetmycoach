import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
   
        height:'40px',
        color:'white',
        border: '2px solid #FF8F33',
        background:' transparent linear-gradient(104deg, #FFAF6D 0%, var(--unnamed-color-ff8e31) 100%) 0% 0% no-repeat padding-box',
        background: 'transparent linear-gradient(104deg, #FFAF6D 0%, #FF8E31 100%) 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '5px',
        opacity: '1',
        
  },
});

export default function Signup() {
  const classes = useStyles();
  return <Button className={classes.root}>SIGN UP NOW</Button>;
}