import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import Tooltip from '@material-ui/core/Tooltip';
import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button from '@material-ui/core/Button';


export const ExportTable = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const currentDate = new Date(Date.now()).toLocaleString().split(',')[0];

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { 
            Sheets: { 'data': ws }, 
            SheetNames: ['data'] 
        };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + '_' + currentDate + fileExtension);
    }

    return (
        <Tooltip title="Export Results to Excel">
            <Button 
                variant="contained" 
                color="primary" 
                onClick={ () => exportToCSV(csvData, fileName) }
                className="sv-right">
                    <GetAppIcon />
            </Button>
        </Tooltip>
    )
};