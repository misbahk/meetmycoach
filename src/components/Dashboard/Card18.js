import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Profilepic from './profilepic.jpg'
import queue from './queue.svg'
import Progressbar from './Progressbar';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "10px" 
  },
 
}));




export default function Card18() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (


    <Grid container direction="row" >

  
<Grid item xs={4}  >
<Card >
<CardContent>
      <Box display="flex" flexDirection="row"  >
        <Box  >
        <img class="img-fluid" style={{width:"3rem", height:"3rem",borderRadius:"7px"}} 
    src={Profilepic}  alt="Profilepic"/>
        </Box>
        <Box >
   
<Typography style={{marginLeft:"1rem", color:"#565757", fontSize:"12px", fontWeight:"700"}}  >
        Managing Stress at work ...
        </Typography>
 
        <Typography  style={{textAlign:"left", marginLeft:"1rem",  fontSize:"12px", color:"#858A9A"}} color="textSecondary">
        Bernard Rhodes
        </Typography>
<br/>




        </Box>

    
      </Box>



      <Box display="flex" flexDirection="row" >
        <Box  >
        <img class="img-fluid" 
    src={queue}  alt="queue"/>
        </Box>
        <Box >
        <Typography style={{fontSize:"14px"}}  >
        15 Hours
        </Typography>
   
        </Box>
    
      </Box>
    

      <Box display="flex" flexDirection="row" style={{marginTop:"-1rem"}} >
        <Box  >
    <p style={{color:"#858A9A", fontSize:"16px"}}>Session progress</p>
        </Box>
      </Box>

      <Progressbar />

      </CardContent>
   
    </Card>
    
    
</Grid>


<Grid item xs={4} className={classes.root} >
<Card >
<CardContent>
      <Box display="flex" flexDirection="row"  >
        <Box  >
        <img class="img-fluid" style={{width:"3rem", height:"3rem",borderRadius:"7px"}} 
    src={Profilepic}  alt="Profilepic"/>
        </Box>
        <Box >
   
<Typography style={{marginLeft:"1rem", color:"#565757", fontSize:"12px", fontWeight:"700"}}  >
        Managing Stress at work ...
        </Typography>
 
        <Typography  style={{textAlign:"left", marginLeft:"1rem",  fontSize:"12px", color:"#858A9A"}} color="textSecondary">
        Bernard Rhodes
        </Typography>
<br/>

        </Box>

      </Box>

      <Box display="flex" flexDirection="row" >
        <Box  >
        <img class="img-fluid" 
    src={queue}  alt="queue"/>
        </Box>
        <Box >
        <Typography style={{fontSize:"14px"}}  >
        15 Hours
        </Typography>
   
        </Box>
    
      </Box>
    

      <Box display="flex" flexDirection="row" style={{marginTop:"-1rem"}} >
        <Box  >
    <p style={{color:"#858A9A", fontSize:"16px"}}>Session progress</p>
        </Box>
      </Box>

      <Progressbar />

      </CardContent>
   
    </Card>
    
    
</Grid>



<Grid item xs={4}  className={classes.root} >
<Card >
<CardContent>
      <Box display="flex" flexDirection="row"  >
        <Box  >
        <img class="img-fluid" style={{width:"3rem", height:"3rem",borderRadius:"7px"}} 
    src={Profilepic}  alt="Profilepic"/>
        </Box>
        <Box >
   
<Typography style={{marginLeft:"1rem", color:"#565757", fontSize:"12px", fontWeight:"700"}}  >
        Managing Stress at work ...
        </Typography>
 
        <Typography  style={{textAlign:"left", marginLeft:"1rem",  fontSize:"12px", color:"#858A9A"}} color="textSecondary">
        Bernard Rhodes
        </Typography>
<br/>




        </Box>

    
      </Box>



      <Box display="flex" flexDirection="row" >
        <Box  >
        <img class="img-fluid" 
    src={queue}  alt="queue"/>
        </Box>
        <Box >
        <Typography style={{fontSize:"14px"}}  >
        15 Hours
        </Typography>
   
        </Box>
    
      </Box>
    

      <Box display="flex" flexDirection="row" style={{marginTop:"-1rem"}} >
        <Box  >
    <p style={{color:"#858A9A", fontSize:"16px"}}>Session progress</p>
        </Box>
      </Box>

      <Progressbar />

      </CardContent>
   
    </Card>
    
    
</Grid>


</Grid>


    
  );
}
