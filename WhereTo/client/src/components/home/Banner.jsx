

import { makeStyles,Box, Typography } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles({
    image :{
        width: '100%',
        background: `url(${'https://media.gettyimages.com/vectors/time-to-travel-banner-vector-id901788120'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }

})

const Banner = () => {
    const classes= useStyles();
    return (
        // <img src={url}></img>
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Where To Travel !</Typography>
        </Box>


        // <img src={ban} Alt="Banenr"></img>
        
    )
}

export default Banner;