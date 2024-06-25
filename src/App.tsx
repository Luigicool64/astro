import React, { useState } from 'react';
import './App.css';
import Game from './page/game' ;
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Acueill from './page/acueill';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Acueill/>
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

