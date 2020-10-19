import React from 'react';
import { Link } from '@material-ui/core';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const columns = [
    {
      name: 'UID',
      selector: 'users_node_uid',
      sortable: true,
      width: '65px'
    },
    {
        name: 'Valid Leads',
        selector: 'leads_nr.valid',
        sortable: true,
        width: '90px'
    },
    {
        name: 'Invalid Leads',
        selector: 'leads_nr.invalid',
        sortable: true,
        width: '90px'
    },
    {
        name: 'Name',
        selector: 'full_name',
        sortable: true,
        width: '200px',
        cell: row => <div className="sv-m">
                <div><strong>{row.full_name}</strong></div>
                <div><small>{row.users_node_mail}</small></div>
                <div>
                    <Link href={'tel:'+row.phone_number} color="inherit" >
                        {row.phone_number}
                    </Link>
                </div>
            </div>
    },
    {
        name: 'Register Date',
        selector: 'users_register_date',
        sortable: true,
        width: '165px'
    },
    {
        name: 'Status',
        selector: 'field_contract_status',
        sortable: true,
        width: '75px'
    },
    {
        name: 'Verified',
        selector: 'verified',
        sortable: true,
        width: '75px',
        center: true,
        cell: row => row.verified && row.verified === "1" ? 
            <VerifiedUserRoundedIcon fontSize="small" color="primary" /> : 
            <CancelRoundedIcon fontSize="small" color="error" /> 
    },
    {
        name: 'TOC Acceptance Date',
        selector: 'field_accept_date',
        sortable: true
    },
    {
        name: 'Category',
        selector: 'category_name',
        sortable: true,
        width: '115px'
    },
    {
        name: 'Company Name',
        selector: 'company_name',
        sortable: true
    },
    {
        name: 'Owner',
        selector: 'user_owner',
        sortable: true
    },
    {
        name: 'Manager',
        selector: 'manager',
        sortable: true
    },
    {
        name: 'Street',
        selector: 'address_street',
        sortable: true,
        cell: row => <div>
            <a 
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.google.com/maps/search/?api=1&query="+
                encodeURI(row.address_street+" "+row.address_postal_code+" "+row.address_local)}>
                {row.address_street}
            </a>
        </div>
    },
    {
        name: 'Postal Code',
        selector: 'address_postal_code',
        sortable: true,
        width: '100px'
    },
    {
        name: 'Local',
        selector: 'address_local',
        sortable: true,
        maxWidth: '160px'
    }
];

const exportData = (filteredData) =>
    filteredData.length >0 ? filteredData.map((val, index) => ({
        uid: val.users_node_uid,
        FullName: val.full_name,
        Phone: val.phone_number,
        Email: val.users_node_mail,
        RegisterDate: val.users_register_date,
        Status: val.field_contract_status,
        Verified: val.verified === "1"?"Sim":"Não",
        AceptanceDate: val.field_accept_date,
        Category: val.category_name,
        CompanyName: val.company_name,
        Owner: val.user_owner,
        Manager: val.manager,
        PostalCode: val.address_postal_code,
        Local: val.address_local,
        ValidLeads: val.leads_nr.valid,
        InvalidLeads: val.leads_nr.invalid
    })
) : {};

const subtitle = (refItems, state) => {
    let tableSubTitle = "";
    if(refItems && state.myPrt) {
        tableSubTitle = `${tableSubTitle} My Partners `;
    }

    if(refItems && state.searchField) {
        tableSubTitle = `${tableSubTitle} "${state.searchField}"`;
    }

    if (refItems && state.dateFilter.start) {
        const startDate = document.getElementById('start-date-picker-inline').value;
        const endDate = document.getElementById('end-date-picker-inline').value;
        tableSubTitle = `${tableSubTitle} [${startDate} - ${endDate}]`
    }
    return tableSubTitle;
}


export default {columns, exportData, subtitle};