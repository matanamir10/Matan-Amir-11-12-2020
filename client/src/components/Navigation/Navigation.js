import React from 'react';
import './Navigation.scss';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/actions/auth';

export const Navigation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className='navigation'>
      <p className='navigation__user-text'>Hello, {user.userId}</p>
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
