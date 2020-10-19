import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { 
    Grid, 
    Typography, 
    Button
} from '@material-ui/core';
import Select from 'react-select';
import { useStyles } from './addPage.styles';
import { qrGen } from '../../helpers/qr-code';
import { pagesService } from '../../services/pages';
import { Toast } from '../Utils';
import config from '../../config'


export const AddPage = (props) => {
    const [toast, setToast] = useState({open: false, type: ''});
    const [pageData, setPageData] = useState({
        url: '', 
        qrc: config.qrDummy, 
        name: '', 
        uid: ''
    });

    const classes = useStyles();    
    const options = props.partners;
    const selectOptions = props.partners ? options.map( (val) => ({ 
            value: val.users_node_uid, 
            label: `${val.users_node_uid} | ${val.full_name} | ${val.users_node_mail} | Empresa: ${val.company_name}`,
            data: val.full_name
        })) : [];

    const handleSelectChange = (e) => {
        if (e) {
            // Create URL e QR CODE
            const lpData = qrGen(e.data);
            setPageData({
                url: lpData.page_url, 
                qrc: lpData.qr_code, 
                name: e.data, 
                uid: e.value,
            });
        }
    }

    const handleCreatePage = () => {
        const createData = {
            uid: pageData.uid,
            name: pageData.name,
            url: pageData.url,
            qr_code: pageData.qrc,
            active: 1
        };

        if(pageData.uid > 0){
            pagesService.createPage(createData).then( result => {
                if(result){
                    setToast({open: true, type: 'success'});
                }
                else{
                    setToast({open: true, type: 'error'});
                }
            });
        }
    }

    const toastClose = () => setToast({open: false, type: ''});

    return(
        <Grid 
            id="addPage"
            className="sv-hide"
            container 
            spacing={2} 
            justify="center" 
            alignItems="center">
                
            <Grid item xs={12} className="sv-help-text"> 
                <Typography variant="body2" align="left">
                    To create a Landing Page and QR Code, select the partner from the list
                    searching for <strong>name, id, email</strong>
                </Typography>
                <Typography variant="body2" align="left">
                    A pre-visualization of the Landing Page Url and QR Code is automatically generated.
                </Typography>
                <Typography variant="body2" align="left">
                    <strong>Select CREATE to confirm and create.</strong>
                </Typography>
            </Grid> 

            <Grid item xs={12}>
                <div className={classes.root}>   
                    <form className={classes.form} noValidate autoComplete="off">
                        <div className={classes.inputsWrap}>
                            <Select 
                                onChange={handleSelectChange}
                                className="basic-single"
                                name="partner-uid"
                                options={selectOptions} 
                                isSearchable={true}
                                isClearable={true} 
                                isLoading={!selectOptions.length>0} />
                        </div>
                        <div className={classes.pageWrap}>
                            <div className={classes.pageItem}>
                                <img id="partner-qrc-img" src={pageData.qrc} alt="QR Code" className={classes.qrcode} />
                            </div>
                            <div className={classes.pageItem}>
                                <TextField
                                    className={classes.inputs}
                                    id="page-url"
                                    value={pageData.url}
                                    rowsMax={2}
                                    placeholder="URL"
                                    disabled />
                            </div>
                        </div>

                        <div className={classes.inputsWrap}>
                            <Button 
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={handleCreatePage} >
                                    Create
                            </Button>
                        </div>
                    </form>
                </div>   
            </Grid> 
            
            <Toast 
                open={toast.open} 
                type={toast.type} 
                onClose={toastClose} />
        </Grid> 
    );
};