import React from 'react';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Tabform from './components/tab';
import notify from './Images/notification.svg';
import mss from './Images/msgg.svg';
import { TheatersOutlined } from '@material-ui/icons';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';




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
        display:'inline-flex',
        
        
      },

    ll:{
      marginRight:theme.spacing(13),

    },

    liner:{
      backgroundImage: "linear-gradient(to left,#FFAF9E,#FFD09C)",
      // height:250,
  },
  
  proceed:{
    background:" #FF8E31 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    opacity: 1,
    color:'white',
    
  
    // padding: theme.spacing(1),
    
    },

    
   
   

  

    gett:{
    //   padding: theme.spacing(1),
      
      marginLeft:theme.spacing(15),
    },

 }));


 function Start(){
  const classes = useStyles();
      return(
          <>  
              <Button className={classes.proceed}>START EXPLORING OPPORTUNITIES</Button>
          </>
      )

}

 function Dashboard(){
    const classes = useStyles();
        return(
            <>  
                <Button >Dashboard</Button>
            </>
        )
 }

 function Jobs(){
    const classes = useStyles();
        return(
            <>  
                <Button >Jobs</Button>
            </>
        )
 }

 function Mycalender(){
    const classes = useStyles();
        return(
            <>  
                <Button >Mycalender</Button>
            </>
        )
 }

 function Connections(){
    const classes = useStyles();
        return(
            <>  
                <Button >Connection</Button>
            </>
        )
 }

 function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         Manage
         <ExpandMoreIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Myrequest</MenuItem>
          <MenuItem >Assesment</MenuItem>
          {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </div>
    );
  }

 



  


export default function Page17() {
    const classes = useStyles();
    return (
        <>
          <div className={classes.root}>

        
                
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Typography><img src={meetmy}/></Typography>
                       <div  className={classes.gett}> 

                           <Dashboard/>
                            <Jobs/> 
                              
                              <Mycalender/>  
                              <Connections/>
                           
                        </div>
                        <SimpleMenu/>
                        
                        <div className={classes.toolbarButtons}>
                        <img src={mss} className={classes.ll}/>
                        <img src={notify} className={classes.ll}/>
                        <Avatar alt="Remy Sharp" src={ema} />
                        
                     
                        
                        </div>

                      
                       
                      
                       

                    </Toolbar>


                    
                </AppBar>
               
               

                <Grid container justify="center" style={{marginTop:'100px'}}>
                  <Grid item md={4}>
                   <div className={classes.liner}>
                     <center><CheckCircleRoundedIcon  style={{color:'#19AF23',padding:'10px',fontSize:'40px'}}/>
                    
                     <br/>
                        <h3 style={{color:'white'}}>Thank you for your payment!</h3>
                   </center>
                   <br/>
                   </div>
                   <div style={{backgroundColor:"#F6F6F6"}}> 
                    <Grid container style={{padding:'20px'}}>
                      <Grid item xs={9} >
                        <div style={{color:'#858A9A',float:'left'}}>Billed to</div><br/>
                        <div style={{float:'left',fontWeight:'bold'}} >Raymond Beck</div><br/>
                        <div style={{float:'left'}}>98 Shirley Street</div><br/>
                        <div style={{float:'left'}}>PIMPAMA QLD 4209</div><br/>
                        <div style={{float:'left'}}>AUSTRALIA</div>
                      </Grid>
                      <Grid item xs={3}>
                      <div  style={{color:'#858A9A'}}>Payment date</div><br/>
                      <div>17-10-2020</div>
                      </Grid>
                      
                     <Grid container style={{backgroundColor:'white',marginTop:'10px'}}>
                      
                       <Grid item xs={10}>
                         <div style={{color:'#858A9A',float:'left'}}>Service</div><br/>
                         <div style={{float:'left',fontWeight:'bolder'}}>uCoach Monthly Subscription</div><br/>
                         <div style={{float:'left',fontWeight:'bolder'}}>Tax</div>
                       </Grid>
                       <Grid item xs={2}>
                       <div><br/></div>
                       <div style={{fontWeight:'bolder'}}>$9.99</div>
                       <div style={{fontWeight:'bolder'}}>$3</div>
                       </Grid>
                       <Divider/>
                       <Grid item xs={12}>
                       <Divider/>
                       <Grid container>
                         <Grid item xs={10}>
                           <div style={{float:'left'}}>Amount paid
                             </div>
                           </Grid>
                         <Grid item xs={2} style={{fontWeight:'bolder'}}>$13.99</Grid></Grid>
                       </Grid>
                       
                     </Grid>
                   
                      
                    </Grid>
                   
                   <Grid container style={{padding:'20px'}} >
                     <div style={{backgroundColor:'white'}}>
                      
                      
                     </div>
                     </Grid>
                   </div><br/>
                   <center><Start/></center>
                  </Grid>
                 
                </Grid>
                </div>  

       
    
        
        </>
    )
}