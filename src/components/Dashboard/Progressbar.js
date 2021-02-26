import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 6,
    borderRadius: 5,
    marginTop:"-0.5rem",
    padding:"0",
    marginBottom:"-0.5rem"
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#FF8E31',
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Progressbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  
      <BorderLinearProgress variant="determinate" value={70} />
    </div>
  );
}
