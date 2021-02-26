import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search1 from './searchbar1';
import How from './howitworks';
import Findacoach from './findacoach';
import Joinascoach from './joinascoach';
import Login from './login';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
      },
}));

export default function Navvvv(){
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
        <Typography variant="h6" className={classes.menuButton}>
            Meetmycoach
           
          </Typography>
          <Search1/>
          
            <Grid container
                  spacing={3}
                  justify="flex-end">
                  
             <Grid item><How  /></Grid>
             <Grid item><Findacoach/></Grid> 
             <Grid item><Joinascoach /></Grid>
             <Grid item><Login/></Grid> 
              </Grid>
            


          
        </Toolbar>
      </AppBar>
    </div>
        </>
    )
}