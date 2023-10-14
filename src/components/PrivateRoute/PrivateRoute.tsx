import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getGlobalUser } from '../../redux/auth/selectors';

const PrivateRoute = () => {
  const { isLoggedIn } = useSelector(getGlobalUser);
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
