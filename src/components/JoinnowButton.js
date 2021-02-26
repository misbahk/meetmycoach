import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      border:"0",
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function JoinnowButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid item xs={2} >
     
        </Grid>
        <Grid item xs={8} >
          <Paper className={classes.paper}>
              <div class="row">
                  <div class="col-8">
                      <p>Need help in choosing?</p>
                      <p>Email us for any queries. Our team is ready to assist you</p>
                  </div>
                  <div class="col-4">
                  <Button variant="outlined" style={{color:"#73787D", 
                  border:"2px solid #73787D"}}>JOIN NOW</Button>
             
                  </div>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={2} >
 
        </Grid>
      </Grid>
    </div>
  );
}
