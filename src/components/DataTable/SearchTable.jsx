import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, InputBase } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  padding: '5px',
	  background: theme.palette.type === 'dark' ? 'none' : '#fefefe',
	  borderRadius: '7px',
	  marginBottom: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
	search: {
	  position: 'relative',
	  borderRadius: theme.shape.borderRadius,
	  backgroundColor: theme.palette.type === 'dark' ? '#292929' : 'rgba(57, 162, 215, 0.1)',
	  marginRight: theme.spacing(2),
	  marginLeft: 0,
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		width: 'auto',
	  },
	},
	searchIcon: {
	  padding: theme.spacing(0, 2),
	  height: '100%',
	  position: 'absolute',
	  pointerEvents: 'none',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	inputInput: {
	  padding: theme.spacing(1, 1, 1, 0),
	  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		width: '18ch',
		'&:focus': {
		  width: '20ch',
		},
	  },
	},
  }));

export const SearchTable = (props) => {
	const classes = useStyles();

	return (
		<Grid container spacing={2} justify="flex-start" alignItems="flex-start">
			<div className={classes.root}>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
					<SearchRounded fontSize="small" />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}
						onChange={props.onChange}
					/>
				</div>
			</div>
		</Grid>
	);
};