import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Tooltip from '@material-ui/core/Tooltip';

import MomentUtils from '@date-io/moment';

import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    date: {
        marginLeft: '10px',
        marginRight: '10px',
        width: '24%',
        [theme.breakpoints.down('md') ]: {
            width: '137px',
        },
        [theme.breakpoints.down('sm') ]: {
            width: '44%',
            margin: '2rem auto 1rem'
        },
    },
    button: {
        fontSize: '0.8rem',
        backgroundColor: 'rgba(57, 162, 215, 0.1)',
        '&:hover': {
            backgroundColor: 'rgba(57, 162, 215, 0.5)',
        },
        margin: 'auto 5px',
        width: 'auto',
        [theme.breakpoints.down('sm') ]: {
            width: '45%',
            margin: '15px auto'
        }
    }
  }));


export const DateFilter = (props) => {
    const classes = useStyles();
    const [selectedStartDate,  setSelectedDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };

    const handleStartDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <MuiPickersUtilsProvider utils={ MomentUtils } locale={'pt'}>
            <Grid container justify="flex-start" alignItems="center">
                <KeyboardDatePicker
                    className={ classes.date }
                    format="DD/MM/yyyy"
                    margin="normal"
                    id="start-date-picker-inline"
                    label="Date - from:"
                    value={ selectedStartDate }
                    onChange={ handleStartDateChange }
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />

                <KeyboardDatePicker
                    className={ classes.date }
                    format="DD/MM/yyyy"
                    margin="normal"
                    id="end-date-picker-inline"
                    label="Date - until:"
                    value={ selectedEndDate }
                    onChange={ handleEndDateChange }
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />

                <Tooltip title="Filter Registry Date">
                    <Button className={ classes.button } onClick={ props.addFilterFn } >
                        <FindInPageIcon />
                    </Button>
                </Tooltip>
                
                <Tooltip title="Delete Filter">
                    <Button className={ classes.button } onClick={ props.rmFilterFn } >
                        <NotInterestedIcon />
                    </Button>
                </Tooltip>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};