import React from 'react'
import Profile from './Profile';
import { Link, Route, Routes } from 'react-router-dom'

function Profiles() {
  return (
    <div>
      <h3>User list</h3>
      <ul>
        <li><Link to="/profiles/hj">HJ</Link></li>
        <li><Link to="/profiles/paeki">Paeki</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<div>choose user </div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  )
}
export default Profiles;
