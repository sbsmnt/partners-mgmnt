import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import DataTable from 'react-data-table-component';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        flexGrow: 1,
        padding: '15px'
    },
    appBar: {
        backgroundColor: 'transparent'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export const PartnersTable = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className={classes.root}>
            <DataTable 
                title={props.title}
                subHeader={true}
                subHeaderComponent={props.subHeader}
                columns={props.columns} 
                data={props.data} 
                defaultSortField="users_register_date"
                defaultSortAsc={false}
                fixedHeader={true}
                fixedHeaderScrollHeight="45vh"
                pagination={true} 
                highlightOnHover={true}
                paginationPerPage={10}
                theme={theme.palette.type} />
        </div>
    )
};