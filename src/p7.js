import React from 'react';

import left from './Images/Group.svg';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"
 
import TextField from '@material-ui/core/TextField';
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
        top:'-100px',
        overflow:'hidden',
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
    width:'85%',
    
    },

    backtohome:{
        font: 'normal normal 600 15px/19px Montserrat',
    },

    provideemail:{
        font: "normal normal medium 20px/47px Montserrat",

        color:" #000000",
        opacity: 1,
        padding:30,

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


  function Inemail(){
    const classes = useStyles();
        return(
            <form >
  
        <TextField id="default-size-small" 
        className={classes.inemail}
        label="Email"
        size="small"
         variant="outlined"
      
          />
  </form>
        )

  }


  function Proceed(){
    const classes = useStyles();
        return(
            <>  
                <Button className={classes.proceed}>PROCEED</Button>
            </>
        )

  }


  


export default function Page7() {
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
                    <Grid container direction="row" justify="flex-end" style={{padding:25}}>
                        <Grid item md={2}></Grid>
                        <Grid item md={4}>
                            <Typography variant="h4" style={{color:'white',marginTop:60,float:'left'}}>
                            Recover our password
                            </Typography> <br/>
                        </Grid>
                        <Grid item md={4}>
                            <Grid container direction="row" justify="center" >
                               <div style={{color:'white',marginTop:'90px',marginLeft:'100px'}}>Back to Sign In</div>
                            </Grid>
                        </Grid>
                        <Grid item md ={2} style={{marginTop:"50px"}} >
                                
                             <img  style={{float:'right'}}src={left}/>
                                
                                
                               
                        </Grid>



                    </Grid>

                </div>

                <div> 
                    <Grid container  style={{padding:25}}>
                        <Grid item md={1}></Grid>
                        <Grid item md={6}>

                        </Grid>
                        <Grid item md={3}>
                            
                                <div className={classes.card}>
                                    <center>
                                    
                                <div  className={classes.provideemail}>
                                Provide the email you registered with
                                </div>

                                <Inemail/>
                                <br/>
                                <Proceed></Proceed>
                                
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