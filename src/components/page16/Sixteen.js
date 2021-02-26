import React from 'react';
import Navbartwo from '../navbarTwo/navbartwo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreditCard from './CreditCard';
import Summary from './Summary';



const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
  },
  cards: {
    padding: theme.spacing(2),
  

  },
}));

function Sixteen() {
    const classes = useStyles();

    return (
        <div>
               <Navbartwo/> 

<br/>
<a href="#" style={{color:"#9CA0A2", float:"right", padding:"1rem"}}>Skip an Continue with FREE 30 Days trail</a>


<Grid container direction="row" >

<Grid item xs={12} >
<center>
    <p style={{fontSize:"30px", fontWeight:"700"}}>Payment Information</p>
    <p style={{color:"#858A9A", marginTop:"-2rem"}}
    >We won't charge you today. Your payment day will be on November 15, 2020</p>
</center>

</Grid>


</Grid>



<Grid container direction="row" >

<Grid item xs={1} >


</Grid>

<Grid item xs={5} className={classes.cards} >
<p style={{fontWeight:"bold"}}>PAYMENT METHOD</p>

<CreditCard/>

</Grid>


<Grid item xs={5} className={classes.cards} >
<p style={{fontWeight:"bold"}}>SUMMARY</p>



<Summary/>


</Grid>
<Grid item xs={1} >


</Grid>



</Grid>



        </div>
    );
}

export default Sixteen;