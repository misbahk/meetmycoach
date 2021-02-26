import React,{useState} from 'react';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ema from './Images/ema.svg';
import meetmy from './Images/MeetMyCoachLogo.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider,TextField} from "@material-ui/core"
import Backdrop from '@material-ui/core/Backdrop';
import notify from './Images/notification.svg';
import mss from './Images/msgg.svg';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import Tabpeople,{Tabpeople2} from './components/page30tab';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';


import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import MenuIcon from '@material-ui/icons/Menu';

import anz from './Images/anz.jpg';
import tg from './Images/toptag.svg';
import bussines from './Images/bussiness.png'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DashNav from './components/dashboardnavbar/nav2';



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListIcon from '@material-ui/icons/List';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Page31 from './pg31';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';



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
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },

      invite:{
        border:" 2px solid #FF8E31",
borderRadius: "5px",
color:' #FF8E31',
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
    paper:{
      // backgroundColor: theme.palette.background.paper,
      outline:'none',

    },
  gett:{
    //   padding: theme.spacing(1),
      
      marginLeft:theme.spacing(15),
    },

    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
     },
     card: {
        position: 'relative',
     },
     overlay: {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: 'white',
        // backgroundColor: 'white'
     },

     overlay1:{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        color: 'white',
     },
     modal:{
      "&:focus":{
      outline: 'none'
     }
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


 

 

 

//   upcoming sessions dropdown

function Date() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div style={{boxShadow: "0px 3px 6px #00000029"}}>
        <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'#858A9A',height:'40px'}}>
        Date posted
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

  function Searc() {
    const classes = useStyles();
  
    return (
            <>
      
        <div   style={{backgroundColor:'#F1F3F6',border: "1px solid #2DABFF30",borderRadius:" 5px",height:'40px'}}><InputBase
          
          placeholder="Search"
        
       
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton></div>
        </>
    
    );
  }

  function Request(){
      return(
          <>
            <Card>
                <Grid container style={{padding:'10px'}}>
                    <Grid item md={2} >
                        
                        <Avatar src={anz}/>
                    </Grid>
                    <Grid item md={6}>
                        <div style={{float:'left'}}>Brian Rice</div><br/>
                        <div style={{float:'left',color:'#858A9A',fontSize:'10px'}}>Requested 1 day ago</div>
                    </Grid>
                    <Grid item md={4}>
                        <div style={{float:'center',textDecoration:'underline',marginTop:'10px'}}>Cancel</div>
                    </Grid>

                </Grid>
            </Card>
          </>
      )
  }

// card which contains modal and change  of state


function Cardsession() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

   const handleOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

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
                    <Grid container style={{backgroundColor:'white',padding:'20px'}}>
                      
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
                    
                    :   <Grid container  style={{backgroundColor:'white',padding:'20px'}}>
                        <Grid container>
                            <Grid item md={8} style={{marginBottom:'10px'}}>
                            <TextField  style={{backgroundColor:'#F1F3F6'}} fullWidth size="small" variant="outlined" label="What would you like to collaborate on?"></TextField>
                                
                            </Grid>
                            <Grid item md={3}><ButtonGroup style={{backgroundColor:'#FF8E31'}}>
                            
                                <Button onClick={handleClose} ><SendIcon style={{color:'white'}}/></Button>
                                
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

  

  const body=(


    <div>
      <Page31/>
    </div>

    // <Page31/>
    
)

    return(
      <>
          <Card style={{boxShadow:" 0px 3px 6px #00000029",borderRadius:" 10px"}} >
            <CardActionArea onClick={handleOpen}>
            <CardMedia  style={{height:'100px'}} image={bussines} className={classes.media}/>
   <div className={classes.overlay}>
     <Grid container direction="row" alignItems="space-between">
         <Grid item md={12}>
             <div style={{float:'left'}}>Felix Nguyen</div></Grid>
        
       <Grid item md={12}>
       <div style={{float:'left'}}>Accounting Coach
       </div></Grid>
         
         
     </Grid>
   </div>

   <div className={classes.overlay1}>
       <img src={mss} style={{width:'30px'}}/>
   </div>
              
            </CardActionArea>
            </Card>

            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      
       style={{overflow:"scroll"}}
        
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
         <Fade in={open}  style={{outline:'none'}} >
         <Grid container  style={{outline:'none'}}  direction="row-reverse"> 
         <Grid item md={12} style={{backgroundColor:'white'}}>
           <DashNav/>
         </Grid>
            <Grid item md={4} style={{outline:'none'}} >
          
              
             <div  >
              
               {body}
             <Collaborate/>
             </div>
             </Grid>
         </Grid>
        </Fade>
      </Modal>
      </>
    )
    
  }
  

  


export default function Page30() {
    const classes = useStyles();
    return (
        <>
          <div className={classes.root}>

           <DashNav/> 

                
                

                <Grid container> 
                   
                    <Grid item md={9} >
                        <Grid container style={{padding:'30px'}}>
                            <Grid item md={1}></Grid>
                        <Grid item md={11} >
                            <Grid container>
                            <div style={{float:'left',font: "normal normal normal 35px/43px Montserrat"}}>People & Connections</div>
                            </Grid>
                            {/* <Grid container ><hr/></Grid> */}
                        </Grid>
                       
                       
                     
                        </Grid>
                        <Grid container>
                            <Grid item md={1}></Grid>
                            <Grid item md={11}> <Tabpeople2 /></Grid>
                       
                        
                        </Grid>
                        <Divider/>

                        <Grid container style={{padding:'30px'}}>
                            <Grid item md={1}></Grid>
                            <Grid item md={1} >
                                <div style={{float:'left',color:'#858A9A'}}>Sort by
                                    </div>
                                </Grid>
                            <Grid item md={2}>
                              <div style={{float:'left'}}><Date/></div>
                              </Grid>
                              <Grid item md={5}>
                              <div style={{float:'right'}}>
                                <ButtonGroup style={{height:'40px'}}>
                                  <Button>
                                  <ListIcon/>
                                  </Button>
                                  <Button>
                                  <ListIcon/>
                                  </Button>
                                </ButtonGroup>
                              </div>
                              </Grid>
                              <Grid item md={3}>
                              <div style={{float:'right'}}><Searc/></div>
                              </Grid>
                        </Grid>

                        <Grid container style={{padding:'30px'}}>
                            <Grid item md={1}>
                                
                            </Grid>
                            <Grid item md={2 } >
                                <Cardsession/>
                            </Grid>
                            <Grid item md={1}>
                                
                                </Grid>
                            <Grid item md={2 }  >
                                <Cardsession/>
                            </Grid>
                            <Grid item md={1}>
                                
                                </Grid>

                            <Grid item md={2 } >
                                <Cardsession/>
                            </Grid>
                            <Grid item md={1}>
                                
                                </Grid>
                            <Grid item md={2 } >
                                <Cardsession/>
                            </Grid>
                        </Grid>

                        <Grid container style={{padding:'30px'}}>
                            <Grid item md={1}>
                                
                            </Grid>
                            <Grid item md={2 } >
                                <Cardsession/>
                            </Grid>
                            <Grid item md={1}>
                                
                                </Grid>
                            <Grid item md={2 }  >
                                <Cardsession/>
                            </Grid>
                            <Grid item md={1}>
                                
                                </Grid>

                            <Grid item md={2 } >
                                <Cardsession/>
                            </Grid>
                            <Grid item md={1}>
                                
                                </Grid>
                            <Grid item md={2 } >
                                <Cardsession/>
                            </Grid>
                        </Grid>
                        
                       
                    </Grid>


                    <Grid item md={3} style={{backgroundColor:'#F1F3F6'}} >

                        <Grid container>
                            <Grid item md={12}>
                                 <div style={{padding:'30px',float:' left', font: "normal normal normal 35px/43px Montserrat",color: '#565757'}}>Connection Requests</div>
                            </Grid>
                        </Grid>

                        <Tabpeople/>
                        <Divider />
                        <Grid container style={{padding:'30px'}}>

                            
                            <Grid item md={12} ><Request/></Grid>
                            <br/>
                             
                            <Grid item md={12} style={{marginTop:'8px'}} ><Request/></Grid>
                            <Grid item md={12} style={{marginTop:'8px'}} ><Request/></Grid>
                            <Grid item md={12} style={{marginTop:'8px'}} ><Request/></Grid>
                            <Grid item md={12} style={{marginTop:'8px'}} ><Request/></Grid>
                            <Grid item md={12} style={{marginTop:'8px'}} ><Request/></Grid>
                            <Grid item md={12} style={{marginTop:'8px'}} ><Request/></Grid>
                            
                            </Grid>
                            <br/>
                           
                       
                    </Grid>
                </Grid>


                
               
               

               
                </div>  

       
    
        
        </>
    )
}