


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';

import { withStyles } from '@material-ui/core/styles';
import righttriangle from '../../Images/righttriangle.svg';
import left from '../../Images/Group.svg';
import Input from '@material-ui/core/Input';
import  Footername from './footerin';
import Footeremail from './footeremail';
import Subs from './footersubsc';
import facebook from '../../Images/facebook.svg';
import twitter from '../../Images/twitter.svg';
import insta from '../../Images/insta.svg';
import linkdn from '../../Images/linkdn.svg';



import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    flexGrow: 1,
    backgroundColor:'#FF8E31',
   
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },

  spaButton: {
   justify:'flex-end',
  },
  nevermissupdate:{
    font:'normal normal bold 45px/51px Montserrat',
    color:' #FFFFFF',

  },
  nnn:{
    color:' #FFFFFF',

  },

  lastfo:{
    background:" #FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "20px 20px 0px 0px",
    opacity: 1,
    padding:10,
    position:'relative',
    top:30,
    

  },

}));



 export default function Ffff(){
    const classes = useStyles();
    return(
      <>
     
    <div className={classes.root1} >
        
          <Grid container style={{padding:25}}>
           
      
          <Grid  item  xs={1} style={{marginTop:140}} >
               <Grid container direction="row" alignItems="flex-end" > 
               
               <img 
                    src={righttriangle}
                    class="img-fluid"
                    width={40}
                    />
                    </Grid>
        </Grid>
          <Grid  item  xs={1} justify ="flex-end" style={{marginTop:120}}>
          <img 
              src={righttriangle}
              class="img-fluid"
              width={80}
             />
          
          </Grid>
          <Grid item xs={7}>
            <Grid container direction="row" justify="space-between" >
                <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography className={classes. nevermissupdate}>Never miss an update!</Typography><br/>
                    <Typography className={classes.nnn}>Subscribe and stay in loop for our latest features and news</Typography>
                    <Typography className={classes.nnn}>We promise we won't spam your mailbox</Typography>
                </Grid>
                <Grid item xs={3} >
                  <Footername/><br/>
                  <Footeremail/><br/>
                  <Subs/>

                </Grid> 
            </Grid>
            <div className={classes.lastfo}>
            <Grid container direction="row">
               <Grid item xs={7} >
                 <Grid container>
                   <Grid item xs>
                   <Typography style={{float:'left'}} variant="h5">Meetmycoach</Typography><br/>
                   </Grid>
                 </Grid>
                 <Grid container>
                   <Grid item xs>
                   <div style={{fontSize:'13px',float:'left'}}> MeetMyCoach allows Coaches and Consultants to explore new opportunities</div>
                   
                   </Grid>
                 </Grid>
                 <Grid container>
                   <Grid item xs>
                   <div style={{fontSize:'13px',float:'left'}}> connect with employers and Businesses</div>
                   
                   </Grid>
                 </Grid>
                  
                   <br/>
                   <div style={{float:'left'}}>
                   <img src={facebook}/>
                   <img src={linkdn}/>
                   

                   <img src={twitter}/>
                   <img src={insta}/>
                   </div>
               </Grid>
               <Grid item xs={3}>
                 <div style={{textAlign:'left'}}>
               <p style={{fontSize:12}}>Support Center</p>
                        <p style={{fontSize:12,}}>Why MeetMyCoach?</p>
                        <p style={{fontSize:12}}>Plans & Pricing</p>
                        <p style={{fontSize:12}}>For Business</p>
                        <p style={{fontSize:12}}>Resources</p>
                        <p style={{fontSize:12}}>Use Cases</p>
                        <p style={{fontSize:12}}>About Us</p>
                        </div>
               </Grid>
               <Grid item xs style={{textAlign:'left'}}>
               <p style={{fontSize:12}}>Term of Use</p>
                        <p style={{fontSize:12}}>Privacy Policy</p>
                        <p style={{fontSize:12}}>Coach Usage Policy</p>
                        <p style={{fontSize:12}}>Employer job Policy</p>
                        <p style={{fontSize:12}}>Language Pocliy</p>
                        <p style={{fontSize:12}}>Contact Us</p>
               </Grid>

            </Grid>
            <Grid container justify="center" spacing={0}>
                <center>© Copyright 2020 MeetMyCoach. All rights reserved</center>
            </Grid>
            </div>
           
          </Grid>

          <Grid item xs={3}   >
  
                <Grid container direction="column" justify="flex-end"
                     alignItems="flex-end"  >
                    <Grid item xs>
                        <img 
                    src={left}
                    class="img-fluid"
                    width={70}
                    />
                    </Grid>

                    <Grid item xs style={{marginTop:170}}>
                        <img 
                    src={left}
                    class="img-fluid"
                    width={40}
                    /></Grid>
                </Grid>

                {/* <Grid container  direction="column" justify="space-between"
  alignItems="flex-end" >
                    <img 
                    src={left}
                    class="img-fluid"
                    width={40}
                    />
                </Grid> */}

          </Grid>

         
         

        </Grid>

    </div>
    </>
      
    )
  }

