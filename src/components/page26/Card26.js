import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ShareIcon from '@material-ui/icons/Share';
import profilepic from './profilepic.jpg'
import TextField from '@material-ui/core/TextField';
import Cards from './Cards'

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

export default function Card26() {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);



    const [reschedule, setReschedule] = useState(true);

    function toggle() {
      setReschedule(!reschedule);
    }


  return (
    <Grid style={{backgroundColor:"#ffff"}}  >

    <Grid className={classes.colbx} >
  
    </Grid>



<Box display="flex" >



<Box flexGrow={1}  >

<img src={profilepic} alt="profilepic" style={{width:"9rem", marginTop:"-2rem"}}/>

</Box>
      
  <Box  p={1} >
 <h4 style={{float:"left", paddingLeft:"2rem"}}>Looking for Certified Coach in Stress Management</h4>
<p style={{color:"#565757"}}>Added 1 day ago</p>
 </Box>


        <Box  flexGrow={2} p={1} >
<ShareIcon style={{color:"#B0BCC6"}} />
        </Box>

      </Box>





 <Box display="flex" p={1}    >

 <Box  flexGrow={1}>

      </Box>


      <Box  style={{marginRight:"1rem", marginTop:"-1rem"}}>
<p style={{color:"#858A9A"}}>Today, 3:30PM</p>
<p>Oct 15, 2020</p>
      </Box>

         <Box  p={1} >
      <Button variant="contained" size="small" onClick={toggle}
      style={{color:"#FF8E31", border:"2px solid #FF8E31", backgroundColor:"#ffff"}} >
      RESCHEDULE
        </Button>
</Box>

<Box  p={1} >
      <Button variant="contained" size="small" style={{color:"#FF8E31", border:"2px solid #FF8E31", backgroundColor:"#ffff"}} >
      CANCEL
        </Button>
</Box>

    </Box>




    
        <div  >
          {
          reschedule ? 
          <span>

          </span> :
           <span>


<Grid container style={{paddingRight:"1rem"}} >
    
    <Grid item xs={12} sm={7}>


      </Grid>
      <Grid item xs={12} sm={5} style={{backgroundColor:"#F8FBFF", borderRadius:"10px", border:"1px solid #2DABFF30"}}>

      <Box display="flex" p={2}    >

<Box style={{marginRight:"5px"}} >
<TextField  id="outlined-full-width"  disabled style={{border:"1px solid #2DABFF30"}}
          size="small"  placeholder="Pick a Date" fullWidth  margin="normal"
       variant="outlined"
        />

</Box>
<Box  >
<TextField  id="outlined-full-width"  disabled style={{border:"1px solid #2DABFF30"}}
          size="small"  placeholder="Pick Time" fullWidth  margin="normal"
       variant="outlined"
        />
</Box>
<Box p={3} >

<NavigateNextIcon style={{color:"#ffff" , backgroundColor:"#FF8E31", marginTop:"-5px", width:"4rem", height:"2rem", borderRadius:"5px"}}></NavigateNextIcon>

</Box>

</Box>

</Grid>
      </Grid>


           </span>
           
           }
 
</div>

  
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
      <Box display="flex"  p={1} bgcolor="background.paper">
      <h4 > Members (4)</h4>
      </Box>
      </div>




      <Grid container >
    
      <Grid item xs={12} sm={6}>
        <Cards/>
        </Grid>

        <Grid item xs={12} sm={6}>
        <Cards/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
        <Cards/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
        <Cards/>
        </Grid>
      
      </Grid>






    </Grid>

  );
}


