import React, { useState } from 'react';
import './App.css';
import Game from './pages/Game' ;
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/game',
    element: <Game/>
  }
])

function App() {
  return <RouterProvider router={router}/>
 }
export default App;

