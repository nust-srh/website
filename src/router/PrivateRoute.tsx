import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface SomeProps {
    children: ReactNode
}

const PrivateRoute = ({ children }: SomeProps) => {
  const auth = useAuth();
  const { user } = auth;
  return <div>{user.email ? children : <Navigate to='/ngena' />}</div>;
};

export default PrivateRoute;