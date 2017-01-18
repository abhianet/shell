import React from 'react';

import './style.css';

const Header = () => (
  <div>
    <div>redux-react-starter</div>

    <ul>
      <li><a href="/login">Login</a></li>
      <li><a href="/signup">Signup</a></li>
      <li><a href="/">Home</a></li>
    </ul>
  </div>
);

export default Header;
