import React from 'react'
import './LeftSideBar.css'
import { Link } from 'react-router-dom';

export default function LeftSideBar() {
  return (
    <div className='leftsidebar'>
      <nav className='links'>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      <div className='footer'>Copywrite @ Merkier.com. <br></br>All rights reserved.</div>
    </div>
  )
}
