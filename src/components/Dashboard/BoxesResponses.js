import React from 'react';
import Box from '@material-ui/core/Box';
import dollar from './dollar.svg'
import graduationhat from './graduationhat.svg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import chat1 from './chat1.svg'
import rightArrow from './rightArrow.png'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function BoxesResponses() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
     
      <Grid item xs={12} sm={6}>
      <Paper style={{backgroundColor:"#E5F5FF"}} >
      <Box display="flex" flexDirection="row"  >
        <Box style={{  WebkitWritingMode: "vertical-lr", marginLeft:"6px"}} >
<img src={dollar} alt="dollar" />
            </Box>
            

<Box style={{textAlign:"left", marginLeft:"6px"}}>
    <p style={{fontWeight:"600"}}>$3,965</p>
    <p style={{fontSize:"14px", color:"#858A9A"}}  >
EARNINGS THS MONTH
        </p>
   
</Box>
            </Box>
            </Paper>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Paper style={{backgroundColor:"#E4FFE5"}} >
        <Box display="flex" flexDirection="row"  >
        <Box style={{  WebkitWritingMode: "vertical-lr", marginLeft:"6px"}} >
<img src={graduationhat} alt="graduationhat" />
            </Box>
            

<Box style={{textAlign:"left", marginLeft:"6px"}}>
    <p style={{fontWeight:"600"}}>239</p>
    <p style={{fontSize:"14px", color:"#858A9A"}} >
COACHEES
        </p>
   
</Box>
            </Box>

        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{backgroundColor:"#F8FBFF", border:"0.5px solid #2DABFF30"}}>
        <Box display="flex" flexDirection="row"  >
        <Box style={{  WebkitWritingMode: "vertical-lr", marginLeft:"6px"}} >
<img src={chat1} alt="chat1" />
            </Box>
            

<Box   style={{textAlign:"left", marginLeft:"1rem", width:"100%"}}>
    <p style={{fontWeight:"600"}}>83 responses</p>
    <p style={{fontSize:"14px", color:"#858A9A"}} >
   OUT OF 117 JOBS APPLIED
        </p>
   
</Box>


<Box style={{width:"100%"}} >
<img style={{  float:"right", marginTop:"2rem"}}  src={rightArrow} alt="rightArrow" />
            </Box>
            


            </Box>
        </Paper>
      </Grid>
    </Grid>

 
     


    </div>
  );
}


