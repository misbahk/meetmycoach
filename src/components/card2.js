import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gloabe from '../Images/gloabe.svg';

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

export default function Card2() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  variant="outlined" style={{padding:"0"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
   <img src={gloabe} alt="gloabe" />
        </Typography>
        <Typography variant="h5" component="h2">
        History you can see and search
        </Typography>
  
        <Typography variant="body2" component="p">
        Projects end, teams change and Slack saves everything. Rather than trying to remember, easily find what you’re looking for.
        </Typography>
      </CardContent>

    </Card>
  );
}
