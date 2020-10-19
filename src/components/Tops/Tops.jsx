import React, { Component } from 'react';
import { connect } from 'react-redux';
import { partnersActions } from '../../actions/partners';
import { Grid } from '@material-ui/core';
import { TopCards, Loading } from '../Utils';


class Tops extends Component {
    componentDidMount() {
        if(!this.props.partners.topList)
            this.props.partnerTop();
    }

    render() {
        const { partners } = this.props;
        
        return (
            <Grid item xs={12}>
                <Grid item xs={12}>
                {partners.loading && <Loading />}
                    <Grid 
                        container 
                        spacing={2} 
                        justify="center" 
                        alignItems="center" 
                        className="sv-table-container">
                        
                        <Grid item xs={12}></Grid>

                    {partners.topList && 
                        <Grid 
                            container 
                            spacing={2} 
                            justify="center" 
                            alignItems="flex-start">
                            
                                <Grid item md={4} xs={12}>
                                    <TopCards 
                                        title="Top 30 days"
                                        sTitle="Partners with the highest lead count of the last 30 days."
                                        listData={partners.topList.month} 
                                        chartType="Bar"/>
                                </Grid>

                                <Grid item md={4} xs={12}>
                                    <TopCards 
                                        title="Top All Time"
                                        sTitle="Partners with the highest lead count of all time."
                                        listData={partners.topList.alltime} 
                                        chartType="Donut"/>
                                </Grid>

                                <Grid item md={4} xs={12}>
                                    <TopCards 
                                        title="Top Cities"
                                        sTitle="Cities with higher lead count."
                                        listData={partners.topList.local} 
                                        chartType="Bubble"/>
                                </Grid>
                            
                        </Grid> 
                    }
                    </Grid> 
                </Grid>
            </Grid>
        );
    }
};

function mapState(state) {
    const { partners } = state;
    return { partners };
};

const actionCreators = {
    partnerTop: partnersActions.partnerTop,
};

const connectedHomePage = connect(mapState, actionCreators)(Tops);
export { connectedHomePage as Tops };