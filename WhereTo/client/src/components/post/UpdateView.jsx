
import { Box, makeStyles,FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import React,{ useState, useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';
import Cookies from 'js-cookie'
import { navigate } from '@reach/router';
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
    headthree:{
        marginLeft:"30px"
    },
    button:{
        marginLeft:"30px"
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

const UpdateView = (props) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [picture,setPicture] = useState('');
    const [category,setCategory] = useState('');
    const [user,setUser] = useState('');
    const [categories,setCategories]=useState([])



    useEffect(()=>{
        axios.get('http://localhost:8000/api/posts/'+ props.id)
        .then(res=>{
            console.log(res)
            console.log(res.data.title)

            setTitle(res.data.title);
            setDescription(res.data.description);
            setPicture(res.data.picture);
            setCategory(res.data.category);
            setUser(res.data.user);
            setCategories([...categories, res.data.category])

        })
    },[])
    
    const updatePost = (e) => {
        e.preventDefault()
        let user =  Cookies.get('userID')
        axios.put('http://localhost:8000/api/posts/'+ props.id, {
          title,
          description,
          picture,
          user,
          category,
          
        })
        .then((res) => console.log(res) & navigate("/"))
        .catch(err=>console.log(err))}

    const classes = useStyle();
    const url = 'https://saurusly.com/wp-content/uploads/2019/07/360-3606815_slider-image-study-abroad-consultant.png.jpg';
    return (
        <>
        <Header/>
        <img src={url} alt="Banner" className={classes.image}/>

        <Box className={classes.container}>
        <form onSubmit={updatePost} className={classes.form}>
                {/* <Label>add a picture </Label> */}
                <br></br>
                {/* <input type="file" accept=".jpg" onChange={(e)=>setPicture(e.target.files[0])}/>  */}
                <h3 >Add a url : </h3>
                <input type="text"  onChange={(e)=>setPicture(e.target.value)} value={picture} className={classes.headthree}/>
                <h3 className={classes.headthree}>Title : </h3>
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="title" className={classes.textField} name="title" value={title}/>
              
                <select onClick={(e)=>setCategory(e.target.value)}>
                    {categories.map((cat, i)=>
                        <option value= {cat._id}>{cat.name}</option>
                    )}
                    
                </select>
               
                <input type="submit" variant="contained" color="primary"  value="Update" className={classes.button}/>
            </form>
            <br/> <br/>
            <br/>

            <h3>Description:</h3>
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

export default UpdateView