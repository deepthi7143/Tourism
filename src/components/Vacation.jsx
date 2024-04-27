import axios from 'axios'
import React, { useState } from 'react'
export default function Vacation() {


  const [list,getList] = useState()


  const handlesubmit = (e)=>{
  axios.get('http://localhost:3000/getall').then( res=>{
    console.log(res,'govind')
  })
  }
  return (
    <div>
      Vacation

      <div><button onClick={handlesubmit}>Get All</button></div>
      </div>

  )
}
