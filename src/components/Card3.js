import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Group32 from '../Images/Group32.svg';

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
 

export default function Card3() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  variant="outlined" style={{padding:"0"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
   <img src={Group32} alt="Group32" />
        </Typography>
        <Typography variant="h5" component="h2">
        Work more closely with other companies
        </Typography>
  
        <Typography variant="body2" component="p">
        Follow everything related to individual topics, <br/>
         projects or teams in their dedicated channels.
        </Typography>
      </CardContent>

    </Card>
  );
}
