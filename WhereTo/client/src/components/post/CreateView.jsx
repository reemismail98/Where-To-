
import { Box, makeStyles,FormControl, InputBase, Button, TextareaAutosize, Input } from '@material-ui/core';
import {AddCircle, Label} from '@material-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import { navigate } from '@reach/router';
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
    form:{
        display:"flex",
        flexDirection:"row",
        marginTop:10
    },
    textField:{
        flex:1,
        margin:"0 30px",
        fontSize: 25
    },
    textarea:{
        width:"100%",
        marginTop:50,
        border:"none",
        fontSize:18,
        '&:focus-visible':{
            outline:'none'
        }
    }
}));




const CreateView = () => {
    const classes = useStyle();
    const url = 'https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg';
    // const [post,setPost] = useState(initialValues)




    // const handleChange =(e)=>{
    //     setPost({...post,[e.target.name] : e.target.value})
    // }

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [picture,setPicture] = useState("");



    const onSubmitHandler = (e) => {
        // e.preventDefault();
        console.log("picture")
        axios.post('http://localhost:8000/api/posts/new', {
            title,
            description,
            picture,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            navigate("/")
    }



    return (
        <>
        <Header/>
        <Box className={classes.container}>
            <img src={url} alt="Banner" className={classes.image}/>
            <form onSubmit={onSubmitHandler} className={classes.form}>
                <Label>add a picture </Label>
                <br></br>
                <input type="file" accept=".jpg" onChange={(e)=>setPicture(e.target.files[0])}/> 
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="title" className={classes.textField} name="title" value={title}/>
                <input type="submit" variant="contained" color="primary"  value="publish" />
            
            </form>
            <TextareaAutosize 
            rowsMin={5}
            placeholder="Tell your Story....."
            className={classes.textarea}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            value={description}/>
        </Box>
        </>
    )
}

export default CreateView