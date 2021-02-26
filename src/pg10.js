import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import cam from './Images/camera.png';
import load from './Images/loadingimg.png';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Tabform from './components/tab';
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
    width:'100%',
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


  


export default function Page10() {
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
                          <Grid item xs={7} >
                            <center><h2>What others can know about you?</h2></center>
                            <Grid container direction="row" justify="center">
                          <Grid item >
                            <Avatar src={cam} className={classes.large}/>
                            
                          </Grid>
                      </Grid>
                      <center>Upload your profile picture</center>
                      <Grid container direction="row-reverse">
                        <div style={{color: "#006AB1",textDecoration:'underline'}}>Autofill from Linkedin?</div>
                      </Grid>
                      <br/>

                              <TextField
                                      id="outlined-full-width"
                                      label="Enter a headline that best describes your profile"
                                      style={{ margin: 1 }}
                                    
                                    
                                      fullWidth
                                      margin="normal"
                                      
                                      variant="outlined"
                                    /> 
                                     <Grid container direction="row-reverse">
                                        <div >Max 80 characters</div>
                                      </Grid>
                                   
                                    <br/> 

                                      <TextField
                                      id="outlined-full-width"
                                      label="Provide a short summary about you"
                                      style={{ margin: 1 }}
                                    
                                      multiline
                                      rows={3}
  
                                      fullWidth
                                      margin="normal"
                                      
                                      variant="outlined"
                                    />
                                    <Grid container direction="row-reverse">
                                        <div >Max 250 characters</div>
                                      </Grid>
                                   <br/>
                                   <FormControlLabel
                                      value="end"
                                      control={<Checkbox color="primary" />}
                                      label="Are you open for reviews from Coachees? Reviews added to your profile cold increase your visibility in searches"
                                      labelPlacement="end"
                                    />
                                    
                                    <br/>
                                    <div></div><br/>
                                    <Grid container direction="row-reverse">
                                      <Grid item xs={2} >
                                      <Link underline='none' component={RouterLink} to='/page11'>
                                        <Next/>
                                        </Link>
                                      </Grid>

                                      <Grid item className={classes.gett}>
                                        <div>Get 20 Bunjis</div>
                                       
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
                            <Avatar src={load} className={classes.large}/>
                            
                          </Grid>
                          
                      </Grid>
                      <center>Dr.Raymond Beck</center>
                      </Grid>
                      <br/>
                      <div style={{backgroundColor:'white',height:'12px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>
                      
                        <br/>

                      <Divider/>
                      <div style={{padding:'25px'}}>98 Shirley Street PIMPAMA QLD 4209 AUSTRALIA</div>
                      <Divider/>
                      <br/>

                      <div style={{backgroundColor:'white',height:'32px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>

                      <br/>

                      <div style={{backgroundColor:'white',height:'32px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>

                      <br/>

                      <div style={{backgroundColor:'white',height:'32px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>

                      <br/>

                      <div style={{backgroundColor:'white',height:'32px',marginLeft:20,marginRight:20,borderRadius:'5px'}}></div>

                    </Grid>
                  </Grid>
                </div>


                
            </div>

       
    
        
        </>
    )
}