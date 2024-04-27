import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function Register() {



    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setpassword] = useState();

 


    const handlesubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/register' ,{name,email,password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'100px'}}>
        <form onSubmit={handlesubmit} >
        <Card sx={{ maxWidth: 500 }} >
      
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Register
          </Typography>
          <Typography variant="body2" color="text.secondary"><br />
          <TextField id="outlined-basic" label="Username" variant="outlined"   onChange={ (e)=> setName(e.target.value)}/><br /><br />
          <TextField id="outlined-basic" label="email" variant="outlined" onChange={ (e)=> setEmail(e.target.value)} /><br /><br />
          <TextField id="outlined-basic" label="password" variant="outlined" onChange={ (e)=> setpassword(e.target.value)} /><br /><br />
          <Button  type='submit' variant="contained">Register</Button>
          </Typography>
        </CardContent>
    </Card>
    </form>
    <form >
      <TextField id="outlined-basic" label="Username" variant="outlined"   onChange={ (e)=> setName(e.target.value)}/><br /><br />
          <TextField id="outlined-basic" label="email" variant="outlined" onChange={ (e)=> setEmail(e.target.value)} /><br /><br />
          <TextField id="outlined-basic" label="password" variant="outlined" onChange={ (e)=> setpassword(e.target.value)} /><br /><br />
          <Button  type='submit' variant="contained">Register</Button>
    </form>
    </div>
    );
}
