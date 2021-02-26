import React from 'react';
import Box from '@material-ui/core/Box';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ShareIcon from '@material-ui/icons/Share';
import profilepic from './profilepic.jpg'
import chat1 from './chat1.svg'
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

export default function Cards() {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
  return (









    
        <Grid style={{padding:"1rem"}}>
   


          <Box display="flex" flexDirection="row" style={{backgroundColor:"#F1F3F6", borderRadius:"10px"}} >

          <Box p={2} flexGrow={1}  >
<img src={profilepic} alt="profilepic" style={{width:"3rem", borderRadius:"2rem", height:"3rem"}}/>
            </Box>
            

<Box p={1} flexGrow={1}  style={{marginTop:"-1rem"}} >

<p style={{fontSize:"18px", fontWeight:"600",  color:"#000000"}} >Olivia Edwards</p>
    <p style={{fontSize:"14px", color:"#000000"}} >
    olivia@example.com
        </p>
   
</Box>


<Box p={2} flexGrow={1}   >
<img src={chat1} alt="chat1" />
            </Box>
                


            </Box>

  
        </Grid>




  );
}


