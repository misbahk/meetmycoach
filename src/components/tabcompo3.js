import React from 'react';
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

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import anz from '../Images/anz.jpg';
import tg from '../Images/toptag.svg';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';


function  Cardpg3() {
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
                <Grid item md={1}><label style={{color:'#FF8E31'}}></label> </Grid>
                <Grid item md={1}><div style={{textDecoration:'underline'}}>Remove</div></Grid>
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

    </>
  )
  
}



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



export default function Tabcomponent3() {
  
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

      <Grid container style={{marginTop:'20px'}}>

        <Grid item md={8}>
          <Cardpg3/><br/>
          <Cardpg3/><br/>
          <Cardpg3/><br/>
          <Cardpg3/><br/>

          {/* add space bewtwwn anz container */}

         

                  {/* third bx */}

         

          

         
        

           


          



          
        </Grid>
        
      </Grid>


      


    </>

  )
}