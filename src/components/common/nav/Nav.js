import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <Link style={navStyle} to='/'>
      <h3>
        Website.com
      </h3>
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/resume'>
          <li>Resume</li>
        </Link>
        <Link style={navStyle} to='/fortnite'>
          <li>Fortnite</li>
        </Link>
        <Link style={navStyle} to='/chick-corea'>
          <li>Chick Corea</li>
        </Link>
      </ul>
    </nav>
  );
}