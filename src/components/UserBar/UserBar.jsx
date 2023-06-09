import React from 'react';
import { Wrapper, WelcomeMessage, Email, LogoutButton } from './UserBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';
import authOperation from 'redux/auth/auth-operation';
import Notiflix from 'notiflix';

const UserBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getName);
  const email = useSelector(authSelector.getEmail);

  const handleLogOut = () => {
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      () => {
        dispatch(authOperation.logOut());
        //
      },
      () => {}
    );
  };
  return (
    <Wrapper>
      <WelcomeMessage>Welcome, {name}!</WelcomeMessage>
      <Email>{email}</Email>
      <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
    </Wrapper>
  );
};

export default UserBar;
