import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import ConvertedCurrency from '../Pages/ConvertedCurrency/ConvertedCurrency';

const Header = () => (
  <div className="header">
    <nav className="header__nav">
      <NavLink className="header__navigation" to="/currencies.json">Currencies</NavLink>
      <NavLink className="header__navigation" to="/currencies/converter">Converter</NavLink>
    </nav>
  </div>
);

export default Header;
