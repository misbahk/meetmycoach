import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import ButtonSummary from './ButtonSummary';

const useStyles = makeStyles((theme) => ({


}));

export default function SummaryForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
    
<Grid container direction="row" >

<Grid item xs={6} >
<FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.age}
          name="age"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'age' }}
        >
     
          <option value={10}>Premium Plan (Billed Monthly)</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
     
    
      </FormControl>
      
  

</Grid>

<Grid item xs={6} >

<p style={{fontWeight:"bold"}}>$9.99/mo  </p>
</Grid>

</Grid>

<Grid container direction="row" >

<Grid item xs={12} >

      
<a style={{float:"left", color:"black"}} href="#">Save 20% with annual billing</a>
  
</Grid>
</Grid>

<Grid container direction="row" >

<Grid item xs={6} >

<p> TAX</p>
</Grid>
<Grid item xs={6} >
<p style={{fontWeight:"bold"}}> $3</p>
</Grid>

</Grid>



<Grid container direction="row" >

<Grid item xs={6} >

<p> To be paid now</p>
<p style={{color:"#858A9A"}}> After 30 days: $11.99</p>
</Grid>
<Grid item xs={6} >
<p style={{fontWeight:"bold"}}>$0</p>
</Grid>

</Grid>



    
   
    </div>
  );
}
