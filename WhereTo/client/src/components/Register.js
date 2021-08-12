import React, { useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'


import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login = (props) => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#009999'}
    const btnstyle={margin:'8px 0',backgroundColor:"#009999"}
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/new', {
            name,
            email,
            password,
            confirmPassword
            })
            .then((res) => console.log(res) & navigate("/login"))
            .catch(err => console.log(err))
        }
            // .catch(err=>{
            //     console.log("Am here")
            //     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            //     const errorArr = []; // Define a temp error array to push the messages in
            //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            //         errorArr.push(errorResponse[key].message)
            //     }
            //     // Set Errors
            //     setErrors(errorArr);
            // }) }           
    
     

    return (


 <form onSubmit={onSubmitHandler}>
     {errors.map((err, index) => <p key={index}>{err}</p>)}            
     <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><FlightTakeoffIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Name' placeholder='Enter name' onChange={(e) => setName(e.target.value)} fullWidth required/>
                <TextField label='Email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required/>
                <TextField label='Confirm Password' placeholder='Enter confirm password' type='password' onChange={(e) => setConfirmPassword(e.target.value)} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Create Account</Button>
                <Typography > Already have an account ?
                     <Link to="/login">
                        Sign In 
                </Link>
                </Typography>
            </Paper>
        </form>


//         </>
    )
}
export default Login
