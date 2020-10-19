import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright';
import logo from '../../image/logo.svg';
import { SvButton, LoginTextField, useStyles } from './login.styles';

const LoginMaterial = (props) => {
    const classes = useStyles();

    const userError = props.error.username ? props.error.username.valid : true;
    const userErrorMsg = props.error.username  ? props.error.username.msg : '';
    
    const passError = props.error.pass ? props.error.pass.valid : true;
    const passErrorMsg = props.error.pass ? props.error.pass.msg : '';
    

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          
          <div className={classes.paper}>
            <div className={classes.logo}>
              <img src={logo} alt="Logo" className="sv-logo-img-login" />
            </div>
            
            <form className={classes.form} onSubmit={props.onSubmit}>
              <LoginTextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoComplete="username"
                value={props.username}
                onChange={props.onChange}       
                autoFocus
                error={!userError}
                helperText={userErrorMsg}
              />
              <LoginTextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={props.password}
                onChange={props.onChange}
                autoComplete="current-password"
                error={!passError}
                helperText={passErrorMsg}
              />
              <SvButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit} 
                disabled={!passError || !userError} >
                Log In
              </SvButton>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
    );
};

export default LoginMaterial; 