import React, { Component } from 'react';
import { connect } from 'react-redux';
import { partnersActions } from '../../actions/partners';
import { 
    Grid, 
    Typography, 
    LinearProgress, 
    Card, 
    Tooltip,
    Button 
} from '@material-ui/core';
import moment from 'moment';
import { 
    SearchTable, 
    PartnersTable, 
    ExportTable, 
    DateFilter 
} from '../DataTable';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import tableColumns from './tableColumns';
import './partners.style.css';
import searchPartners from './search.partners';
import { Redirect } from 'react-router-dom';

class Partners extends Component {
    constructor(){
        super();
        this.state = {
            searchField: '',
            dateFilter: {},
            myPrt: false
        }
    }

    handleSearch = (e) => this.setState({searchField: e.target.value});

    handleMyPrt = () => this.setState({myPrt: !this.state.myPrt});

    handleRmDateFilter = () => this.setState({ dateFilter: {} });

    handleDateFilter = (e) => {
        const mStart = moment(
            document.getElementById('start-date-picker-inline').value, 
            'DD/MM/YYYY'
        );
        const mEnd = moment(
            document.getElementById('end-date-picker-inline').value, 
            'DD/MM/YYYY'
        );
        
        this.setState({dateFilter: { start: mStart, end: mEnd} });
    }

    componentDidMount() {
        if(!this.props.partners.partnerList)
            this.props.partnerList();
    }

    render() {
        const { partners, user } = this.props;

        // Filter my partners
        const myPartners = searchPartners.myPartners(user, partners.list, this.state.myPrt);
        // Filter by Register Date
        const filterResults = searchPartners.filter(myPartners, this.state.dateFilter.start, this.state.dateFilter.end);
        // search
        const searchResults = searchPartners.search(partners.list, filterResults, this.state.searchField);
        // data to use on the table
        const filteredData = searchResults ? searchResults : filterResults ? filterResults : {};

        let tableSubTitle = partners.list ? tableColumns.subtitle(partners.list, this.state) : "";

        return (
            <Grid item xs={12}>
                { partners.error &&
                    <Redirect to={ {pathname: "/login", state:{loggedOut: true}} } />
                }
                <Grid item xs={12}>
                    { partners.loading && 
                        <Grid item xs={12}> 
                            <LinearProgress />
                            <Typography align="center">Loading...</Typography>
                        </Grid>
                    }
                    
                    { partners.list &&
                    <Card className="sv-container-pd">
                        <Grid 
                            container 
                            spacing={2} 
                            justify="center" 
                            alignItems="center" 
                            className="sv-table-container">
                            
                            <Grid item md={10} xs={12}>
                                <Grid container justify="flex-start" alignItems="center" >
                                    <Grid item md={4} xs={12}>

                                        <SearchTable onChange={ this.handleSearch }/>

                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        
                                        <DateFilter 
                                            addFilterFn={ this.handleDateFilter }
                                            rmFilterFn={ this.handleRmDateFilter } />

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <Tooltip title={ this.state.myPrt ? "Show All" : "My Partners" }>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={ this.handleMyPrt } >
                                        
                                        { this.state.myPrt ? <PeopleAltIcon /> : <PersonIcon /> }

                                    </Button>
                                </Tooltip>
                                
                                <ExportTable csvData={ tableColumns.exportData(filteredData) } fileName={ 'Partners' } />
                            </Grid>

                            <Grid 
                                container 
                                spacing={2} 
                                justify="center" 
                                alignItems="center">
                                    <Grid item xs={12}>
                                        
                                        <PartnersTable 
                                            title="Partners"
                                            subHeader={ tableSubTitle }
                                            columns={ tableColumns.columns } 
                                            data={ filteredData } />
                                            
                                    </Grid>
                            </Grid> 
                        </Grid> 
                    </Card>
                    }
                </Grid>                
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    const { partners, auth } = state;
    const { user } = auth;
    return { partners, user };
}

const actionCreators = {
    partnerList: partnersActions.partnerList
}
const connectedPartners = connect(mapStateToProps, actionCreators)(Partners);
export { connectedPartners as Partners };