import React, { useState } from 'react'
import axios from 'axios'
import {AppBar , makeStyles, Toolbar, Typography} from '@material-ui/core';
import { Link } from '@reach/router';
import imageSample from '../imgs/MernLogo.PNG';


const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black',
        display:"inline-block",
    
    },
    container: {
        justifyContent:'center',
        marginRight:"50px",
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    },
    logo:{
        width:'60px',
        // marginRight:'600px',
        float:"left",
        padding:"4px",
        paddingLeft:"50px"
        // marginLeft:"50px"
    }
});

const Header = () => {
    const [user, setUser] = useState([]);
    const classes = useStyles();
    const onLogoutHandler=()=>{
         axios.get("http://localhost:8000/api/logout")
            .then(res => {
            setUser(res.data);
            console.log(res.data);
    })}
    return (
        <AppBar className={classes.component}>
            <img src={imageSample} alt="picture" className={classes.logo}></img>
            <Toolbar className={classes.container}>
               
                <Link to="/" className={classes.link}> <Typography>HOME</Typography></Link>
                <Link to="/about"><Typography>ABOUT</Typography></Link>
                <Typography>CONTACT</Typography>
                <Link to="/login" onClick={onLogoutHandler}><Typography>LOGOUT</Typography></Link>
            </Toolbar>

        </AppBar>

    )
}

export default Header;