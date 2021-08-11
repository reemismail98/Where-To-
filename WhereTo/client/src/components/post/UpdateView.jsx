
import { Box, makeStyles,FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
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

const UpdateView = () => {
    const classes = useStyle();
    const url = 'https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg';
    return (
        <Box className={classes.container}>
            <img src={url} alt="Banner" className={classes.image}/>
            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>
                <InputBase placeholder="title" className={classes.textField}/>
                <Button variant="contained" color="primary">Update</Button>
            </FormControl>
            <TextareaAutosize 
            rowsMin={5}
            placeholder="Tell your Story....."
            className={classes.textarea}/>

        </Box>
    )
}

export default UpdateView