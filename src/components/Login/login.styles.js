import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const SvButton = withStyles((theme) => ({
	root: {
		color: theme.palette.common.white,
		backgroundColor: '#3daeef',
		'&:hover': {
		backgroundColor: '#30acf3',
		},
	},
}))(Button);

export const LoginTextField = withStyles({

	root: {
		'& label.Mui-focused': {
		color: '#3daeef',
		},
		'& .MuiInput-underline:after': {
		borderBottomColor: '#3daeef',
		}
	},
})(TextField);

export const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	logo: {
        flexGrow: 1,
        width: '50%'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		color: theme.palette.common.white,
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: '#3daeef'
	}
}));