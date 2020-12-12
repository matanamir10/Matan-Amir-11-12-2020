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
        Compose
      </NavLink>
      <NavLink
        className='navigation__item'
        activeClassName='navigation__item--active'
        to='/manage'>
        Manage
      </NavLink>
    </nav>
  );
};
