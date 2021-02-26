


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';
import Time from './timeline/time';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import Search1 from './components/landingpagebuttons/searchbar1';
import  How from './components/landingpagebuttons/howitworks';
import Findacoach from './components/landingpagebuttons/findacoach';
import Joinascoach from './components/landingpagebuttons/joinascoach';
import Login from './components/landingpagebuttons/login';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import righttriangle from './Images/righttriangle.svg';
import Group from './Images/Group.svg'
import beautiful from './Images/beautiful.png';
import bigleft from './Images/bigleft.svg';
import bigright from './Images/bigright.svg';
import logo2 from './Images/logo2.svg';
import check from './Images/check.svg';
import Enteremail from './components/landingpagebuttons/enteruremail';
import Signup from './components/landingpagebuttons/signupbtn';
import dash from './Images/dash.png';
import bg from './Images/bg@2x.png';
import cook from './Images/becca.png';
import bussiness from './Images/bussiness.png';
import fin from './Images/finance.png';
import tech from './Images/technology.png';
import fit from './Images/fitness.png';
import food from './Images/food.png';
import university from './Images/university.png';
import pet from './Images/pet.png';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';


import Ffff from './components/landingpagebuttons/foo';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    // flexGrow: 1,
    backgroundColor:'#FF8E3133',
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },

  spaButton: {
   justify:'flex-start',
  },

  findcoach:{
    background: "#FFFFFF 0% 0% no-repeat padding-box",
boxShadow:" 0px 3px 6px #00000029",
borderRadius: "10px",
opacity: 1,
padding:5,

  },

  newww:{
    background:"#52D268",
    color:'white',

  },

  imgg:{
    
    background:"white",
    borderWidth:2,
    // borderStyle:'solid',
    borderColor:'white',
    borderRadius:5,
    padding:5,
    zIndex:-1,
   
    height:200,
    width:150,
    // position:'relative',
  }
}));
function Ima(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={beautiful} style={{width:"90%",height:250,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Relationships</div>
      </div>
    </>
  )

}

function Bussiness(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={bussiness} style={{width:"90%",height:200,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Cooking</div>
      </div>
    </>
  )

}

function Finance(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={fin} style={{width:"90%",height:150,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Finance</div>
      </div>
    </>
  )

}

function Food(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={food} style={{width:"90%",height:250,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>FOOD</div>
      </div>
    </>
  )

}

function Fitness(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={fit} style={{width:"90%",height:150,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Fitness</div>
      </div>
    </>
  )

}

function Technology(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={tech} style={{width:"90%",height:250,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Technology</div>
      </div>
    </>
  )

}

function University(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={university} style={{width:"90%",height:200,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Youth&Teenage</div>
      </div>
    </>
  )

}

function Dog() {
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={pet} style={{width:"90%",height:200,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Pet Care</div>
      </div>
    </>
  )

}


function Cook(){
  const classes = useStyles();
  return(
    <>  
      <div style={{position: 'relative'}}>
        
        <img src={cook} style={{width:"90%",height:250,borderWidth:'5px',borderColor:'white',borderStyle:'solid',borderRadius:'5px'}}/>
        <div style={{position: 'absolute',bottom: 0, color: "#f1f1f1",width:"50%", padding: "20px"}}>Cooking</div>
      </div>
    </>
  )

}

function Cardfind(params) {
  const classes = useStyles();
  return(
    <>  
        <Card>
          <CardActionArea>
          <div  >
             <Grid container direction="row" justify="space-between" style={{padding:'10px'}}>
                <Grid item >
                  <div style={{color:" #FF8E31"}}>Find Coaches</div><br/>
                  <div>I am looking for somebody to coach me</div>
                </Grid>
                <Grid item >
                <i class="fa fa-arrow-right rightarrow" aria-hidden="true"></i>
                </Grid>
              </Grid>

               </div>
               </CardActionArea>
               </Card>
    </>
  )
  
}


function Cardfind2(params) {
  const classes = useStyles();
  return(
    <>  
        <Card>
          <CardActionArea>
          <div  >
             <Grid container direction="row" justify="space-between" style={{padding:'5px'}}>
                <Grid item >
                  <div style={{color:" #FF8E31",fontWeight:'bolder'}}>Find Coaching Jobs</div><br/>
                  <div>I am a coach and looking for new opportunities</div>
                </Grid>
                <Grid item >
                <i class="fa fa-arrow-right rightarrow" aria-hidden="true"></i>
                </Grid>
              </Grid>

               </div>
         
               </CardActionArea>
               </Card>
    </>
  )
  
}


function Cardfind3(params) {
  const classes = useStyles();
  return(
    <>  
        <Card>
          <CardActionArea>
          <div  >
             <Grid container direction="row" justify="space-between" style={{padding:'10px'}}>
                <Grid item >
                  <div style={{color:" #FF8E31"}}>Post a job</div><br/>
                  <div>I am an employer and looking for coach</div>
                </Grid>
                <Grid item >
                <i class="fa fa-arrow-right rightarrow" aria-hidden="true"></i>
                </Grid>
              </Grid>

               </div>
        
         
               </CardActionArea>
               </Card>
    </>
  )
  
}



 export default function Landingpage(){
    const classes = useStyles();
    return(
      <>
       <script src='https://kit.fontawesome.com/a076d05399.js'></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
        <Typography variant="h6" className={classes.menuButton}>
            Meetmycoach
           
          </Typography>
          <Search1/>
          
            <Grid container
                  spacing={3}
                  justify="flex-end">
                  
             <Grid item><How  /></Grid>
             <Grid item><Findacoach/></Grid> 
             <Grid item><Joinascoach /></Grid>
             <Grid item><Login/></Grid> 
              </Grid>
            


          
        </Toolbar>
      </AppBar>
    </div>
    <div className={classes.root1} >
        
        <Grid container style={{padding:'25px'}}>
          
        <Grid  item  xs={1}  >
             
               
               <img style={{marginTop:190}}
                    src={righttriangle}
                    class="img-fluid"
                    width={40}
                    />
                    </Grid>
       

        <Grid  item  xs={1}  >
               
               
               <img  style={{marginTop:175}}
                    src={righttriangle}
                    class="img-fluid"
                    width={80}
                    />
                    
        </Grid>
         
         <Grid item xs={4}>
                <Grid container direction="row" justify="flex-start">

                 <Grid item >  <Button className={classes.newww}>New</Button> </Grid>
                    <Grid item >  New feature available for communication with coaches </Grid>
                </Grid>

            

              <Grid container direction="row" justify="flex-end">
                <Grid item >
                  <img src={Group} class="img-fluid"/>
                </Grid>
              </Grid>

              
          
               <br/>
               <Cardfind/>
               <br/>



               
               <Link underline='none' component={RouterLink} to='/page19'>
               <Cardfind2/>
               </Link>
               <br/>
               <Cardfind3/>



           </Grid>

           {/* next to cards */}
           <Grid item xs={2} style={{padding:10}}>
              <Grid container direction="row" justify="flex-end">
                <img src={Group} width={40} style={{marginTop:500}}/>
              </Grid>
           </Grid>

           <Grid item xs>
            <Grid container direction="column" spacing={3}>
              <Grid item  >
                <div >
                  <Ima/>
                  {/* <img src ={beautiful}  className={classes.imgg} /> */}
                   
                 </div> 
              </Grid>
              <Grid item >
              <div >
                <Cook/>
                  {/* <img src ={beautiful}  className={classes.imgg} /> */}
                 </div> 
             
              </Grid>
              <Grid item >
              <div >
                <Bussiness/>
                  {/* <img src ={beautiful}  className={classes.imgg} /> */}
                 </div> 
              </Grid>
            </Grid>
           
            
          
           
           
           </Grid>

           <Grid item xs>
           <Grid container direction="column" spacing={3}>
              <Grid item  >
                <div >
                  <Finance/>
                 </div> 
              </Grid>
              <Grid item >
              <div >
                  <Technology/>
                 </div> 
             
              </Grid>
              <Grid item >
              <div >
                 <Fitness/>
                 </div> 
              </Grid>
            </Grid>
           
           </Grid>
           <Grid item xs>
           <Grid container direction="column" spacing={3}>
              <Grid item  >
                <div >
                  <Food/>
                 </div> 
              </Grid>
              <Grid item >
              <div >
                  <University/>
                 </div> 
             
              </Grid>
              <Grid item >
              <div >
                <Dog/>
                  
                 </div> 
              </Grid>
            </Grid>
           </Grid>
           
    
        
      
       
       

      </Grid>

  </div>
  

  <div>
    
     <Grid container  direction="row" justify="flex-start" style={{padding:"25px"}} >
      <Grid item md={1}>
       
      </Grid>
      <Grid item md={7}>
        <Grid container>
          <Grid item md={12}>
          <div style={{float:'left',color: "#FF8E31"}} >
      OUR STELLAR COACHES AWAIT YOU
       </div>
          </Grid>
          <Grid item md={12}>
          <div style={{float:'left',font:" normal normal 900 50px/61px Montserrat"}} >
                            Find the right coach who helps <br/>
                            
          </div>
          </Grid>

          <Grid item md={12}>
          <Typography variant="h4" style={{float:'left',font:" normal normal 900 50px/61px Montserrat"}} >
          You transform 
                            
          </Typography>
          </Grid>
          
        </Grid>

     
                            
                           
        
       

      </Grid>

      <Grid md={1}></Grid>
      
     
      
      <Grid item md={2}>
            <Grid container justify="flex-end" style={{marginTop:50}}>
                <img src={bigleft} style={{marginRight:15}}/>
                <img src={bigright}/>
            </Grid>
      </Grid>
      
    </Grid> 


    </div>

    <div >
      <Grid container style={{padding:25}}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
        <div style={{height:30,width:170,backgroundColor:"white",position:"relative",top:180,right:0}}>Douglas Anderson</div>

          <img src={beautiful} style={{marginLeft:20}} />

        </Grid>

        <Grid item xs={3}>
        <div style={{height:30,width:170,backgroundColor:"white",position:"relative",top:180,right:0}}>Douglas Anderson</div>

          <img src={beautiful} style={{marginLeft:20}} />

        </Grid>

        <Grid item xs={3}>
        <div style={{height:30,width:170,backgroundColor:"white",position:"relative",top:180,right:0}}>Douglas Anderson</div>

          <img src={beautiful} style={{marginLeft:20}} />

        </Grid>
      </Grid>
    </div> 

    <div> 
       <Grid container style={{padding:25}}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <img src={logo2}  width={200}/>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end" >
                <h4>AND 2,300+ OTHERS</h4>
            </Grid>
      </Grid>
      
      </Grid> 
    </div>

     <div> 
      <Grid container style={{marginBottom:'20px'}} justify="flex-start">
          <Grid item xs={1}></Grid>
          <Grid item xs={6} style={{marginLeft:'25px',}} >
              <div  style={{font: "normal normal 900 50px/61px Montserrat",float:'left'}}>Looking to coach ? <strong 
              style={{color:'#FF8E31',font: "normal normal 900 50px/61px Montserrat"}}>Start now!</strong></div><br/>
                
           
          </Grid>
          
      
      </Grid>
      <Grid container  style={{marginBottom:'20px'}}>
        <Grid item md={1}></Grid>
        <Grid item md={6} style={{marginLeft:'25px'}}>
          <div style={{float:'left'}}>
        <img src={check} />
            <label style={{}}>FREE 30-DAY TRAIL</label>

           
              <img src={check} style={{marginLeft:'20px'}}/>
            <label>FLEXIBLE PLANS VIEW PRICING</label>

            <img src={check} style={{marginLeft:'10px'}}/>
            <label>NO CREDIT CARD REQUIRED</label>
            </div>
           
        </Grid>
      </Grid>
    </div> 

    

     
       <Grid container >
        <Grid item md={1}></Grid>
        <Grid item md={3} style={{float:'left',marginLeft:'25px'}} > <Enteremail/></Grid>
        <Grid item md={2}> <Signup/></Grid>

      </Grid> 
      <br/>
  

    <div>
      <Grid container>
        <Grid item md={6}>
          <img src={dash} style={{maxWidth:"100%",marginTop:"60px"}}/>
        </Grid>
        <Grid item md={4} style={{maxWidth:"100%"}}>
          <Time/>
        </Grid>
      </Grid>
    </div>

    <div >
      <Grid container direction ="row" justify="flex-end" style={{backgroundColor:"#FF8E3133"}} >
        <Grid item xs={1}>
       
        </Grid>
        <Grid item xs={7} style={{padding:25}}>
          <Typography variant="h4" style={{float:'left'}}> Explore trending skills</Typography>

       
        <Grid container>
          <Grid item xs>
          <p style={{float:'left'}}>Stay up to date on what's happening in technology, leadership, skill development and more.</p>

          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
        <div style={{display:"inline-flex",float:'left'}}>
           
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,fontSize:'12px'}}> Account & Bookkeeping +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Cryptocurrency & Blockchain +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Team Management +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Mental fitness +</div>

           </div>
           </Grid>
           </Grid>

           <div style={{display:"inline-flex" ,marginTop:20,float:'left'}}>
           
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,fontSize:'12px'}}> Team Management +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Mental Fitness +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Pre-School Teaching +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Account & Bookkeeping +</div>

           </div>

           <div style={{display:"inline-flex",marginTop:20,float:'left'}}>
           
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,fontSize:'12px'}}> Account & Bookkeeping +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Cryptocurrency & Blockchain +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Team Management +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Mental fitness +</div>

           </div>

           <div style={{display:"inline-flex" ,marginTop:20,float:'left'}}>
           
           <div style={{fontSize:'12px',backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8}}> Team Management +</div>
           <div style={{fontSize:'12px',backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10}}> Mental Fitness +</div>
           <div style={{fontSize:'12px',backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10}}> Pre-School Teaching +</div>
           <div style={{fontSize:'12px',backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10}}> Account & Bookkeeping +</div>

           </div>

           <div style={{display:"inline-flex" ,marginTop:20,float:'left'}}>
           
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,fontSize:'12px'}}> Team Management +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Mental Fitness +</div>
           <div style={{backgroundColor:'white',border: "1px solid #F1F3F6" ,padding:8,marginLeft:10,fontSize:'12px'}}> Pre-School Teaching +</div>
           

           </div>
        </Grid>
        <Grid item xs={4}>
          <img src={bg} style={{maxWidth:'100%'}}/>
        </Grid>
      </Grid>
    </div>




    <Ffff/>
    </>
      
    )
  }

