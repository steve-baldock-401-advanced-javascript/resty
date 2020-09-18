import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './header.scss';

export default function Header() {
  return (
    <header className="Header">
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};


