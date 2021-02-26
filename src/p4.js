import React from 'react';

import left from './Images/Group.svg';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"
 


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    toolbarButtons: {
        marginLeft: 'auto',
      },

    liner:{
        backgroundImage: "linear-gradient(to left,#FFAF9E,#FFD09C)",
        height:250,
    },

    card:{
        background:" #FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: '10px',
        opacity: 1,
      
        position:'relative',
        top:'-170px',
        overflow:'hidden',
    },

    resendemail:{
        background:' #FF8E31 0% 0% no-repeat padding-box',
        borderRadius: '5px',
        opacity: 1,
        color:'white',
       
    },

contact:{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
border:' 1px solid #FF8E31',
borderRadius: '5px',
opacity: 1,
color:'#FF8E31',
marginLeft:10,
    },

    backtohome:{
        font: 'normal normal 600 15px/19px Montserrat',
    },
    
  }));

  function Backtologin(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.backtohome}>BACK TO HOME</Button>
            </>
        )

  }


  function Resendemail(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.resendemail}>RESEND EMAIL</Button>
            </>
        )

  }


  function Contactsupport(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.contact}>CONTACT SUPPORT</Button>
            </>
        )

  }


  


export default function Page4() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Typography><img src={meetmy}/></Typography>
                        <div className={classes.toolbarButtons}>
                        <Backtologin />
                        </div>
                       

                    </Toolbar>


                    
                </AppBar>

                <div className={classes.liner}>
                    <Grid container direction="row"  style={{padding:25}}>
                        <Grid item md={2}></Grid>
                        <Grid item md={4}>
                            <Typography variant="h4" style={{color:'white',marginTop:60,float:'left'}} >
                            Verify your email
                            </Typography> 
                            <Typography variant="subtitle" style={{color:'white',float:'left'}} >
                            You will need to verify your email to complete registration
                            </Typography> <br/>
                            {/* <p style={{color:'white'}}>You will need to verify your email to complete registration</p> */}
                        </Grid>
                        <Grid item md={4}></Grid>
                        <Grid item md ={2} style={{marginTop:"50px"}} >
                                
                             <img  style={{float:'right'}}src={left}/>
                                
                                
                               
                        </Grid>



                    </Grid>

                </div>

                <div> 
                    <Grid container  style={{padding:25}}>
                        <Grid item md={1}></Grid>
                        <Grid item md={6}></Grid>
                        <Grid item md={3}>
                            
                                <div className={classes.card}>
                                    <center><img src={ema} style={{padding:30}}/>
                                    
                                <p style={{padding:30}}>
                                An email has been sent to johndoe@example.com with a link to verify your account. If you have not received the email after a few minutes. Please check your spam folder
                                </p>
                                <br/>
                                <Resendemail/>
                                <Contactsupport></Contactsupport>
                                </center>
                                <br/>

                                </div>
                         
                            </Grid>
                           
                      


                    </Grid>

                </div>
            </div>

       
    
        
        </>
    )
}