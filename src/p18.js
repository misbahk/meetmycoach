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
import diamond from './Images/diamond.svg';
import cert from './Images/certificate.svg';
import call from './Images/call.svg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


import StarRateIcon from '@material-ui/icons/StarRate';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    colbx:{
        backgroundImage: "linear-gradient(to left,#FFAF9E,#FFD09C)",
        borderRadius: "10px 10px 0px 0px",
    },

   
   
  

    proceed:{
    // background:" #FF8E31 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    opacity: 1,
    color:' #FF8E31', 
    
       border:" 1px solid #FF8E31",
    // width:'100%',
   
    // padding: theme.spacing(4),
    
    },

   
   
   
    
  }));

 


  function Ask(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed}>ASK NOW</Button>
            </>
        )

  }

  
  function Review(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed} style={{margin:'10px'}}>REVIEW</Button>
            </>
        )

  }

  function Answer(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed} style={{margin:'10px'}}>Answer</Button>
            </>
        )

  }

  export default function Ab(){
      return(
          <>
            <Grid container direction ="row">
                <Grid item md={3}>
                    <Page18/>
                </Grid>
                <Grid item md={8}>
                    <Bbb/>
                </Grid>
            </Grid>
          </>
      )
  }


  


function Page18() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
              <Grid >
                    <Grid className={classes.colbx} >
                        <Grid container  direction="row"  style={{padding:'10px'}}>
                            
                           
                                <Grid item md={2}>
                                    <Avatar alt="Remy Sharp" src={bussiness}  />
                            </Grid>
                            <Grid item md={5} style={{color:'white'}}>
                                <div>@raymond</div>
                                <img src={diamond}/>Premium Member
                                
                            </Grid>
                            
                        
                        
                        </Grid>
                        <Grid container  style={{padding:'10px'}}>
                        <Grid item md={5} style={{color:'white'}}>
                            
                        <StarRateIcon/><StarRateIcon/>
                        <StarRateIcon/><StarRateIcon/>
                        <StarOutlineSharpIcon />
                        </Grid>
                    
                        <Grid item md={4}>
                        <label style={{color:'white',textDecoration:"underline"}}>VIEW REVIEWS</label>
                        </Grid>
                    </Grid>
                    </Grid>
                    
                   <div >
                    <Grid container >

                        <Grid item  md={12} style={{boxShadow: "0px 2px 3px #00000017",borderRadius: "10px"}}>
                           <br/>
                            <Grid container  style={{padding:'10px'}}>
                                <Grid item md={2}>
                                    <img src={cert}/>
                                </Grid>
                                <Grid item md={6} style={{textDecoration:'underline'}}>
                                Add your certifications
                                </Grid>
                                <Grid item md={4}>+40XP</Grid>
                            </Grid>
                            <br/>
                            <Grid container  style={{padding:'10px'}}>
                                <Grid item xs={2}>
                                    <img src={call}/>
                                </Grid>
                                <Grid item xs={6} style={{textDecoration:'underline'}}>
                                Add Phone number
                                </Grid>
                                <Grid item xs={4}>+40XP</Grid>
                            </Grid>
                            <Grid container direction="row-reverse">
                                <Grid item xs={4} style={{textDecoration:'underline'}}>
                                + 4 more
                                </Grid>
                               
                            </Grid>
                           
                        </Grid>
                        
                    </Grid>
                    <br/>

                    <Grid container> 
                    <Grid item md={12}
                     style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px"}}>
                        <Grid container style={{padding:'10px'}}>
                            <Grid item xs={8} style={{color:'#006AB1'}}>
                                <h5>12 New profile visits</h5></Grid>
                            <Grid item xs={2} style={{color:'#19AF23',marginTop:"18px"}}>
                            <ArrowUpwardIcon />
                            </Grid>
                            <Grid item xs={2}>
                                <h5>7%</h5>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                    <br/>
                    <Grid container> 
                    <Grid item md={12}
                     style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px"}}>
                        <Grid container  style={{padding:'10px'}}>
                            <Grid item md={12}>
                                <h5>ASK A QUESTION</h5>
                                {/* <textarea style={{border: "1px solid #F1F3F6"}} rows="4" cols="40"></textarea> */}
                                <TextField variant="outlined" fullWidth style={{backgroundColor:'white'}}></TextField>
                            </Grid>
                                {/* <textarea style={{border: "1px solid #F1F3F6"}} rows="4" cols="40"></textarea> */}
                           
                            
                        </Grid>
                        <br/>
                        <Grid container direction="row-reverse">
                            <Grid item md={3}>
                                <center>
                                <Ask/>
                                </center>
                            </Grid>
                        </Grid>

                    </Grid>
                    </Grid>
                    </div>
                </Grid>
               

                


                
            </div>


       
    
        
        </>
    )
}

function Bbb(){
    return(
        <>
            <Grid container >
                <Grid item md={12}  style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px"}}> 
                    <Grid container>
                        <Grid item md={1}  style={{margin:'10px'}}>
                    <Avatar variant="square"  src={bussiness}/>
                    </Grid>
                    <Grid item md={9}>
                        <div style={{margin:'10px'}}> @bernard took the assessment S12 - Complex Communication had a message for you</div>
                        
                        <Review/>
                      
                    
                    </Grid>
                    </Grid>

                </Grid>

                
                <Grid item md={12}  style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px",marginTop:'10px'}}> 
                    <Grid container>
                        <Grid item md={1}  style={{margin:'10px'}}>
                    <Avatar variant="square"  src={bussiness}/>
                    </Grid>
                    <Grid item md={10}>
                        <div style={{margin:'10px'}}> @jenette posted a query on the session Stress Management and Studies</div>
                        
                        <Grid container  style={{margin:'10px'}}>
                            <Grid item md={8} style={{backgroundColor:'#ECF6FF',padding:'10px',borderRadius:'5px'}}>
                                <div>What methodologies in practice to handle stress while in exams?</div>
                            </Grid>
                            <Grid item md={4}>
                                <Answer/>
                            </Grid>
                        </Grid>
                      
                    
                    </Grid>
                    </Grid>

                </Grid>

                <Grid item md={12}  style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px",marginTop:'10px'}}> 
                    <Grid container>
                        <Grid item md={1}  style={{margin:'10px'}}>
                    <Avatar variant="square"  src={bussiness}/>
                    </Grid>
                    <Grid item md={10}>
                        <div style={{margin:'10px'}}>@ruben took the assessment S12 - Complex Communication</div>
                        
                        <Review/>
                      
                    
                    </Grid>
                    </Grid>

                </Grid>
                

                <Grid item md={12}  style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px",marginTop:'10px'}}> 
                    <Grid container>
                        <Grid item md={1}  style={{margin:'10px'}}>
                    <Avatar variant="square"  src={bussiness}/>
                    </Grid>
                    <Grid item md={10}>
                        <div style={{margin:'10px'}}> @bernard took the assessment S12 - Complex Communication had a message for you</div>
                        
                        <Review/>
                      
                    
                    </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}