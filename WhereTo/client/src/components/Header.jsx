
import React from 'react';
import {AppBar , makeStyles, Toolbar, Typography} from '@material-ui/core';


const useStyles = makeStyles({});

const Header = () => {
    


    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography>HOME</Typography>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>

        </AppBar>

    )
}

export default Header;