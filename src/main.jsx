import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import Practice from './Practice.jsx'
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup'; 
import MovieInfopage from './MoviInfopage';

import React from 'react';


createRoot(document.getElementById('root')).render(
<>
<Router>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/movieinfopage/:id" element={<MovieInfopage />} />  

    </Routes>
</Router>

</>

)
