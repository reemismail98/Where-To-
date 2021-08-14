
import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Header from '../Header';
import Banner from './Banner';
import Categories from './Categories';
import Posts from './Posts';
import Cookies from 'js-cookie'
import { Redirect } from '@reach/router';


const Home = () => {
    return (
        <>{Cookies.get('userID')=== undefined?
    
    <Redirect to='/login' noThrow/>
    :

    <>
        <Header/>
        <Banner />
        <Grid container>
            <Grid item lg={2} xs={12} sm={2}>
                <Categories />
            </Grid>
            <Grid  container item lg={10} xs={12} sm={10}>  
                <Posts />
            </Grid>
            
            
            
        </Grid>
        </>
    }
        
        </>
    )
}

export default Home;