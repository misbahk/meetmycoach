import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

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
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import Page14 from './p14';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    large: {
      width: theme.spacing(15),
      height: theme.spacing(13),
    },

    boxes:{
        marginLeft:theme.spacing(3),
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
    float:'right',
    // width:'100%',
    
    
    
    },

    update:{
      background:" #FF8E31 0% 0% no-repeat padding-box",
      borderRadius: "5px",
      opacity: 1,
      color:'white',
      // float:'right',
      // width:'100%',
      
      
      
      },
  

    gett:{
      padding: theme.spacing(1),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },

    textttare:{
     width:'auto',
    }
   
    
  }));

 


  function Proceed(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed}>PROCEED</Button>
            </>
        )

  }

  function Updatefile(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.update}>Upload related file</Button>
            </>
        )

  }


  


export default function Page13() {
    // const classes = useStyles();
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

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
                            <center><h2>What can you help others with?</h2>
                            <div style={{color:'#858A9A'}}>List out the capabilities that you can coach (30XP)</div>
                            </center> 
                            <br/>
                            <center>
                                    <br/>
                                     <TextField
                                        id="filled-full-width"
                                        placeholder="Men |"
                                        style={{ margin: 0 }}
                                        fullWidth
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <AddOutlinedIcon style={{color:'#FF8E31'}}/>
                                              </InputAdornment>
                                            ),
                                          }}
                                        
                                        variant="outlined"
                                        size="small"
                                        />
                                   
                                   

                                   
                                    </center>
                                   <br/>
                                  
                                    
                                    
                                    {/* <div>dgdr</div><br/> */}
                                    <Grid container direction="row">
                                        <Grid item xs={3}>
                                            <div style={{borderRadius: "5px",boxShadow: "0px 3px 6px #00000029",height:'40px',fontSize:'13px'}}>
                                                  <div style={{padding:'10px'}}> Account & Bookkeeping +</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4} className={classes.boxes}>
                                            <div style={{borderRadius: "5px",boxShadow: "0px 3px 6px #00000029",height:'40px',fontSize:'13px'}}>
                                              <div style={{padding:'10px'}}>Cryptocurrency & Blockchain +</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <br/>


                                    <Grid container direction="row" >
                                        <Grid item xs={3}>
                                            <div style={{ borderRadius: "5px",boxShadow: "0px 3px 6px #00000029",height:'40px',fontSize:'13px'}}>
                                              <div style={{padding:'10px'}}>Team Management +</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3} className={classes.boxes}>
                                            <div style={{borderRadius: "5px",boxShadow: "0px 3px 6px #00000029",height:'40px'}}>
                                                <div style={{display:'inline-flex'}}> 
                                                      <div style={{padding:'10px',fontSize:'13px'}}>Mental Fitness</div>
                                                      <CheckCircleRoundedIcon style={{color:'green',padding:'10px',fontSize:'20px'}}/>
                                           </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3} className={classes.boxes}>
                                            <div style={{borderRadius: "5px",boxShadow: "0px 3px 6px #00000029",height:'40px',fontSize:'13px'}}>
                                                 <div style={{padding:'10px'}}>Pre-School Teaching +</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <br/>

                                   <center style={{color:'#858A9A'}}>Do you have any certifications or accreditations?</center> 
                                 
                                  <div style={{border: "1px solid #2DABFF30",borderRadius: "10px"}}>
                                      <Grid container direction="row" justify="flex-end" style={{padding:'14px'}}>
                                          <Grid item xs={10} style={{textAlign:'left'}}>Mental Health</Grid>
                                          <Grid item xs={2}>
                                          <DeleteIcon style={{color:'#B0BCC6' ,float:'right'}}/>
                                          </Grid>
                                      </Grid>
                                      
                                      <Grid container direction="row" justify="start"  style={{ padding:'10px'}}>
                                          <Grid item xs={9}>
                                            <Grid container direction="row">
                                              <Grid item xs={12}>
                                              <TextField
                                                  id="outlined-full-width"
                                                  label="Accredition details"
                                                  // style={{ padding:'10px'}}
                                                    margin="normal"
                                                  size="small"
                                                  fullWidth
                                                  
                                                  variant="outlined"    
                                              /> 
                                              </Grid>
                                              <Grid item xs={5}>
                                                  <div style={{float:'left'}}><Updatefile /></div>
                                                </Grid>
                                                <Grid item xs={7}>
                                                <TextField
                                                  id="outlined-full-width"
                                                  label="Experience in years"
                                                  size="small"
                                                  fullWidth
                                                  
                                                  variant="outlined"    
                                              /> 

                                                </Grid>
                                              

                                            </Grid>
                                              
                                             
                                          </Grid>
                                          
                                      </Grid>

                                    
                                  </div>
                                  <br/>

                                  <div style={{border: "1px solid #2DABFF30",borderRadius: "10px"}}>
                                  <Grid container direction="row" justify="flex-end">
                                          <Grid item xs={12}>
                                          <TextField
                                        id="filled-full-width"
                                        placeholder="Mental Fitness"
                                        style={{ margin: 0 }}
                                        fullWidth
                                        margin="normal"
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                                <DeleteIcon style={{color:'#B0BCC6'}}/>
                                              </InputAdornment>
                                            ),
                                          }}
                                        
                                        variant="outlined"
                                        size="small"
                                        />
                                          </Grid>
                                         
                                      </Grid>

                                  </div>
                                  <br/>

                                  <Grid container direction="row-reverse">
                                    <Grid item xs={2}>
                                      <Button onClick={handleToggle}>
                                      <Proceed />
                                      </Button>
                                    </Grid>
                                  </Grid>
                                  <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                                    <Page14/>
                                  </Backdrop>

                                    

                          
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
                      <div style={{padding:'25px',textAlign:'left'}}>
                          <LocationOnIcon/> 98 Shirley Street PIMPAMA QLD 4209 AUSTRALIA</div>
                      <Divider/>
                      

                     
                      <div style={{padding:'25px',textAlign:'left'}}>
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