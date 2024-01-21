/**
 * Res - CRUD -> QR
 * User - View
 */

import React from 'react';
import './style.css';
import { Routes, Route, Navigate } from 'react-router-dom';

//Views
import HeaderView from './views/HeaderView.jsx';
import MenuView from './views/MenuView.jsx';
import AddMenuView from './views/AddMenuView.jsx';
import AuthView from './views/AuthView.jsx';

//context
import MenuContextProvider from './contexts/MenuContext';

const HomeView = () => {
  return (
    <MenuContextProvider>
      <HeaderView />
      <AddMenuView />
      <MenuView />
    </MenuContextProvider>
  );
};
const isAuthenticated = () => {
  return true ? <HomeView /> : <Navigate to="/auth/sign-up" />;
};
const NotFound = () => {
  return <>404</>;
};
export default function App() {
  return (
    <Routes>
      <Route path="/" element={isAuthenticated()} />
      <Route path="/auth/:action" element={<AuthView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
