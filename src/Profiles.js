import React from 'react'
import Profile from './Profile';
import { Link, NavLink, Route, Routes } from 'react-router-dom'

function Profiles() {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <div>
      <h3>User list</h3>
      <ul>
        <li><NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}

          to="/profiles/hj">HJ</NavLink></li>
        <li><NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}

          to="/profiles/paeki">Paeki</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<div>choose user </div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  )
}
export default Profiles;
