import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

function Navbar() {
    return (
        <AppBar position="fixed">
            <Toolbar>
        <IconButton edge="start">
            <MenuIcon/>
        </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
