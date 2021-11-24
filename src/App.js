import React from 'react';
import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import { Route } from 'react-router-dom';
import Login from './components/login/Login';

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
};
export default App;
