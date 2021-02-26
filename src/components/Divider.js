import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import gloabe from '../Images/gloabe.svg';
import bell from '../Images/bell.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
     <p style={{textAlign:"left", fontSize:"800", fontWeight:"800"}}>A much needed platform <br/> for coaches, built by coaches</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         <img src={bell} alt="bell" style={{backgroundColor:"#ffff"}}/>
          </Avatar>
        </ListItemAvatar>
    
        <ListItemText primary="It’s all happening in the channel" 
        secondary="Follow everything related to individual topics, projects or teams in their dedicated channels." />
          
      </ListItem>
  
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src={gloabe} alt="gloabe" style={{backgroundColor:"#ffff"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="History you can see and search" 
        secondary="Projects end, teams change and Slack saves everything. Rather than trying to remember, easily find what you’re looking for." />
      </ListItem>
 
    </List>
  );
}
