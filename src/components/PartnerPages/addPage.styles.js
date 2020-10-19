import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFrow: 1,
        padding: '15px'
    },
    form: {
        width: '60%',
        minHeight: '450px',
        margin: 'auto',
        [theme.breakpoints.down('sm') ] : {
            width: '100%'
        }
    },
    select: {
        width: '100%',
        fontSize: '1rem',
        color: '#000'
    },
    inputs: {
        width: '100%',
        fontSize: '1rem',
        padding: '15px 0',
        [theme.breakpoints.down('sm') ] : {
            width: '100%',
        }
    },
    inputsWrap: {
        margin: '15px 0'
    },
    pageWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2rem'
    },
    pageItem: {
        flex: '0 50%',
        [theme.breakpoints.down('sm') ] : {
            flex: '0 100%',
        }
    },
    qrcode : {
        width: '200px',
        height: '200px',
    },
    button: {
        width: 'auto',
        float: 'right',
        [theme.breakpoints.down('sm') ] : {
            width: '100%',
            margin: '15px auto',
            float: 'left',
        }
    }
  }));