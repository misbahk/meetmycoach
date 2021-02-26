import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




import { Card } from '@material-ui/core';

import Tabform15 from './Tabform15';
import Detailsppl15 from './Detailsppl15';
import Navbartwo from '../navbarTwo/navbartwo';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function Fifteen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Navbartwo/>
    <Grid container direction="row" >

        <Grid item xs={7} >
       



<Tabform15/>
<br/>




        </Grid>



        

        <Grid item xs={5} style={{backgroundColor:"#F1F3F6"}}>
<Detailsppl15/>
        </Grid>

      </Grid>

    </div>
  );
}
