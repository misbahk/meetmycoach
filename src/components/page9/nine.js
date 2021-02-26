import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabform from '../page8/Tabform';
import Detailsppl from '../page8/Detailsppl'
import NavbarTwo from '../navbarTwo/navbartwo'
import TextField from '@material-ui/core/TextField';
import FormNine from './FormNine';
import NextButton from '../page8/NextButton';
import Tabform9 from './Tabform9';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function Nine() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavbarTwo/>




    <Grid container direction="row" >

        <Grid item xs={7} >
     <Tabform9/>
<br/>





        </Grid>




        <Grid item xs={5} style={{backgroundColor:"#F1F3F6"}}>
        <Detailsppl/>
        </Grid>

      </Grid>






    </div>
  );
}
