import React from 'react';
import { Wrapper, WelcomeMessage, Email, LogoutButton } from './UserBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';
import authOperation from 'redux/auth/auth-operation';

const UserBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getName);
  const email = useSelector(authSelector.getEmail);
  return (
    <Wrapper>
      <WelcomeMessage>Welcome, {name}!</WelcomeMessage>
      <Email>{email}</Email>
      <LogoutButton onClick={() => dispatch(authOperation.logOut())}>
        Logout
      </LogoutButton>
    </Wrapper>
  );
};

export default UserBar;
