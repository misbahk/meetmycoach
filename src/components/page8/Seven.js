import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabform from './Tabform';
import Detailsppl from './Detailsppl'
import NavbarTwo from '../navbarTwo/navbartwo'
import Nine from '../page9/nine';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Seven() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavbarTwo/>
    <Grid container direction="row" >
    
        <Grid item xs={7}>
        <Tabform/>
        </Grid>
        <Grid item xs={5} style={{backgroundColor:"#F1F3F6"}}>
        <Detailsppl/>
        </Grid>
     
      </Grid>
  
    </div>
  );
}
