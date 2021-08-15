

import CardMedia from '@material-ui/core/CardMedia';
import { Box , makeStyles, Typography } from '@material-ui/core';

import { Grid } from '@material-ui/core';
import { Link } from '@reach/router';
import React,{useEffect,useState} from 'react';
import Post from './Post';
import axios from 'axios';

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



const Posts = (props) => {
   // let posts = [1]
   const classes= useStyles();

    const[posts,setPost]=useState([])
    useEffect(()=>{
        console.log("use effect ")
        axios.get("http://localhost:8000/api/posts/")
        .then(res=> setPost(res.data))
        .catch(err=>console.log(err))
    },[])
    
    return (
        posts.map((post,idx)=>{
            return <Grid  key={idx}>
            {/*   <Grid item lg={3} sm={4} xs={12}> */}
                <Link to={"/detail/"+ post._id} style={{textDecoration:"none",color:"inherit"}}>
                <Typography className={classes.textColor}>{post.category.name}</Typography>
                <Typography className={classes.heading}>{post.title}</Typography>
                <Typography className={classes.textColor}>{post.user.name}</Typography>
                {/* <Typography className={classes.textColor}>{post.picture}</Typography> */}
                <CardMedia  className={classes.media}  image={post.picture}></CardMedia>
                <Typography className={classes.detail}>{post.description}</Typography>
                </Link>
            </Grid> 
        }))
}

export default Posts