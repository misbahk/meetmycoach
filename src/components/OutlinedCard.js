import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bell from '../Images/bell.svg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  variant="outlined" style={{padding:"0"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
   <img src={bell} alt="bell" />
        </Typography>
        <Typography variant="h5" component="h2">
        It’s all happening in the channel
        </Typography>
  
        <Typography variant="body2" component="p">
        Follow everything related to individual topics, <br/>
         projects or teams in their dedicated channels.
        </Typography>
      </CardContent>

    </Card>
  );
}


