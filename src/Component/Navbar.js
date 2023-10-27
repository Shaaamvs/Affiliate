import React from 'react';
import logo from '../Images/wl-logo-dark-single-line-1.png'
import './Banner.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light bg-white shadow">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h3 style={{ color: 'black' }}>Logo</h3>
          {/* <img src={logo} className='img-fluid logo' alt='logo'/>  */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">


          <a href="#" className="nav-link" style={{ color: 'black', marginRight: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight:'bold' }}>Home</a>


            <a href="#" className="nav-link" style={{ color: 'black', marginRight: '13px',fontFamily: 'Montserrat, sans-serif', fontWeight:'bold'}}>About</a>
            <a href="#" className="nav-link" style={{ color: 'black',fontFamily: 'Montserrat, sans-serif', fontWeight:'bold' }}>Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
