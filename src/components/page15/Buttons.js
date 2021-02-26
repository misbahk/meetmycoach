import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor:"#ffff",
    color:"#858A9A"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Buttons() {
  const classes = useStyles();

  return (
    <div>

 
      <div>
        <Button variant="contained" size="small"  className={classes.margin}>
        Mental Health
        </Button>
        <Button variant="contained" size="small"  className={classes.margin}>
        Mental Fitness
        </Button>
 
      </div>
      
    </div>
  );
}
