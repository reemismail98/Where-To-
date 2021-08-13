import React, { useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'


import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Cookies from 'js-cookie'

const Login = (props) => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#009999'}
    const btnstyle={margin:'8px 0',backgroundColor:"#009999"}
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email,
            password,
            })
            .then((res) =>{
                console.log(res.data.user._id) 
                Cookies.set("userID",res.data.user._id)
                navigate("/")

            })
            .catch(err=>{
                const errorResponse = err.res.data.errors; // Get the errors from err.response.data
                console.log(errorResponse);
                const errorArray = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArray.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArray);
            }) 
        }           
        
    return (
 <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}            
     <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><FlightTakeoffIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' onChange={(e) => setEmail(e.target.value)} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography > Create an account ?
                     <Link to="/register">
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </form>


//         </>
    )
}
export default Login
