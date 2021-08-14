


import { Box, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from '@reach/router';
import React from 'react'
import Header from '../Header';

const useStyle = makeStyles(theme=>({
    container:{
        margin:'50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },

    },
    image:{
        width: '100%',
        height: '50vh',
        objectFit: 'cover'

    },
    icons:{
        float:'right'
    },
    icon:{
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading:{
        color:"#878787",
        display:"flex",
        margin:"20px 0",
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },

}));

const DetailView = () => {
    const classes = useStyle();
    const url = 'https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg';
    return(
        <>
        <Header/>
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to="/update"><Edit className={classes.icon} color="primary"/></Link>
                <Delete className={classes.icon}/>
            </Box>
            <Typography className={classes.heading}>Title of the blog</Typography>
            <Box className={classes.subheading}>
                <Typography>Author:the author name</Typography>
                <Typography style={{marginLeft:"auto"}}>date:21.22.120</Typography>
            </Box>
                <Typography>This is a description This is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionriptionThis is a descriptionThis is a description</Typography>
        </Box>
        </>
    )
}


export default DetailView;
