


import { Box , makeStyles, Typography } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CardMedia from '@material-ui/core/CardMedia';



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
    

    const [post,setPost] = useState([]);
    const [pic,setpic] = useState("")
    useEffect(() => {
        axios.get("http://localhost:8000/api/posts" )
            .then(res => {
                setPost(res.data)
                setpic(res.data.picture)
                console.log(res)
            })
    }, [])
    return (
    
        <Box className={classes.container}>
            {post.map((post,index)=>{
            return (
                <>
                {/* <img url={pic} alt="Post Picture" className={classes.image} ></img> */}
                <Typography className={classes.textColor}>{post.category}</Typography>
                <Typography className={classes.heading}>{post.title}</Typography>
                <Typography className={classes.textColor}>{post.name}</Typography>
                {/* <Typography className={classes.textColor}>{post.picture}</Typography> */}
                <CardMedia  className={classes.media}  image={post.picture}></CardMedia>
                <Typography className={classes.detail}>{post.description}</Typography>
                </>
            )})}
           
           
        </Box>
    )
}

export default Post;




//
//https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg
//https://media.gettyimages.com/vectors/time-to-travel-banner-vector-id901788120