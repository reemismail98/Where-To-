


import { Button, makeStyles, Table, TableCell, TableHead ,TableRow , TableBody } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    create:{
        margin:20,
        background:"6495ED",
        color:"#fff",
        width:150
    }
})




const Categories = () => {
    
    const classes = useStyles();
    return (
        <>
        <Button variant="contained" className={classes.create}>Create Blog</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>France</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Germany</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Italy</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Japan</TableCell>
                </TableRow>
            </TableBody>

        </Table>
        </>
    )
}

export default Categories;