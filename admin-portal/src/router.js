import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './auth.context';
import Dashboard from './screens/dashboard.screen';
import Login from './screens/login.screen';
import NotFound from './screens/notFound.screen';

const Router = () => {
  const { authData } = useAuthContext();

  return (
    <Routes>
      <Route
        path="/"
        element={authData ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
