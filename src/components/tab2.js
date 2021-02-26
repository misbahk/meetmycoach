import React from 'react';
import PropTypes from 'prop-types';
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

import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import anz from '../Images/anz.jpg';
import tg from '../Images/toptag.svg';

import Tabcomponent2 from './tabcompo2';
import Tabcomponent3 from './tabcompo3';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { red } from '@material-ui/core/colors';
import { green, orange } from '@material-ui/core/colors';



const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FF8E31',
    },
  },
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  save:{
    background:"",
    borderRadius: "5px",
    opacity: 1,
    color:' #FF8E31',
    border: "1px solid #FF8E31",
    float:'right',
    
  
    // padding: theme.spacing(1),
    
    },

    

    indicator:{
      // indicatorColor:secondary,
      textColor:'#FF8E31',
      float:'right',
      color:"#858A9A",

    },
}));

export default function Tabform1() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');
  const [header, setHead] = React.useState('327 coaching jobs available');
  const [para,setPara]=React.useState('Jobs available in Mental Fitness and Mental Health based on your profile')


  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue=="one"){
        setHead('327 coaching jobs available');
        setPara('Jobs available in Mental Fitness and Mental Health based on your profile');
    }
    if(newValue=="two"){
        setHead('24 applied jobs');
        setPara('Track you applied jobs and communicate with employers');
    }
    if(newValue=="three"){
        setHead('18 jobs saved by you');
        setPara('Jobs that you find interesting or you may have saved to apply later');
    }
  };

  return (
    <div className={classes.root}>
      
        <h1 style={{marginLeft:'25px',textAlign:'left'}}>{header}</h1>
      
        <p style={{marginLeft:'25px',textAlign:'left'}}>{para}</p>
      
     <ThemeProvider  theme={theme}>
        <Tabs value={value}  style={{float:'right'}} indicatorColor="secondary" textColor="secondary" onChange={handleChange} aria-label="wrapped label tabs example">
         
        
        
          <Tab
            value="one"
            label="BASIC DETAILS"
            
            {...a11yProps('one')}
          />
          <Tab value="two" label="PROFILE SUMMARY" {...a11yProps('two')} />
          <Tab value="three" label="SKILLS & CAPABILITIES" {...a11yProps('three')} />
          {/* <Tab value="four" label="SELECT PLAN" {...a11yProps('four')} /> */}
        </Tabs>
        </ThemeProvider>
     
      <TabPanel value={value} index="one">
          <div style={{marginTop:'30px'}}>
            <Compo1/>
          </div>
   






        
      </TabPanel> 
       <TabPanel value={value} index="two">
       <div style={{marginTop:'30px'}}>
          <Tabcomponent2/>
       </div>
     
      
       
      </TabPanel> 
       <TabPanel value={value} index="three">
       <div style={{marginTop:'30px'}}>
         <Tabcomponent3/>
         </div>
       
      </TabPanel>
      <TabPanel value={value} index="four">
        
      </TabPanel>
    </div>
  );
}

function Cardpg1() {
  return(
    <>
        <Card>
          <CardActionArea>
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
                <Grid item md={1}><label style={{color:'#FF8E31'}}>New</label> </Grid>
                <Grid item md={1}><img src={tg}/></Grid>
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
                <Grid item md={1}>Today</Grid>
                
              </Grid>
            </Grid>
          </Grid>
          </CardActionArea>
          </Card>
    </>
  )
  
}

function Savealert(){
  const classes = useStyles();
  return(
    <>
      <div>
        <Button className={classes.save}>SAVE ALERT</Button>

      </div>
    </>
  )
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

function Searc() {
  const classes = useStyles();

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


function Compo1(){
  return(
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

      <Grid container style={{marginTop:'40px'}}>
        <Grid item md={2}  >
          <Grid container style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px"}}>
          <div style={{margin:'10px'}}>CREATE JOB ALERT</div>
          <div style={{fontSize:'10px',margin:'10px'}}>Create a job alert now and never miss a job</div>
          <TextField 
          style={{backgroundColor:'white',margin:'10px'}}
          id="outlined-basic" label="Enter text" variant="outlined" size="small" />
          <div style={{margin:'10px'}}> <Savealert/></div>
          </Grid>


          <Grid container direction="row" style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px",marginTop:'20px'}}>

                     <Grid item md={12}>
                        <div style={{margin:'10px'}}>My JOB FEED</div>
                      <div style={{margin:'10px',color:'#006AB1'}}>Mental Fitness</div>
                      <div style={{marginLeft:'10px',color:'#006AB1'}}>Mental Health</div>
                    
                     <Divider variant="middle"/>
                     
                     
                      <div style={{margin:'10px',color:'#006AB1'}}>Recommended</div>
                      </Grid>

                     
                      

            
          </Grid>


          <Grid container direction="row" style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px",marginTop:'20px'}}>

                     <Grid item md={12}>
                        <div style={{margin:'10px'}}>FILTER BY CATEGORY</div>
                        <FormControl component="fieldset" style={{margin:'10px'}} >
       
        <FormGroup>
          <FormControlLabel
            control={<Checkbox   name="Agile" />}
            label="Agile"
          />
          <FormControlLabel
            control={<Checkbox name="Tech & Programming" />}
            label="Tech & Programming"
          />
          <FormControlLabel
            control={<Checkbox  name="UX & Design" />}
            label="UX & Design"
          />
           <FormControlLabel
            control={<Checkbox  name="Bussiness" />}
            label="Bussiness"
          />
            <FormControlLabel
            control={<Checkbox  name="Life" />}
            label="life"
          />
           <FormControlLabel
            control={<Checkbox  name="career" />}
            label="career"
          />
           <FormControlLabel
            control={<Checkbox  name="Art & Craft" />}
            label="Art & Craft"
          />
           <FormControlLabel
            control={<Checkbox  name="Maths" />}
            label="Maths"
          />
           <FormControlLabel
            control={<Checkbox  name="English" />}
            label="English"
          />
        </FormGroup>
       
      </FormControl>
                      
                      </Grid>

                     
                      

            
          </Grid>

          <Grid container direction="row" style={{background:" #F8FBFF 0% 0% no-repeat padding-box",
                     border: "0.5px solid #2DABFF30",borderRadius: "10px",marginTop:'20px'}}>

                     <Grid item md={12}>
                     <FormControl component="fieldset" style={{margin:'10px'}} >
       
       <FormGroup >
         <FormControlLabel
           control={<Checkbox  size="small" name="Full time" />}
           label="Full time"
         />
         <FormControlLabel
           control={<Checkbox name="Contract" />}
           label="Contract"
         />
         <FormControlLabel
           control={<Checkbox  name="Part time" />}
           label="Part time"
         />
          
          
       </FormGroup>
      
     </FormControl>
                        
                      </Grid>

                     
                      

            
          </Grid>


        </Grid>

        <Grid item md={8} style={{marginLeft:'30px'}}>
         <Cardpg1/><br/>
         <Cardpg1/><br/>
         <Cardpg1/><br/>
         <Cardpg1/><br/>
         <Cardpg1/>

          {/* add space bewtwwn anz container */}

          
                  {/* third bx */}

          


          


        </Grid>
      </Grid>
    </>
  )
}