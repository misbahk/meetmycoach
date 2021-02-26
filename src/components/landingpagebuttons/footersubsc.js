import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
   
        
        color:'white',
        background: '#125D8F 0% 0% no-repeat padding-box',
        borderRadius: '5px',
        opacity: '1',
        width:"100%",
  },
});

export default function Subs() {
  const classes = useStyles();
  return <Button className={classes.root}>SUBSCRIBE</Button>;
}