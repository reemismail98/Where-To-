


import { Button, makeStyles, Table, TableCell, TableHead ,TableRow , TableBody } from '@material-ui/core';
import { Link } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';



const useStyles = makeStyles({
    create:{
        margin: 20,
        width: '85%',
        background: '#6495ED',
        color: '#fff',
        textDecoration: 'none'
    },
    table:{
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    link:{
        textDecoration:"none",
        color:"inherit"
    }
})






const Categories = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/category")
        .then(res=> setCategories(res.data))
        .catch(err=>console.log(err))
    })
    
    const classes = useStyles();
    return (
        <>
        <Link to="/create" className={classes.link}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map((category ,i)=>(
                        <TableRow key={i}>
                            <TableCell>{category.name}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

        </Table>
        </>
    )
}

export default Categories;