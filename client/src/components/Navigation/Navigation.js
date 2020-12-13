import React from 'react';
import './Navigation.scss';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/auth';

export const Navigation = () => {
  const dispatch = useDispatch();
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
      <Button
        color='secondary'
        variant='contained'
        onClick={() => {
          dispatch(signOut());
        }}>
        Signout
      </Button>
    </nav>
  );
};
