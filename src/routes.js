import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routs() {
  return (
    <Routes>
      <Route path="/" exect element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
