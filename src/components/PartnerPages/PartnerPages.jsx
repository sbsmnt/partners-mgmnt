import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pagesActions } from '../../actions/pages';
import { partnersActions } from '../../actions/partners';
import { 
    Grid, 
    Typography, 
    Card, 
    Button, 
    Fade
} from '@material-ui/core';
import { SearchTable, PartnersTable } from '../DataTable';
import { AddPage } from './AddPage';
import { ModalDetails } from '../Utils';
import { tableCols } from './tableColumns';
import './pages.style.css';
import { Loading } from '../Utils';


class PartnerPages extends Component {
    constructor(){
        super();
        this.state = {
            searchField: '',
            addPage: false,
            details: { open: false } 
        }
    }
    
    handleSearch = (e) => this.setState({searchField: e.target.value});
    
    detailsOpen = (pageId) => {
        if(this.props.pages.items){
            const find = this.props.pages.items.find( item => item.id === pageId);
            this.setState({details: {open: true, content: find}});
        }
    }

    detailsClose = () => this.setState({details: {open: false}});

    handleAdd = () => {
        this.setState({addPage: !this.state.addPage})
        // get partners list
        if (!this.props.partners.list)
            this.props.partnerList();
    }
    
    componentDidMount() {
        this.props.pagesList();
    }

    render() {
        const { pages, partners } = this.props;
        const columns = tableCols( this.detailsOpen );

        const searchResults = pages.items ? pages.items.filter(page =>{
            return JSON.stringify(page).toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        }) : {};
        
        const filteredData = pages.items && searchResults ? searchResults : {};
        
        return (
            <Grid item xs={12}>
                <Grid item xs={12}>
                    { pages.loading && <Loading /> }

                    { pages.error &&
                        <Grid item xs={12}>
                            <Typography align="center">Oops! Something went wrong...</Typography>
                        </Grid>
                    }

                    { pages.items &&
                    <Card className="sv-container-pd">
                        <Grid 
                            container 
                            spacing={2} 
                            justify="center" 
                            alignItems="center" 
                            className="sv-table-container">
                            
                            <Grid item md={10} xs={12}>
                                <Grid container justify="flex-start" alignItems="center">
                                    <Grid item md={3} xs={12}>
                                        <SearchTable onChange={ this.handleSearch }/>
                                    </Grid>
                                    <Grid item md={9} xs={12}>
                                        <Button 
                                            className="sv-add-btn"
                                            variant="contained"
                                            color={ this.state.addPage ? "secondary" : "primary" }
                                            onClick={ this.handleAdd } >
                                                { this.state.addPage ? "Cancel" : "Create Page" }
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item md={2} xs={12}></Grid> 

                            { !this.state.addPage &&
                                <Fade in={ !this.state.addPage }>
                                    <Grid 
                                        id="listPages"
                                        container 
                                        spacing={2} 
                                        justify="center" 
                                        alignItems="center">
                                            <Grid item xs={12}>   
                                                
                                                <PartnersTable 
                                                    title="Partners Pages" 
                                                    columns={ columns } 
                                                    data={ filteredData } />
                                            </Grid> 
                                    </Grid>
                                </Fade>
                            }

                            { this.state.addPage &&
                                <Fade in={ this.state.addPage } >
                                    <AddPage 
                                        onSubmit={ this.handleCreatePage }
                                        partners={ partners.list } />
                                </Fade>
                            }
                        </Grid> 
                    </Card>
                    }
                </Grid>

                <ModalDetails
                    open={ this.state.details.open ? this.state.details.open : false }
                    onClose={ this.detailsClose }
                    content={ this.state.details.content ? this.state.details.content : {} }
                 /> 
            </Grid>  
        );
    }
};

function mapState(state) {
    const { pages, partners } = state;
    return { pages, partners };
};

const actionCreators = {
    pagesList: pagesActions.getPages,
    partnerList: partnersActions.partnerList
};

const connectedPartnerPages = connect(mapState, actionCreators)(PartnerPages);
export { connectedPartnerPages as PartnerPages };