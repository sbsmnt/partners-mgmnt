import React, { memo, useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    Avatar, 
    Link
} from '@material-ui/core';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useStyles from './apptopbar.style';
import logo from '../../image/logo.svg';
import Logout from '../../helpers/logout';

const areEqual = (prevProps, nextProps) => true;

export const AppTopBar = memo(props => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const logged = props.user ? true : false;

    const avatar = (name) => {
        var str = name;
        var matches = str.match(/\b(\w)/g);
        var acronym = matches.join('');

        return <Avatar className={ classes.orange }>{ acronym }</Avatar>
    };

    const handleMenu = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const handleLogout = () => Logout();
    
    
    return (
        <div className={ `${classes.root} sv-splash-bg` }>
            <AppBar position="static" color="transparent" >
                <Toolbar variant="dense">
                    <div className={ classes.logo }>
                        <Link href="/">
                            <img src={ logo } alt="" className={ classes.img } />
                        </Link>
                    </div>
                    
                    { logged && 
                    <div className={ classes.profile }>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleMenu }
                            color="inherit">

                            { avatar(props.user.name) }

                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorEl }
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={ open }
                            onClose={ handleClose } >

                            <MenuItem onClick={ handleClose }>
                                <AccountCircle />
                                <strong>{ props.user.name }</strong>
                            </MenuItem>
                            
                            <MenuItem onClick={ handleLogout }>
                                <PowerSettingsNewRoundedIcon />
                                <p>Log Out</p>
                            </MenuItem>
                        </Menu>
                    </div>}
                </Toolbar>
            </AppBar>
        </div>
    );
}, areEqual); 
