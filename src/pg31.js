import React,{useState} from 'react';


import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField, Avatar} from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';

import ButtonGroup from '@material-ui/core/ButtonGroup';

import bussiness from './Images/bussiness.png';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'



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

    invite:{
        border:" 2px solid #FF8E31",
borderRadius: "5px",
color:' #FF8E31',
    }

   
    
  }));

 


  function Proceed(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed}
                 
                 startIcon={<ForumOutlinedIcon style={{color:'white'}} />}>MESSAGE</Button>
            </>
        )

  }

  function Invite(){
      const classes =useStyles();
      return(
          <>
            <Button className={classes.invite}>
            Invite to collaborate
            </Button>
          </>
      )
  }

  function Collaborate(){
    const [state,setState]=useState(true);
    const classes =useStyles();
    const abc = ()=>{
        setState(false);

    }

      return (
          <>
           
                {
                    state ?
                    <Grid container>
                        <Grid item md={12}></Grid><br/>
                        <Grid item md={6}>
                        <Button className={classes.invite} onClick={abc}>
                            Invite to collaborate
                            </Button>
                        </Grid>
                        <Grid item md={6}>
                            <Proceed/>
                        </Grid>
                    </Grid>
                    
                    :   <Grid container>
                        <Grid container>
                            <Grid item md={8} style={{marginBottom:'10px'}}>
                            <TextField  style={{backgroundColor:'#F1F3F6'}} fullWidth size="small" variant="outlined" label="What would you like to collaborate on?"></TextField>
                                
                            </Grid>
                            <Grid item md={3}><ButtonGroup style={{backgroundColor:'#FF8E31'}}>
                            <Link underline='none' component={RouterLink} to='/page30'>
                                <Button ><SendIcon style={{color:'white'}}/></Button>
                                </Link>
                                </ButtonGroup></Grid>
                        </Grid>
                          

                    <Grid container>
                        <Grid item md={6}>
                            <Invite/>
                        </Grid>
                        <Grid item md={6}>
                            <Proceed/>
                        </Grid>
                    </Grid>
                    </Grid>
                   
               
                }
               
          
          </>
      )
  }

  


export default function Page31() {

    
    const classes = useStyles();

    return (
        <>
            <div  className={classes.root} style={{backgroundColor:'white'}}  >
                
                
                <div > 
                 
                      
                      <Grid container direction="row" justify="center" style={{border:'2px solid white'}}   >
                        
                    <Grid item md={12} style={{backgroundColor:'white'}}>
                    <Grid container direction="row" justify="center" style={{padding:'20px'}}>
                          
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
                      <div style={{padding:'20px',color:'black',textAlign:'left'}}>
                          <LocationOnIcon/> 98 Shirley Street PIMPAMA QLD 4209 AUSTRALIA
                          </div>
                      <Divider/>
                      

                     
                      <div style={{padding:'20px',fontSize:"10px",color:'black',textAlign:'left'}}>
                      Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Divider/>
                     
                      <div style={{padding:'20px',color:'black',textAlign:'left'}}>
                      Can help with
                      </div>
                      <Grid container >
                          <Grid item md={12}>

                      <div style={{padding:'20px',display:'inline-flex',float:'left'}}>
                         <div style={{background:"white",color: "#858A9A",marginRight:'10px',borderRadius:'5px'}}>Mental Health</div>
                         <div style={{background:"white",color: "#858A9A",marginRight:'10px',borderRadius:'5px'}}>Mental Fitness</div>
                      </div>
                      </Grid>
                      </Grid>
                      <Divider/>
                      <br/>

                            {/* <Grid container style={{padding:'20px'}}> <Collaborate/></Grid> */}
                     

                      {/* <Grid container style={{padding:'20px'}}>
                    
                          <Grid item md={6}>
                              <Invite/>
                          </Grid>
                          <Grid item md={6}> <Proceed/></Grid>
                          

                      </Grid> */}

                     
                      

                     
                  
                     

                    </Grid>
                    
                  </Grid>
                </div>

             


                
            </div>

       
    
        
        </>
    )
}