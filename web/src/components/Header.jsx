import React from 'react';
import { Link } from 'react-router';

import './style.css';

const Header = () => (
  <div>
    <div>redux-react-starter</div>

    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  </div>
);

export default Header;
