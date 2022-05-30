import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <div className="header">
    <nav>
      <NavLink className="header__navigation" to="/currencies.json">Currencies</NavLink>
    </nav>
  </div>
);

export default Header;
