


import { Box, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link,navigate } from '@reach/router';
import React,{useState,useEffect} from 'react'
import Header from '../Header';
import axios from 'axios'


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

const DetailView = (props) => {
    const classes = useStyle();
    const url = 'https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg';
    const [post, setPost] = useState({})

    useEffect(() => {
        console.log("use Effect in post detail ")
        axios.get("http://localhost:8000/api/posts/" + props.id)
            .then(res => {
               
                console.log(res.data)
                setPost(res.data)})
    },[])
    const deletePost = (posttId) => {
        console.log(posttId)
        axios.delete('http://localhost:8000/api/posts/' + posttId)
            .then(res => {
                navigate("/")
            })
    }

    return(
        <>
        <Header/>
        <Box className={classes.container}>
            {/* <img src={url} alt="banner" className={classes.image} /> */}
            <Typography className={classes.image}>{post.picture}</Typography>

            <Box className={classes.icons}>
                <Link to="/update"><Edit className={classes.icon} color="primary"/></Link>
                <button  onClick={(e) => deletePost(post._id)}>delete</button>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                {/* <Typography>{post.user.name}</Typography> */}
                <Typography style={{marginLeft:"auto"}}>{post.createdAt}</Typography>
            </Box>
                <Typography>{post.description}</Typography>
        </Box>
        </>
    )
}


export default DetailView;

// import { Box, makeStyles, Typography } from '@material-ui/core';
// import { Delete, Edit } from '@material-ui/icons';
// import { Link, navigate } from '@reach/router';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Header from '../Header';

// const useStyle = makeStyles(theme=>({
//     container:{
//         margin:'50px 100px',
//         [theme.breakpoints.down('md')]: {
//             margin: 0
//         },

//     },
//     image:{
//         width: '100%',
//         height: '50vh',
//         objectFit: 'cover'

//     },
//     icons:{
//         float:'right'
//     },
//     icon:{
//         margin: 5,
//         padding: 5,
//         border: '1px solid #878787',
//         borderRadius: 10
//     },
//     heading: {
//         fontSize: 38,
//         fontWeight: 600,
//         textAlign: 'center',
//         margin: '50px 0 10px 0'
//     },
//     subheading:{
//         color:"#878787",
//         display:"flex",
//         margin:"20px 0",
//         [theme.breakpoints.down('sm')]: {
//             display: 'block',
//         },
//     },

// }));

// const DetailView = (props) => {
//     const[post,setPost]=useState({});
//     const classes = useStyle();
//     const url = 'https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg';
//     useEffect(() => {
//         axios.get("http://localhost:8000/api/posts/" + props.id)
//             .then(res => setPost(res.data))
//     })

//     const deletepost = (postId) => {
//         axios.delete('http://localhost:8000/api/posts/' + postId)
//             .then(res => {
//                 navigate("/")
//             })
//     }

//     return(
//         <>
//         <Header/>
//         <Box className={classes.container}>
//             <img src={url} alt="banner" className={classes.image} />
//             <Box className={classes.icons}>
//                 <Link to="/update"><Edit className={classes.icon} color="primary"/></Link>
//                 <Link  onClick={e => {deletepost(post._id)}} ><Delete className={classes.icon}/></Link>
//             </Box>
//             <Typography className={classes.heading}>{post.title}</Typography>
//             <Box className={classes.subheading}>
//                 <Typography>{post.user}</Typography>
//                 <Typography style={{marginLeft:"auto"}}>{post.createdAt}</Typography>
//             </Box>
//                 <Typography>{post.description}This is a description This is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionriptionThis is a descriptionThis is a description</Typography>
//         </Box>
//         </>
//     )
// }


// export default DetailView;
