import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OutlinedCard from './OutlinedCard';
import Card2 from './card2';
import Card3 from './Card3';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <OutlinedCard/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Card2/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Card3/>
          </Paper>
        </Grid>
      </Grid>
     
 
    </div>
  );
}
