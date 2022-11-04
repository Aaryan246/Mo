import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Motivation from './pages/Motivation';
import Motive from './pages/Motive';
import Movement from './pages/Movement';
import Profile from './pages/Profile';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="motivation" element={<Motivation />} />
        <Route path="motive" element={<Motive />} />
        <Route path="movement" element={<Movement />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
