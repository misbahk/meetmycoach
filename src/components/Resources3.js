import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import laptop from '../Images/laptop.jpg';
import think from '../Images/think.jpg';
import photoframe from '../Images/photoframe.jpg';
import bulb from '../Images/bulb.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {

    textAlign: 'left'
  },


}));

export default function Resources3() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container spacing={3}>
   
      <Grid item xs={4} style={{border:"1"}} >
      <Paper >
<img src={photoframe} alt="photoframe" class="img-fluid"  style={{width:"10rem", height:"8rem"}}/>
          </Paper>
        </Grid>
  
        <Grid item xs={8}  >
            <Paper className={classes.paper}
            style={{boxShadow:"0"}}>
          <p style={{fontSize:"18px", fontWeight:"600"}}>
          It’s all happening in the channel
          </p>

          <p>
          Follow everything related to individual <br/>
          topics, projects 
          or teams in their 
          <br/>dedicated channels.
          </p>
          </Paper>
       </Grid>
 
       </Grid>
   
    </div>
  
  );
}

