import React from 'react'
import Card from '@mui/material/Card';
import EEE from './EEE.css'
import Chart from './components/Chart';





export default function Images() {
  return  (
      <div  class="container">
      <div  class="upper" style={{display:'flex'}}>
     <Card   className='image-card' >
      <img src="https://thumbs.dreamstime.com/b/beach-goa-india-5393913.jpg"  alt='' />
      </Card><br />
     <Card className='image-card'   >
      <img src="https://www.holidify.com/images/cmsuploads/compressed/183128172_80e060c6cf_z_20190718114549.jpg" alt='' />

      </Card><br />
     <Card className='image-card'  >
      <img src="https://media.istockphoto.com/id/1487460931/photo/kheerganga-trek-is-one-of-the-most-popular-treks-in-himachal-pradesh-india.jpg?s=1024x1024&w=is&k=20&c=rZfndks61DwE1Sm-6IVrEqJZHC6mW7vsxpyt__YYKgY=" alt="" />
      </Card><br />
     <Card className='image-card'  
     ><img src="https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.webp?b=1&s=170667a&w=0&k=20&c=VuRZoKcBSjIkDHKCzJOXMOHY6jtFq5qLaVZrx4g4lKE=" alt="" />
     </Card>
    </div>


    <div  class="lower" style={{display:'flex'}}>
      
     <Card className='image-card'  >
      <img src="https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA="  alt='' />
        <h2>kk</h2>
      </Card><br />
     <Card  className='image-card'   >
      <img src="https://t4.ftcdn.net/jpg/01/89/57/23/360_F_189572353_ZMYXpEB7iRZN7Myn61lLz3OQ5bwE3B0S.jpg" alt='' />

      </Card><br />
     <Card className='image-card'>
      <img src="https://staticimg.amarujala.com/assets/images/2021/04/04/750x506/tourist-koksar_1617543156.jpeg" alt="" />
      </Card><br />
     <Card  className='image-card'  
     ><img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/11/Dense-Forests-in-Lambasingi.jpg" alt="" />
     </Card>
    </div>
    </div>
    );
}
