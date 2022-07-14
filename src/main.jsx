import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Routes, Route, BrowserRouter } from './react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
)
