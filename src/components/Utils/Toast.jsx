import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    success: {
        width: '40%',
        height: '50px',
        borderRadius: '7px',
        bottom: '40px',
        backgroundColor: '#4caf50',
        [theme.breakpoints.down('sm') ] : {
            width: '90%',
            margin: 'auto'
        }
    },
    fail: {
        width: '40%',
        height: '50px',
        borderRadius: '7px',
        bottom: '40px',
        backgroundColor: '#f44336',
        [theme.breakpoints.down('sm') ] : {
            width: '90%',
            margin: 'auto'
        }
    }
  }));
  


export const Toast = (props) => {
    const classes = useStyles();
    const message = (props.type && props.type === 'error') ? 
        "Error creating Client Page and QR Code." : 
        "Client Page and QR Code created!";

    return(
        <div className={classes.root}>
            <Snackbar 
                className={ props.type ==='error'? classes.fail : classes.success}
                open={props.open} 
                autoHideDuration={6000} 
                onClose={props.onClose} >
                    <React.Fragment>
                        <DoneIcon/>  
                        {message}     
                    </React.Fragment>
            </Snackbar>
        </div>
    )
};