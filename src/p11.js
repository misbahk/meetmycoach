import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import left from './Images/Group.svg';
import cam from './Images/camera.png';
import load from './Images/loadingimg.png';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Tabform from './components/tab';
import bussiness from './Images/bussiness.png';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


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
    // width:'100%',
    float:'right',
    padding: theme.spacing(1),
    
    },

    gett:{
      padding: theme.spacing(1),
    },

    textttare:{
     width:'auto',
    }
   
    
  }));

 


  function Next(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed}>NEXT</Button>
            </>
        )

  }


  


export default function Page11() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Typography><img src={meetmy}/></Typography>
                        <div className={classes.toolbarButtons}>
                        <Avatar alt="Remy Sharp" src={ema} />
                        </div>
                       

                    </Toolbar>


                    
                </AppBar>

                <div>
                  <Grid container direction="row">
                    <Grid item xs={8} style={{marginBottom:10}}>
                      <Tabform/>
                      <Grid container direction="row" justify="center">
                          <Grid item xs={9} >
                            <center><h2>Can you add any references?</h2>
                            <div style={{color:'#858A9A'}}>adding references could increase you credibility (30 Bunjis)</div>
                            </center>
                           
                     
                      
                      <br/>

                              <TextField
                                      id="outlined-full-width"
                                      label="LinkedIn Profile link"
                                      style={{ margin: 5 }}
                                        margin="normal"
                                      size="small"
                                      
                                      variant="outlined"
                                    /> 

                                    <TextField
                                      id="outlined-full-width"
                                      label="Webpage Link"
                                      style={{ margin: 5 ,marginLeft:'40px'}}
                                        margin="normal"
                                      size="small"
                                      
                                      variant="outlined"
                                    /> 

                                    <TextField
                                      id="outlined-full-width"
                                      label="Video Reference"
                                      style={{ margin: 5,float:'right' }}
                                        margin="normal"
                                      size="small"
                                      
                                      variant="outlined"
                                    /> 
                                     
                                   
                                    <br/> 
                                    
                                    <Grid container direction="row" justify="flex-end" style={{marginTop:'30px',marginBottom:'20px'}}>
                                        <Grid item xs={6}>
                                        <TextField
                                      id="outlined-full-width"
                                      label="Add Work Reference"
                                      style={{ margin: 5 }}
                                        margin="normal"
                                      size="medium"
                                      
                                      variant="outlined"
                                    /> 
                                   
                                        < AddOutlinedIcon style={{boxShadow: "0px 3px 6px #00000029",borderRadius: "5px",height:'35px',maxWidth:'25px',padding:"10px",marginTop:'5px'}} />
                                        

                                        </Grid>
                                        <Grid item xs={6}>
                                        
                                        <div style={{float:'right'}}>
                                            <TextField
                                      id="outlined-full-width"
                                      label="Add any publications like blog, article etc."
                                      style={{ margin: 5}}

                                        margin="normal"
                                      size="medium"
                                      
                                      variant="outlined"
                                    /> 
                                    < AddOutlinedIcon style={{ boxShadow: "0px 3px 6px #00000029",borderRadius: "5px",height:'35px',maxWidth:'25px',padding:"10px",marginTop:'5px'}} />
                                    </div>
                                        </Grid>

                                    </Grid>




                                    <Divider/>
                                    <center><h2>Are you an Aboriginal or Torres Islander?</h2>
                                    <div style={{color:'#858A9A'}}>This could benefit your when jobs are posted with a reservation quota</div>
                                    <br/>
                                    <FormControlLabel
                                    style={{color:'#858A9A'}}
                                      value="end"
                                      control={<Checkbox color="primary" />}
                                      label="Aboriginal"
                                      
                                      labelPlacement="end"
                                    />
                                    <FormControlLabel
                                    style={{color:'#858A9A'}}
                                      value="end"
                                      control={<Checkbox color="primary" />}
                                      label="Torres Islander"
                                      labelPlacement="end"
                                    />

                                    <FormControlLabel
                                    style={{color:'#858A9A'}}
                                      value="end"
                                      control={<Checkbox color="primary" />}
                                      label="None/No preference"
                                      labelPlacement="end"
                                    />
                                    </center>
                                   <br/>
                                  
                                    
                                    <br/>
                                    <div></div><br/>
                                    <Grid container direction="row-reverse" justify="flex-end">

                                      <Grid item xs={6} >
                                      <Link underline='none' component={RouterLink} to='/page12'>

                                        <Next/>
                                        </Link>
                                      </Grid>

                                      <Grid item xs={6}className={classes.gett}>
                                        <div>Skip</div>
                                       
                                      </Grid>
                                    </Grid>

                                  

                                    

                          
                          </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} style={{backgroundColor:'#F1F3F6'}}>
                    <Grid container direction="row" justify="center">
                          <Grid item >
                            <h5>Details people will see</h5>
                          </Grid>
                          <Grid container direction="row" justify="center">
                          <Grid item >
                            <Avatar src={bussiness} className={classes.large}/>
                            
                          </Grid>
                          
                      </Grid>
                      <center>Dr.Raymond Beck</center>
                      </Grid>
                      <br/>
                      <div style={{padding:'20px',fontSize:"13px"}}>
                      A certified professional in guiding people in overcoming mental health issues
                      </div>
                      
                        <br/>

                      <Divider/>
                      <div style={{padding:'25px'}}>
                          <LocationOnIcon/> 98 Shirley Street PIMPAMA QLD 4209 AUSTRALIA</div>
                      <Divider/>
                      

                     
                      <div style={{padding:'25px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Divider/>
                      <br/>

                      <div style={{backgroundColor:'white',height:'32px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>

                      <br/>

                      <div style={{backgroundColor:'white',height:'32px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>

                      <br/>

                      <div style={{backgroundColor:'white',height:'32px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>

                      <br/>

                     

                    </Grid>
                  </Grid>
                </div>


                
            </div>

       
    
        
        </>
    )
}