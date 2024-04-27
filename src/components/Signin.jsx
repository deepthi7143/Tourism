import React ,{ useState } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Signin() {

  let message = "";
  const [name,setName] = useState();
  const [err ,setErr] = useState();
  const [email,setEmail] = useState();
  const [password,setpassword] = useState();
  const navigate = useNavigate()


  const handlesubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/login' ,{email,password})
    .then(res => {
      console.log(res)
      if(res.data === 'Success'){
        navigate('/home')
      }else{
        message = res.data;
        setErr(message)
        console.log('govind',message)
      }
    }
    )
    .catch(err=> console.log(err))
  }

  return (
    <div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
      <form onSubmit={handlesubmit}>
    <Card sx={{ maxWidth: 345 }}   style={{boxShadow:'8px 7px 20px silver'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.tripsavvy.com/thmb/VkL8HmumZQvMMF6zlkTYBR9Rlpg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/car-traveling-along-winding-road--maui--hawaii--america--usa-737142515-9d7096b173654472968075d805273c8f.jpg  "
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sign In
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{marginTop:'30px'}}>
        <TextField  onChange={(e)=> setName(e.target.value)}  id="outlined-basic" label="username" variant="standard" />
        <TextField  onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="email" variant="standard" /><br /><br />
        <TextField  onChange={(e)=> setpassword(e.target.value)} id="outlined-basic" label="password" variant="standard" /><br /><br />
        <Button type='submit' color="info"  variant="contained" >Login</Button>
        </Typography>
      </CardContent>
      <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <p>Contact</p>
        <Link to="/register">
        <Button color='secondary'  >Register</Button>
        </Link>
      </CardActions>
      <p style={{color :'red'}}>{err}</p>
    </Card>
    </form>
    </div>
    </div>
  );
}










