import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>
        Logo
      </h3>
      <ul className='nav-links'>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/resume'>
          <li>Resume</li>
        </Link>
        <Link style={navStyle} to='/league'>
          <li>League</li>
        </Link>
        <Link style={navStyle} to='/chick-corea'>
          <li>Chick Corea</li>
        </Link>
      </ul>
    </nav>
  );
}