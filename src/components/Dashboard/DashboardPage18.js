import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../navbarThree/Navbar3';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Progressbar from './Progressbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card18 from './Card18';
import Box from '@material-ui/core/Box';
import Chart from './Chart';
import BoxesResponses from './BoxesResponses'

const useStyles = makeStyles((theme) => ({

pagePadding:{
  paddingLeft:  "3rem",
  paddingRight:  "3rem"

},

}));

export default function DashboardPage18() {
  const classes = useStyles();

  return (
    <div >
  <Nav/>


  <Grid container direction="row" style={{padding:"0"}} >

<Grid item md={5} >
<p className={classes.pagePadding} 
style={{float:"left", fontWeight:"600", fontSize:"30px"}}>Good morning, Raymond</p>

<p className={classes.pagePadding}  style={{float:"left", fontSize:"18px", fontWeight:"600", marginTop:"-0.5rem"}}>ONGOING SESSIONS</p>

</Grid>
</Grid>

<br/>


  <Grid container direction="row" className={classes.pagePadding}  >

<Grid item md={8} >
<Card18/>
</Grid>

<Grid item md={4} >



hjhj


</Grid>
</Grid>

<br/>

<Grid container direction="row" className={classes.pagePadding}  >

<Grid item md={4} >
<Chart/>
</Grid>

<Grid item md={4} >
<BoxesResponses/>
</Grid>


<Grid item md={4} >
hjhj
</Grid>
</Grid>




<br/>


<Grid container direction="row" className={classes.pagePadding}  >

<Grid item md={8} >
8
</Grid>

<Grid item md={4} >
4
</Grid>


</Grid>

    </div>




  )}