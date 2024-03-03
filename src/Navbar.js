import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item" style={{ display: 'inline-block', marginRight: '10px' }}>
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item" style={{ display: 'inline-block', marginRight: '10px' }}>
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item" style={{ display: 'inline-block' }}>
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;