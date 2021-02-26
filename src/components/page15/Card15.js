import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding:"1rem"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Card15() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (



    <Grid container direction="row" >

    <Grid item xs={3} >


</Grid>

<Grid item xs={6} >
    <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2"
        style={{fontWeight:"bold"}}
        >
          <i  style={{backgroundColor:"#FF7934", color:"#fff", padding:"6px", borderRadius:"20px"}} class="lni lni-diamond-alt"></i>
{"  "}   $9.99/month
        </Typography>
    
        <Typography
         variant="body2" component="p" style={{fontWeight:"bold", textAlign:"left"}}>
        For all coaching businesses
          <br />
       
        </Typography>
        <br/>

<li style={{textAlign:"left"}}>
Unlimited job applications
</li>

<li style={{textAlign:"left"}}>
Unlimited slot booking
</li>

<li style={{textAlign:"left"}}>
Access entire message history
</li>

<li style={{textAlign:"left"}}>
Priority support
</li>
      </CardContent>

      <br/>

      <CardActions>
        <Button size="small" fullWidth
        style={{backgroundColor:"#FF8E31", color:"#ffff"}}
        >PROCEED</Button>
      </CardActions>

      <a href="#" style={{color:"black", marginBottom:"5px"}}>Continue with FREE 30 Days trail</a>

 

    </Card>

<br/>
     
     <p>Need help in choosing? <a href="#" style={{color:"black"}}>CONTACT US</a></p>

    </Grid>
    

    <Grid item xs={3} >


</Grid>


</Grid>
  );
}
