import React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';




const useStyles = makeStyles((theme) => ({
    root: {
        padding:"1rem",
      flexGrow: 1,
      backgroundColor:"black"
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: "#ffff",
 
    },
  }));

export default function Footer() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
   
<p className={classes.paper}> © Copyright 2020 uCoach. All rights reserved</p>


    </div>
  );
}


