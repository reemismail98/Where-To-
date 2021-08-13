

import { Grid } from '@material-ui/core';
import { Link } from '@reach/router';
import React from 'react';
import Post from './Post';


const Posts = () => {
    let posts = [1]
    return (
        posts.map(post=>(
            <Grid item lg={3} sm={4} xs={12}>
                <Link to="/detail" style={{textDecoration:"none",color:"inherit"}}>
                    <Post/>
                </Link>
            </Grid> 
        ))
        
    )
}

export default Posts