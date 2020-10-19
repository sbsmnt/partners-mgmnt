import React from 'react';
import { 
    Grid, 
    Typography, 
    LinearProgress, 
} from '@material-ui/core';

export const Loading = () => 
        <Grid item xs={12}> 
            <LinearProgress />
            <Typography align="center">Loading...</Typography>
        </Grid>


