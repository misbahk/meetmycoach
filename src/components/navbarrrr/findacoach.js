import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
   
       

        border: '2px solid #231F20',
        borderRadius: '5px',
        opacity:'1' ,
        background:'white',
  },
});

export default function Findacoach() {
  const classes = useStyles();
  return <Button className={classes.root}>FIND A COACH</Button>;
}