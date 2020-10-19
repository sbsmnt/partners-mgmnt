import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import config from '../../config'


const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
    link: {
        fontSize: '1.1rem',
    },
    qrInfo: {
        textAlign: 'center',
        marginBottom: '15px'
    },
    paper: {
        position: 'absolute',
        width: '80%',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '7px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

function getModalStyle() {
    const top = 20;
    const left = 10;

    return {
        top: `${top}%`,
        left: `${left}%`
    };
}

export const ModalDetails = (props) => {
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();
    const { content } = props;


    const modalBody = (
        <div style={modalStyle} className={classes.paper}>
            <Typography id="simple-modal-title" variant="h4" gutterBottom>{content.name}</Typography>
          <div id="simple-modal-description">
            <div>
                <Typography variant="h6">
                    <strong>UID:</strong> {content.uid}
                </Typography>
            </div>
            <div>
                <Typography variant="body1">
                    <strong>Created:</strong> {content.created}
                </Typography>
            </div>
            <Grid 
                container 
                spacing={2} 
                justify="flex-start" 
                alignItems="center" >
                    <Grid item md={6} xs={12}>
                        <div className="sv-mb">
                            <a 
                                className={classes.link} 
                                href={ `#${content.url}` } 
                                target="_blank" rel="noopener noreferrer">
                                    { config.lpUrl + content.url }
                            </a>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className={classes.qrInfo}>
                            <Typography variant="body1">
                                {`${config.lpUrl}${content.url}.png`}
                            </Typography>
                        </div>   
                        <div>
                            <a href={`data:image/png;base64,${content.qr_image}`} target="_blank" rel="noopener noreferrer" download={`qr-${content.url}.png`}>
                                <img src={`data:image/png;base64,${content.qr_image}`} alt="Qr code" className="sv-qr-img-xl" />
                            </a>
                            <div className={classes.qrInfo}>Click on the image to download</div>
                        </div>
                    </Grid>
            </Grid>
          </div>
        </div>
    );
    
    
    return(
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description" >
        { modalBody }
      </Modal>
    )
};