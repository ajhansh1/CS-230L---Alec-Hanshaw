import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">Navbar</a>

        {/* Links */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>

        {/* Search Bar */}
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;