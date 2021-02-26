import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Tabform from './components/tab';
import bussiness from './Images/bussiness.png';
import im from './Images/bck.png';
import Page18 from './p18';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
     
     
    
    },

    large: {
      width: theme.spacing(15),
      height: theme.spacing(13),
    },

    toolbarButtons: {
        marginLeft: 'auto',
      },

    
   
    inemail:{
        borderRadius: '5px',
        // height:40,
      opacity:'1' ,
      backgroundColor:'#2DABFF30',
      width:"85%",
      border: "1px solid #CFD3DE",
     
     
       
       
    },

    proceed:{
    background:" #FF8E31 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    opacity: 1,
    color:'white',
    
  
    padding: theme.spacing(1),
    
    },

    gett:{
      padding: theme.spacing(1),
    },

    textttare:{
     width:'auto',
    },

    bbb:  {
        
        background: "rgba(0, 0, 0, 0.7) ",

  
    },

   
    
  }));

 


  function Proceed(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed}>PROCEED</Button>
            </>
        )

  }


  


export default function Page14() {
    const classes = useStyles();
    return (
        <>
            <div  className={classes.root}  >
                
                
                <div className={classes.bbb}> 
                 
                      
                      <Grid container direction="row" justify="center"   >
                        
                    <Grid item sm={4} style={{backgroundColor:'#F1F3F6' ,marginTop:20,marginBottom:20}}>
                    <Grid container direction="row" justify="center">
                          <Grid item >
                            <h5 style={{color:'black'}}>CONGRATS! Your PROFILE HAS BEEN CREATED</h5>
                          </Grid>
                          <Grid container direction="row" justify="center">
                              <Grid item >
                                <Avatar src={bussiness} className={classes.large}/>
                                
                              </Grid>
                          
                          </Grid>
                         <center style={{color:'black'}}>Dr.Raymond Beck</center>
                      </Grid>
                     
                      <div style={{padding:'20px',fontSize:"13px",color:'black'}}>
                      A certified professional in guiding people in overcoming mental health issues
                      </div>
                      
                        <br/>

                      <Divider/>
                      <div style={{padding:'25px',color:'black',textAlign:'left'}}>
                          <LocationOnIcon/> 98 Shirley Street PIMPAMA QLD 4209 AUSTRALIA
                          </div>
                      <Divider/>
                      

                     
                      <div style={{padding:'25px',fontSize:"10px",color:'black',textAlign:'left'}}>
                      Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Divider/>
                     
                      <div style={{padding:'25px',color:'black',textAlign:'left'}}>
                      Can help with
                      </div>

                      <div style={{padding:'25px',display:'inline-flex'}}>
                         <div style={{background:"white",color: "#858A9A",marginRight:'10px',borderRadius:'5px'}}>Mental Health</div>
                         <div style={{background:"white",color: "#858A9A",marginRight:'10px',borderRadius:'5px'}}>Mental Fitness</div>
                      </div><br/>

                     
                      

                     
                   <center style={{marginBottom:'10px'}}> <Proceed/></center>
                     

                    </Grid>
                    
                  </Grid>
                </div>

                {/* <Grid container direction="row-reverse">
                  <Grid item md={3}>
                    <Page18/>

                  </Grid>
                </Grid> */}


                
            </div>

       
    
        
        </>
    )
}