import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Logout() {
  return (
    <div>

       <Card style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <CardContent>
            <b>Successfully Logged Out</b>
        </CardContent>
        </Card> <br /><br /><br />


        <Card style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <CardContent>
            <div><h1>PLAN TRIP !</h1></div>
        </CardContent>
        <Link to="/"><Button variant="contained">Login Again</Button></Link>
        </Card> 

    </div>
  )
}
