


import { Button, makeStyles, Table, TableCell, TableHead ,TableRow , TableBody } from '@material-ui/core';
import React from 'react';
import {categories} from '../../constants/data'

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
    }
})




const Categories = () => {
    
    const classes = useStyles();
    return (
        <>
        <Button variant="contained" className={classes.create}>Create Blog</Button>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category =>(
                        <TableRow>
                            <TableCell>{category}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

        </Table>
        </>
    )
}

export default Categories;