import React from 'react';
import Nav from '../navbarThree/Navbar3';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Progressbar from './Progressbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card18 from './Card18';
import Box from '@material-ui/core/Box';
import Chart from './Chart';
import BoxesResponses from './BoxesResponses'
import { Button, Paper,Avatar } from '@material-ui/core';
import socialnet from './socialnet.svg'
import Footer from '../Footer/Footer';
import bussiness from './bussiness.png';
import diamond from './diamond.svg';
import cert from './certificate.svg';
import call from './call.svg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


import StarRateIcon from '@material-ui/icons/StarRate';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';


const useStyles = makeStyles((theme) => ({

  pagePadding:{
    paddingLeft:  "3rem",
    paddingRight:  "3rem"
  
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
                            <Grid item xs={12}>
                                <h5>ASK A QUESTION</h5></Grid>
                                <textarea style={{border: "1px solid #F1F3F6"}} rows="4" cols="40"></textarea>
                           
                            
                        </Grid>
                        <br/>
                        <Grid container direction="row-reverse">
                            <Grid item xs={4}>
                                <Ask/>
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
            <Grid container>
                <Grid item md={12}>
                    <Grid container  direction="row "justify="space-between">
                        <Grid item md={3}>Activity FEED</Grid>
                        <Grid item md={3}>SESSIONS  JOBS</Grid>
                    </Grid>
                </Grid>
            </Grid>
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

export default function DashboardLanding() {
  const classes = useStyles();

  return (
<div>

<Nav/>


<Grid container direction="row" className={classes.pagePadding} >


<Grid item md={8} >
<p className={classes.pagePadding} 
style={{float:"left", fontWeight:"600", fontSize:"30px"}}>Good morning, Raymond</p>


  </Grid>
  </Grid>
  <Grid container direction="row" className={classes.pagePadding} >


<Grid item md={8} >
<p className={classes.pagePadding}  style={{float:"left", fontSize:"18px", fontWeight:"600", marginTop:"-0.5rem"}}>ONGOING SESSIONS</p>

  </Grid>
  </Grid>


<Grid container direction="row"  className={classes.pagePadding} 
>


<Grid item md={8} >
<Card18/>

<Box display="flex" flexDirection="row" style={{marginTop:"1rem"}} >
        <Box>
        <Chart/>
            </Box>
            <Box style={{marginLeft:"1rem"}}>
            <BoxesResponses/>
            </Box>
            </Box>


<Paper  style={{borderRadius:"10px"}}>

<Box display="flex"  style={{marginTop:"1rem", backgroundImage: "linear-gradient(to right,#30758f,#5aa5ac)"}} >
      
        <Box  >
        <Box p={1}>
<img src={socialnet} alt="socialnet" />
</Box>

        </Box>
        <Box  flexGrow={1} >
<p style={{color:"#ffff"}}>
Engage with fellow coaches and build connections <br/>
Start networking, look out for opportunities
</p>
        </Box>
        <Box style={{width:"25%", marginTop:"1rem"}} >
    <Button style={{color:"black", backgroundColor:"#ffff"}}>
      JOIN NOW
    </Button>
        </Box>
      </Box>

</Paper>
<Bbb/>
</Grid>


<Grid item md={4} >
  <Page18/>



</Grid>


</Grid>

<br/>
<br/>
<br/>
<Footer/>

</div>
  );
}
