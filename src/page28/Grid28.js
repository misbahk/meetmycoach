import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import imgcamera from './imgcamera.png'
import TextField from '@material-ui/core/TextField';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AddIcon from '@material-ui/icons/Add';
import { InputLabel } from '@material-ui/core';
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

export default function Grid28() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={4}>
        <img class="img-fluid" src={imgcamera} alt="imgcamera" style={{width:"10rem", marginTop:"-3rem", height:"10rem"}}/>

        </Grid>
        <Grid item xs={5}>
      

  
        <TextField  id="outlined-full-width"  disabled style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
          size="small"  placeholder="Enter session title" fullWidth  margin="normal"
       variant="outlined"
        />
        </Grid>
        <Grid item xs>
     
        </Grid>
      </Grid>



      <Grid container style={{marginTop:"-3rem"}} >
      <Grid item xs={4}>
     <p style={{marginTop:"3rem", color:"#858A9A"}}>Upload image for session</p>
        </Grid>
        <Grid item >
     
          <TextField  id="outlined-full-width"  disabled style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
          size="small"  placeholder="Pick a Time" fullWidth  margin="normal"
       variant="outlined"
        />
        
        </Grid>

        <Grid item style={{marginLeft:"1rem"}}>
      <TextField  id="outlined-full-width"  disabled style={{border:"1px solid #2DABFF30", backgroundColor:"#F1F3F6"}}
          size="small"  placeholder="Pick a Time" fullWidth  margin="normal"
       variant="outlined"
        />
        </Grid>

        <Grid item xs={4}>
     
     </Grid>

     </Grid>


<div style={{paddingLeft:"8rem"}}>


     <Grid container  >
       
                                        <Grid item xs={6}>
                                        <p style={{float:"left", fontWeight:"bold"}}>Select Category</p>
                                        <TextField style={{border:"1px solid #2DABFF30" , backgroundColor:"#F1F3F6"}} id="outlined-full-width" 
                                        placeholder=" + Type and select a capability" fullWidth  margin="normal"
                                        /> 
          

                                        </Grid> 


                                        <Grid item xs={6}>

                                        </Grid> 


                                         </Grid>

                                         <Grid container  >
       
       <Grid item xs={6}>
       <p style={{float:"left", fontWeight:"bold"}}>Overview</p>
 
       <TextField fullWidth style={{border:"1px solid #2DABFF30" , backgroundColor:"#F1F3F6"}}
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
        placeholder="Describe the session in brief"
          variant="outlined"
        />

       </Grid> 


       <Grid item xs={6}>

       </Grid> 

       </Grid>

       <Grid container  >
       <p style={{float:"left", fontWeight:"bold"}}>Invite Members</p>
           </Grid>

       <Grid container  >
       
      
       <Grid item xs={3} >
      
       <TextField style={{border:"1px solid #2DABFF30" , backgroundColor:"#F1F3F6", width:"70%", float:"left"}}
        id="outlined-full-width"   label=""  placeholder="Enter email"
                 margin="normal"  size="small" variant="outlined"   /> 


                       
                                        </Grid>

   <Grid item xs={3}>
   < AddOutlinedIcon style={{boxShadow: "0px 3px 6px #00000029",borderRadius: "4px",height:'1rem',float:"left",color:"#FF8E31",
   padding:"10px",marginTop:'1.2rem', marginLeft:"-5rem"}} />

   </Grid>

   <Grid item xs={6}>

   </Grid>
            
                                        </Grid>

                                        </div>


     
 

   

  
    </div>
  );
}
