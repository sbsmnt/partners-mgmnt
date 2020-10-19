import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';
import { BarChart } from '../Charts/BarChart';
import { DonutChart } from '../Charts/DonutChart';
import { PolarChart } from '../Charts/PolarChart';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        minHeight: 376,
        [theme.breakpoints.down('sm')]: {
            minHeight: 'auto',
        }
      },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 13,
    },
    pos: {
        marginBottom: 12,
        fontSize: 11,
    },
    uppercase: {
        textTransform: 'capitalize',
    },
}));


export const TopCards = (props) => {
    const classes = useStyles();

    const Chart = () => {
        switch (props.chartType) {
            case 'Bar':
                return <BarChart data={props.listData} />
            case 'Donut':
                return <DonutChart data={props.listData} />
            case 'Bubble':
                return <PolarChart data={props.listData} />
            default:
                break;
        }
    }

    return(
        <Card className={ classes.root }>
            <CardContent>
                <Typography variant="h5" component="h2">
                    { props.title }
                </Typography>
                <Typography className={ classes.pos } color="textSecondary">
                    { props.sTitle }
                </Typography>

                { props.chartType &&  Chart() }
                
                <List className={ classes.root }>
                    { props.listData && props.listData.map( 
                        (item,i) =>  
                            <ListItem key={i}>
                                <ListItemText 
                                    className={ classes.uppercase }
                                    primary={ item.name }
                                    secondary={ item.company ? `${item.company}, ${item.phone}` : '' } />
                                <ListItemSecondaryAction>
                                    { item.lead_nr } Leads
                                </ListItemSecondaryAction>
                            </ListItem>
                        )   
                    }
                </List>
            </CardContent>
        </Card>
    )
};