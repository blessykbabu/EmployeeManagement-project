
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import cpic from "../components/images/1.jpeg";
// import './Home.css'

export default function HomeComponent() {
  return (

<>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"lightblue",}}>
  <div className="container-fluid">
   <Link to="/" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      
       
        <li className="nav-item m-4">
       <Link to="/login" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Login</Link>
        </li>
      </ul>
    </div>
    <div className='c-name'>
      {/* <ul style={{textDecoration:"none"}}>
        <li style={{textDecoration:"none",color:"white"}}>  */}
          <span style={{color:"gray",fontFamily:"inherit",fontWeight:"bolder",fontSize:"40px"}}>Algotrade</span>
        {/* </li>
      </ul> */}
    </div>
  </div>
</nav>

{/* <div className='start'>
<div className='welcome'>Welcome</div> 
<div className='data'> 
  <span>to Algotrade.Start a beautiful journey</span>
</div>
</div> */}


<div className='container main'>
  <div className='company-img m-3'>
  <img
                src={cpic}
                height={"500px"}
                className="d-block w-100"
                alt="..."
              />
  </div>
  <div className='content-c'>
<p>Welcome to Algotrade Company, a coopearte company committed to innovation and Client-Centric Approach . Since our establishment in 1983, we have been at the forefront of Strategic Partnerships,Data-Driven Insights.</p>
  </div>
</div>
   
    </>
  );
}
