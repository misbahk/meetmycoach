import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
  
      width: 200,
    },
  },



inputbgcolor:{
    backgroundColor:"#F8FBFF"
}

}));

export default function Detailsform() {
  const classes = useStyles();

  return (
      <>
   

    <Grid container direction={'row'}  style={{padding:"1rem"}}  >
       <Grid style={{padding:"3px"}}  item xs={4}>
       <TextField 
    className={classes.inputbgcolor}
       id="outlined-size-small"  variant="outlined"  size="small"
        />
     
       </Grid>
       <Grid  style={{padding:"3px"}}  item xs={4}>
       <TextField  className={classes.inputbgcolor} id="outlined-size-small"  variant="outlined"  size="small"
        />
     
       </Grid>
       <Grid  style={{padding:"3px"}}  item xs={4}>
       <TextField  className={classes.inputbgcolor} id="outlined-size-small"  variant="outlined"  size="small"
        />
     
       </Grid>
     </Grid>
     <br/>
     <Grid container direction={'row'} style={{padding:"5px"}}>
       <Grid    item xs={12}>
       <TextField 
        className={classes.inputbgcolor} fullWidth id="outlined-size-small"  variant="outlined"  size="small"
        />
     
       </Grid>
       
     </Grid>
     <br/>
   
     <hr style={{border:"1px solid #C5C5C5"}}/>
     <br/>

     <Grid container direction={'row'} >
       <Grid   item xs={2}>
     <i class="lni lni-map-marker" ></i>
     
       </Grid>
       <Grid   item xs={10} style={{marginTop:"6px"}}>
       <TextField
        className={classes.inputbgcolor} fullWidth id="outlined-size-small"  variant="outlined"  size="small"
        />
     <br/>

     <TextField style={{marginTop:"3px"}}
      className={classes.inputbgcolor} fullWidth id="outlined-size-small"  variant="outlined"  size="small"
        />
   
       </Grid>
       
     </Grid>

<br/>

<hr style={{border:"1px solid #C5C5C5"}}/>


     <br/>
     <Grid container direction={'row'} >
       <Grid   item xs={2}>
   
     
       </Grid>
       <Grid   item xs={8} >


       <TextField 
className={classes.inputbgcolor}
        fullWidth id="outlined-size-small"  variant="outlined"  size="small"
        />

<TextField style={{marginTop:"3px"}}
className={classes.inputbgcolor}
        fullWidth id="outlined-size-small"  variant="outlined"  size="small"
        />

<TextField style={{marginTop:"3px"}}
className={classes.inputbgcolor}
        fullWidth id="outlined-size-small"  variant="outlined"  size="small"
        />

<TextField style={{marginTop:"3px"}}
className={classes.inputbgcolor}
        fullWidth id="outlined-size-small"  variant="outlined"  size="small"
        />


   </Grid>

   <Grid   item xs={2}>
   
     
   </Grid>
  
       
     </Grid>

<br/>
    
     </>

  );
}





