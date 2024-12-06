import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import DSA from './components/Pages/DSA';
import CSE from './components/Pages/CSE';
import Java from './components/Pages/Java';
import Home from './components/Pages/Home';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/DSA" exact element={<DSA/>}></Route>
      <Route path="/CSE" exact element={<CSE/>}></Route>
      <Route path="/Java" exact element={<Java/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

