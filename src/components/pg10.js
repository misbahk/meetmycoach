import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Input} from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        opacity: '1' ,
        backgroundColor:'white',
        width:"100%",
      
    },
    redcolor: {
        border: "1px solid red"
    },

    gridInput: {
       padding: theme.spacing(1)
    }


  }));


export default function Page10() {
  const classes = useStyles();

 
  return (
    <div >
           <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" />
     <Grid container direction="row" className={classes.redcolor} >
  
        <Grid item xs={2} className={classes.gridInput}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Title</InputLabel>
        <Select
          native
     
          label="Title"
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
        </Grid>
     
        <Grid item xs={5}  className={classes.gridInput}>
      
        


    
    <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" />


       

        </Grid>
     
        <Grid item xs={5}   className={classes.gridInput}>
        <paper>

        <TextField 
     fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
     </paper>
       
        </Grid>
    
      </Grid>
  
<br/>


      <Grid container direction="row">
  
  <Grid item xs={12} >
  <paper>
  {/* <span class="lni lni-map-marker"
  style={{float:"left", marginRight:"-16px", marginTop:"11px", position:"relative", zIndex:"2", color:"#B0BCC6"}}
  ></span>

  */}
<TextField
fullWidth id="outlined-basic" label="Enter and select your location" variant="outlined" />
</paper>

      </Grid>
   



      </Grid>
      <hr/>
      <Divider />

    </div>
  );
}