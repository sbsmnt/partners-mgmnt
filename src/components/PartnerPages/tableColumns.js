import React from 'react';
import { IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';


export const tableCols = (detailsOpen) => [
    {
      name: 'UID',
      selector: 'uid',
      sortable: true,
      width: '75px'
    },
    {
        name: 'Nome',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'URL',
        selector: 'url',
        sortable: true,
    },
    {
        name: 'QR Code',
        selector: 'qr_image',
        sortable: true,
        width: '75px',
        cell: row => <div className="sv-m"> 
            <img src={`data:image/png;base64,${row.qr_image}`} alt="Qr code" className="sv-qr-img" />
        </div>
    },
    {
        name: 'Ver Mais',
        selector: 'id',
        width: '75px',
        cell: row =>
            <IconButton 
                aria-label="ver mais"
                id={'page-'+row.id}
                onClick={ () => detailsOpen(row.id) } >
                <VisibilityIcon />
            </IconButton>   
    }
];