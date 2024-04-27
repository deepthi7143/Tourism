import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios, { all } from 'axios';

export default function Attraction() {


  let state = [
    {
      "name": "Andhra Pradesh",
      "city": "xx"
    },
    {
      "name": "Telangana",
      "city": "er"
    },
    {
      "name": "West Bengal",
      "city": "q3"
    },
    {
      "name": "Punjab",
      "city": "bv"
    }
  ]


  let Country = [
    {
      "name": "INDIA",
      "city": "34"
    },
    {
      "name": "USA",
      "city": "df"
    },
    {
      "name": "LONDON",
      "city": "er"
    },
    {
      "name": "FRANCE",
      "city": "35"
    }
  ]

  let World = [
    {
      "name": "ASIA",
      "city": "s"
    },
    {
      "name": "RUSSIA",
      "city": "dsfdsf"
    },
    {
      "name": "ANTARTICA",
      "city": "sfd"
    },
    {
      "name": "AUSTRALIA",
      "city": "ert"
    }
  ]

  const [place, setPlace] = useState(state);
  const [allStudents, setAllStudent] = useState([])
  console.log('palce',place)

  useEffect(()=> {
    axios.get(`http://localhost:3000/getList`).then((res)=> {
      setAllStudent(res.data)
    }).catch((err)=> {
      console.log(err)
    })
  },[])

  return (
    <div>
      <div>
      <AppBar>
        <Toolbar>
          <h1 style={{ margin: 'auto' }}>ATTRACTIONS</h1>
        </Toolbar>
      </AppBar>
      </div>

      <div style={{marginTop:'30px'}}>
      {place.map((item) => (
        <div>
          {console.log(item.name, "{item.name}")}
          <h2>{item.name}</h2>
        </div>
      ))}
      {
        allStudents.map((item)=> {
          return(
            <div>
            <h2>{item.Name}</h2>
          </div>
          )
          
        })
      }
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '350px' }}>
      <Tabs aria-label="basic tabs example"
         style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
        <Tab label="STATE" onClick={() => setPlace(state)} 
         style={{
          transition: '0.3s',
          padding: '10px 20px',
          margin: '0 5px',
          borderRadius: '6px',
          cursor: 'pointer',
          color: '#666',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'lightblue';
          e.target.style.color = '#333';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#f0f0f0';
          e.target.style.color = '#666';
        }} />
        <Tab label="COUNTRY" onClick={() => setPlace(Country)}  
         style={{
          transition: '0.3s',
          padding: '10px 20px',
          margin: '0 5px',
          borderRadius: '6px',
          cursor: 'pointer',
          color: '#666',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'lightblue';
          e.target.style.color = '#333';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#f0f0f0';
          e.target.style.color = '#666';
        }} />
        <Tab label="WORLD" onClick={() => setPlace(World)}  
         style={{
          transition: '0.3s',
          padding: '10px 20px',
          margin: '0 5px',
          borderRadius: '6px',
          cursor: 'pointer',
          color: '#666',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'lightblue';
          e.target.style.color = '#333';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#f0f0f0';
          e.target.style.color = '#666';
        }}/>
      </Tabs>
      </div>
    </div>
  )
}
