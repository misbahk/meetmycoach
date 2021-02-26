import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CreditForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
        <TextField  id="outlined-full-width"  label="Card Number"
          size="small"  placeholder="Enter your Card Number" fullWidth  margin="normal"
          InputLabelProps={{shrink: true, }}  variant="outlined"
        />
        </Grid>
        <Grid item xs={6}>
        <TextField  id="outlined-full-width"  label="Expiry"
          size="small"  placeholder="Enter your Card Number" fullWidth  margin="normal"
          InputLabelProps={{shrink: true, }}  variant="outlined"
        />
        </Grid>
        <Grid item xs={6}>
        <TextField  id="outlined-full-width"  label="CVV"
          size="small"  placeholder="Enter your Card Number" fullWidth  margin="normal"
          InputLabelProps={{shrink: true, }}  variant="outlined"
        />
        </Grid>
 <p style={{fontWeight:"bold"}}>Your transaction is secured with SSL encryption</p>
      </Grid>
    </div>
  );
}
