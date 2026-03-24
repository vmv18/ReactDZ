import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Якщо користувач не авторизований, перенаправляємо на сторінку логіну
    return <Navigate to="/login" replace />;
  }

  // Якщо авторизований, рендеримо дочірні елементи або Outlet для вкладених маршрутів
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
