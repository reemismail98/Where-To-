


import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import Header from '../Header';
import myImage from '../../imgs/Banner4.jpg';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${myImage})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <>
        <Header/>
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Where to ?</Typography>
                <Typography variant="h5" className={classes.text}>
                    We are here at this website provide a service to help other people to know where 
                    to travel around the world by sharing other people experience here , giving the 
                    travelers the necessary knowledge to decide where to travel and the ability to share 
                    their travel experience to other people.
                </Typography>
            </Box>
        </Box>
        </>
    )
}

export default About;