


import { Box, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link,navigate } from '@reach/router';
import React,{useState,useEffect} from 'react'
import Header from '../Header';
import axios from 'axios'
import CardMedia from '@material-ui/core/CardMedia';


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
               
                console.log("Post information: " +res.data);
                setPost(res.data)})
    },[])
    // console.log("post info:" + post.user.name)
    // console.log("userInformation: 2 xx" + props.someId)


    // useEffect(() => {
    //     console.log("user infromation")
    //     axios.get("http://localhost:8000/api/users/" + props.id)
    //         .then(res => {
    //             console.log("userInformation: "+res.data)
    //             setUser(res.data)})

    // },[])





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
            {/* <Typography className={classes.image}>{post.picture}</Typography> */}
            <CardMedia  className={classes.image}  image={post.picture} ></CardMedia>
            <Box className={classes.icons}>
                {/* {   props.someId == post.user.id &&
                    <>
                      <Link to={"/update/"+post._id}><Edit className={classes.icon} color="primary"/></Link>
                      <button  onClick={(e) => deletePost(post._id)}><Delete className={classes.icon} color="primary"/></button>
                    </>
                } */}
              
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                {/* <Typography>{post.category.name}</Typography> */}
                <Typography style={{marginLeft:"auto"}}>{post.createdAt}</Typography>
            </Box>
                <Typography>{post.description}</Typography>
        </Box>
        </>
    )
}


export default DetailView;

