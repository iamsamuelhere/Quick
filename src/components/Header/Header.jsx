import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { background } from './styles.js';

const Header = () => {
  return (
    <div style={background}>
      <div>QR Scan</div>
      <div>
        <Link to="/"> Logout</Link>
      </div>
    </div>
  );
};

export default Header;
