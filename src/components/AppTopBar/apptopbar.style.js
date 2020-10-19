import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    logo: {
      flexGrow: 1,
    },
    img: {
      maxWidth: '90px',
    },
    appBar: {
      backgroundColor: 'transparent'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: theme.palette.common.white
    },
    profile: {
      float: 'right'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
}));

export default useStyles;
  