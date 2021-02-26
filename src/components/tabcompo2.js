import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider} from "@material-ui/core"

// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardActionArea from '@material-ui/core/CardActionArea';
import Backdrop from '@material-ui/core/Backdrop';



import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import anz from '../Images/anz.jpg';
import tg from '../Images/toptag.svg';
import msgg from '../Images/msgg.svg';
import Card from '@material-ui/core/Card';
import Page20 from '../page20/Card20';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import DashNav from './dashboardnavbar/nav2';



const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  colbx:{
    backgroundImage: "linear-gradient(to left,#FFAF9E,#FFD09C)",
    borderRadius: "10px 10px 0px 0px",
    padding:"2rem"
},
}));



function Searc() {
 

  return (
          <>
    <div style={{backgroundColor:'#F1F3F6', border: "1px solid #2DABFF30",borderRadius: "5px"}}>
      <InputBase
        
        placeholder="Search for jobs and connections"
        style={{width:'300px'}}
     />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      </div>
      </>
  
  );
}

function Date(){
  return(

        <FormControl variant="outlined" size="small" >
        <InputLabel htmlFor="outlined-age-native-simple">Date</InputLabel>
        <Select
          native
        label="Date"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        </FormControl>
  )

}

function Cardpg2(){
  const classes = useStyles();
  const [open, setOpen] = useState(false);

   const handleOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const body=(

      <Page20/>
  )
  return(
    <>
        <Card>
          <CardActionArea onClick={handleOpen}>

        <Grid container>

            <Grid item md={12} style={{boxShadow: "0px 3px 6px #00000029",borderRadius: "10px"}}>
              <Grid container>
                <Grid item md={2} style={{marginTop:'7px'}}>
                  <center>
                    <Avatar src={anz} variant="rounded"/>
                    </center>
                </Grid>
                <Grid item md={6}  style={{marginTop:'8px'}}>Looking for Certified Coach in Stress Management
                <div style={{color:'#858A9A'}}>Australia & New Zealand Banking Group Ltd.</div>
                </Grid>
                <Grid item md={2}  style={{marginTop:'25px'}}>
                  <div style={{fontWeight:'bolder'}}>$1200 - $2000</div>
                <div style={{fontSize:'10px',color:'#565757'}}>Session for 4 members</div>
                </Grid>
                <Grid item md={2} >
                  <center style={{marginTop:'30px'}}> <img src={msgg}/></center>
                 
                </Grid>
                {/* <Grid item md={1}><div style={{textDecoration:'underline'}}></div></Grid> */}
              </Grid>
              <br/>
              <Grid container style={{marginBottom:'10px'}}>
                <Grid item md={2}>
                  <center>
                    <div >
                      
                      <Button style={{backgroundColor:'#CCEBFF'}}>Fulltime</Button>
                    </div>
                    </center>
                  </Grid>
                <Grid item md={2}>
                <Button style={{backgroundColor:'#F1F3F6'}}>Mental Health</Button>
                </Grid>
                <Grid item md={2}>
                <Button style={{backgroundColor:'#F1F3F6'}}>Mental Fitness</Button>
                </Grid>
                <Grid item md={5}>
               <div style={{color:'#858A9A'}}> Apply by 30 Nov 2020</div>
                </Grid>
                <Grid item md={1}></Grid>
                
              </Grid>
            </Grid>
          </Grid>
         
         
          </CardActionArea>
          </Card>
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{overflow:'scroll'}}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
         <Fade in={open} style={{outline:'none'}}>
           
         <Grid container direction="row-reverse" > 
         <Grid item md={12} style={{backgroundColor:'white'}}>
               <DashNav/>
             </Grid>
            <Grid item md={6}   style={{outline:'none',backgroundColor:'white'}}>
            <Grid className={classes.colbx}>
            < CloseIcon style={{float:'right',color:'white'}} onClick={handleClose}></ CloseIcon>

            </Grid>
              
             {body}</Grid>
         </Grid>
        </Fade>
      </Modal>
    </>

  )
}



export default function Tabcomponent2() {
  
  return (

    <>
        <Grid container>
        <Grid item md={3}>
          <Searc/>

        </Grid>
        <Grid item md={7}>
          <div style={{margin:'10px',textDecoration:'underline'}}>Advanced Search</div>
        </Grid>
        <Grid item md={1}>
        <div style={{margin:'10px'}}>Sort by</div>
        </Grid>
        <Grid item md={1} >
        <div style={{}}><Date/></div>
        </Grid>
      </Grid>
      <br/>
      <Divider/>

      <Grid container style={{marginTop:'20px'}} direction="row" justify="space-between">

        <Grid item md={8}>
          <Cardpg2/>
          <br></br>
          <Cardpg2/>
          <br/>
          <Cardpg2/>
          <br></br>
          <Cardpg2/>
        
          
          {/* add space bewtwwn anz container */}

                  {/* third bx */}



          

          

        
        

          
        </Grid>

        {/* chat bot */}
        <Grid item md={3} style={{border: "1px solid #F1F3F6"}}>
          <Grid container  direction="row-reverse">
            <Grid item md={2}>
              <Avatar style={{marginTop:'30px'}}>A</Avatar>
            </Grid>
            <Grid item md={8} style={{backgroundColor:'#EEF5FF',borderRadius: "10px 10px 0px 10px"}}>
           <div style={{fontSize:'13px',padding:'5px'}}> Hi, I have applied for this coaching position, Is there anything you are waiting for?</div>
            </Grid>
          </Grid>
          <Grid container direction="row-reverse">
            <Grid item xs={3}><div style={{color:'#B0BCC6',fontSize:'10px'}}>1 day ago</div></Grid>
          </Grid>



                  <br/>
          <Grid container  direction="row">
            <Grid item md={2}>
              <Avatar style={{marginTop:'30px',float:'right'}} src={anz}/>
            </Grid>
            <Grid item md={8} style={{backgroundColor:'#EEF5FF',borderRadius: "10px 10px 0px 10px"}}>
           <div style={{fontSize:'13px',padding:'5px'}}> Hello Raymond, Can you please send across your Certification to john@example.com?</div>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item md={5}>
              <center>
              <div style={{color:'#B0BCC6',fontSize:'10px'}}>4 hrs ago</div></center>
              </Grid>
          </Grid>
          <br/>

          <Grid container  direction="row-reverse">
            <Grid item md={2}>
              <Avatar style={{marginTop:'30px'}}>A</Avatar>
            </Grid>
            <Grid item md={8} style={{backgroundColor:'#EEF5FF',borderRadius: "10px 10px 0px 10px"}}>
           <div style={{fontSize:'13px',padding:'5px'}}> 
           Yes, I can send you the certification copy
           </div>
            </Grid>
          </Grid>
          <Grid container direction="row-reverse">
            <Grid item xs={3}><div style={{color:'#B0BCC6',fontSize:'10px'}}>1 day ago</div></Grid>
          </Grid>
          <br/>

          <Grid container  direction="row">
            <Grid item md={2}>
              <Avatar style={{marginTop:'30px',float:'right'}} src={anz}/>
            </Grid>
            <Grid item md={8} style={{backgroundColor:'#EEF5FF',borderRadius: "10px 10px 0px 10px"}}>
           <div style={{fontSize:'13px',padding:'5px'}}> That Sounds great, thanks.</div>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item md={5}>
              <center>
              <div style={{color:'#B0BCC6',fontSize:'10px'}}>4 hrs ago</div></center>
              </Grid>
          </Grid><br/>

          <Grid container direction="row">
            <Grid item md={10}>
              <TextField   style={{backgroundColor:' #F1F3F6'}}size="small" variant="outlined" fullWidth placeholder="Type your message..."></TextField>
            </Grid>
            <Grid item md={1} style={{backgroundColor:' #FF8E31'}}></Grid>
          </Grid>



        </Grid>
      </Grid>


      


    </>

  )
}