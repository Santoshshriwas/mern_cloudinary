
import React from 'react'
import  { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (    
    <>
   
    <div className='header'>
      <div className='header-1'>
      <Link to="home">Home</Link>
      <Link to="insert">Insert</Link>
      <Link to="display">Dispaly</Link>
      <Link to="singup">SingUp</Link>
      </div>
  
    </div>

    <div id='content'>
    <Outlet/>
    </div>

    <hr size="4" color='red'/>
     <h4 className='footer'>www.footer.com</h4> 
    </>  
  )
}

export default Layout