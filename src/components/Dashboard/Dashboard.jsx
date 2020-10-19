import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Paper, Tabs, Tab } from '@material-ui/core';
import { AppTopBar } from '../AppTopBar/AppTopBar';
import DashboardProvider from '../DashboardProvider';


export const Dashboard = () => {
    const [view, setview] = useState({ type: '', indx: 0 });
    const { user } = useSelector(state => state.auth);
    
    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 1:
                setview({type: 'cli', indx: newValue})    
                break;
            case 2:
                setview({type: 'pages', indx: newValue})
                break;
            default:
                setview({type: '', indx: 0})
                break;
        }
    }


    return (
        <div>
            <AppTopBar user={user} />

            <Container className="mt-5" maxWidth="xl" >
                <Grid container spacing={2} justify="center" alignItems="flex-start" className="sv-m">
                    <Paper square>
                        <Tabs
                            value={ view.indx }
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={ handleChange }
                            aria-label="tabs"
                            centered >

                            <Tab label="Dashboard" />
                            <Tab label="Partners" />
                            <Tab label="Partners Pages" />  
                        </Tabs>
                    </Paper>
                </Grid>

                <Grid className="sv-mt-15" container spacing={4} justify="center" alignItems="center">
                    <DashboardProvider type={ view.type } />
                </Grid>
            </Container>
        </div>
    )
};