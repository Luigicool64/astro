import React, { useState } from 'react';
import './styles/App.css';
import Game from './views/Game' ;
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './views/Homepage';

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

