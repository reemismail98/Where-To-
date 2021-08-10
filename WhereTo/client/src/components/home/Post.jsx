


import { Box , makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles({
    container:{
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > * ':{
            padding: '0 5px 5px 5px'
        }
    },
    image:{
        height:150,
        width:'100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Post = () => {
    const classes= useStyles();
    const url = "https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg"
    return (
    
        <Box className={classes.container}>
            <img src={url} alt="Post Picture" className={classes.image} ></img>
            <Typography className={classes.textColor}>Germany</Typography>
            <Typography className={classes.heading}>Title of the post</Typography>
            <Typography className={classes.textColor}>Author Name</Typography>
            <Typography className={classes.detail}>This is some description</Typography>
        </Box>
    )
}

export default Post;





//https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg
//https://media.gettyimages.com/vectors/time-to-travel-banner-vector-id901788120