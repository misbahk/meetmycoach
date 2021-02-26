import React from 'react';
import Box from '@material-ui/core/Box';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ShareIcon from '@material-ui/icons/Share';
import badge from './badge.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    colbx:{
        backgroundImage: "linear-gradient(to left,#FFAF9E,#FFD09C)",
        borderRadius: "10px 10px 0px 0px",
        padding:"2rem"
    },
    buttons:{
        backgroundColor:"#F1F3F6",
        color:"#858A9A"
    },
    
  }));

export default function Card20() {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
  return (
    <Grid  >

    <Grid className={classes.colbx} >
  
    </Grid>



<Box display="flex" p={1}    >
      
        <Box  >
        <Box flexGrow={1} p={1} >
        <p style={{color:"#858A9A"}}>Australia & New Zealand Banking Group Ltd. </p>
</Box>

        </Box>
        <Box flexGrow={1} p={1}  >
<p style={{color:"#B0BCC6"}}>
1 day ago
</p>
        </Box>

        <Box  flexGrow={1} p={1} >
<img src={badge} alt="badge" />
        </Box>
        <Box  flexGrow={1} p={1} >
<ShareIcon style={{color:"#B0BCC6"}} />
        </Box>
      </Box>

<Box  display="flex">
<h4 style={{float:"left", paddingLeft:"2rem"}}>Looking for Certified Coach in Stress Management</h4>

</Box>




 <Box display="flex" p={1}    >
      
 <Box  p={1} >
      <Button variant="contained" size="small"  className={classes.buttons}>
        Mental Health
        </Button>
</Box>


      <Box  p={1} >
      <Button variant="contained" size="small"  className={classes.buttons}>
        Mental Health
        </Button>
</Box>

  
  

      <Box  flexGrow={1}>

      </Box>

         <Box  p={1} >
      <Button variant="contained" size="small" style={{backgroundColor:"#FF8E31", color:"#ffff"}} >
       APPLY
        </Button>
</Box>

<Box  p={1} >
      <Button variant="contained" size="small" style={{color:"#FF8E31", border:"2px solid #FF8E31", backgroundColor:"#ffff"}} >
      HIDE
        </Button>
</Box>

    </Box>



    <Box display="flex" p={1}    spacing={2}>
   
     
    <Box  flexGrow={1}>
<p style={{color:"#B0BCC6"}}>Job Type</p>
<Button style={{backgroundColor:"#CCEBFF",color:"#FF8E31"}}>Full time</Button>
</Box>

<Box  flexGrow={1}>
<p style={{color:"#B0BCC6"}}>Experience</p>
<p style={{color:"#565757"}}>Minimum 4 years</p>
</Box>
<Box  flexGrow={1}>
<p style={{color:"#B0BCC6"}}>Members</p>
<p style={{color:"#565757"}}>4 members</p>
</Box>
<Box  flexGrow={1}>
<p style={{color:"#B0BCC6"}}>Pay Scale</p>
<p style={{color:"#565757"}}>$1200 - $2000</p>
</Box>
        </Box>

        <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
      <h4 >Overview</h4>
      </Box>
      </div>


 <Box  flexGrow={1}>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
 </Box>

 <div style={{ width: '100%' }}>
      <Box display="flex" bgcolor="background.paper">
      <h4 > Job Description</h4>
      </Box>
      </div>
      <List >
      <ListItem>
      . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut      <br/>
       .  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .        <br/>
       . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       <br/>
        . labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris        <br/>
         .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut    <br/>
          . labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .
         
          </ListItem>
          </List>
       
    </Grid>

  );
}


