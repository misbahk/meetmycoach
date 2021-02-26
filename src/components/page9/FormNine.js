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
import NextButton from '../page8/form'
import Seven from '../page8/Seven';



const useStyles = makeStyles({
    root: {
            borderRadius: '5px',
          opacity:'1' ,
          backgroundColor:'white',
          width:"100%",
      
    },
  });


export default function FormNine() {
  const classes = useStyles();

 
  return (





  <div >





<Grid container direction="row">
 
 <Grid item xs={2} >
 <FormControl variant="outlined"  id="outlined-size-small"  fullWidth 
          variant="outlined"  size="small" className={classes.formControl}>
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

 <Grid item xs={5} >

 
<paper>


<TextField style={{width:"19rem"}}  id="outlined-size-small"  fullWidth 
          variant="outlined"  size="small" label="First Name"  />

</paper>


 </Grid>

 <Grid item xs={5}  >
 <paper>

 <TextField style={{width:"19rem"}}  id="outlined-size-small"  fullWidth 
          variant="outlined"  size="small" label="Last Name" />
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
<TextField  id="outlined-size-small"  fullWidth 
          variant="outlined"  size="small"
 label="Enter and select your location" />
</paper>

</Grid>

</Grid>
<br/>

<FormControl  id="outlined-size-small" fullWidth  style={{  margin: "0 auto"}} 
          variant="outlined"  size="small" >

<InputLabel htmlFor="outlined-age-native-simple">Enter address manually</InputLabel>
<Select style={{width:"15rem", borderRadius:"2rem"}}
   native

   label="Enter address manually"
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

<br/>


      <Grid container direction="row" style={{marginTop:"1rem"}}>
  
      <br/>
        <Grid item xs={12} sm={6}>
        <TextField    label="Apt no/Suite/Flat no"
          id="outlined-size-small"  fullWidth 
          variant="outlined"  size="small"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField   label="Street Name"
          id="outlined-size-small"  fullWidth 
          variant="outlined"  size="small"
        />      
          </Grid>
        </Grid>

<br/>

        <Grid container direction="row">
  
  <Grid item xs={12} >
  <TextField   label="Address Line"
          id="outlined-size-small"  fullWidth 
          variant="outlined"  size="small"
        />      

  </Grid>
  </Grid>
<br/>

<Grid container direction="row">
  
      
  <Grid item xs={12} sm={6}>
  <FormControl variant="outlined" size="small" fullWidth>

<InputLabel htmlFor="outlined-age-native-simple">Country
</InputLabel>
<Select 
    native

    label="Country"
    inputProps={{

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
  <Grid item xs={12} sm={6}>
  <FormControl variant="outlined" size="small" fullWidth>

<InputLabel htmlFor="outlined-age-native-simple">State
</InputLabel>
<Select 
    native

    label="State"
    inputProps={{

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
  </Grid>
<br/>
<Grid container direction="row">
  
      
  <Grid item xs={12} sm={6}>
  <FormControl variant="outlined" size="small" fullWidth>

<InputLabel htmlFor="outlined-age-native-simple">City
</InputLabel>
<Select 
    native

    label="City"
    inputProps={{

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
  <Grid item xs={12} sm={4}>
  <TextField   label="Zip code"
    id="outlined-size-small"  fullWidth 
    variant="outlined"  size="small"
  />      
    </Grid>
  </Grid>




        </div>




  );
}

  
