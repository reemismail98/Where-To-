
import React from 'react';
import {AppBar , makeStyles, Toolbar, Typography} from '@material-ui/core';
import { Link } from '@reach/router';


const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent:'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
});

const Header = () => {
    
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to="/" className={classes.link}> <Typography>HOME</Typography></Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>

        </AppBar>

    )
}

export default Header;