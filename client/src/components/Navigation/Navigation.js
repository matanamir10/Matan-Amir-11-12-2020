import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink
        className='navigation__item'
        activeClassName='navigation__item--active'
        to='/compose'>
        <span> Compose</span>
      </NavLink>
      <NavLink
        className='navigation__item'
        activeClassName='navigation__item--active'
        to='/manage'>
        <span>Manage</span>
      </NavLink>
    </nav>
  );
};
