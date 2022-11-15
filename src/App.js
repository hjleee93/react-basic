import React from 'react'
import { Route, Routes, Link } from 'react-router-dom' //특정 주소에 특정 컴포넌트를 연결해줌
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profiles">user list</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profiles/:username" element={<Profile />} /> */}
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </div>
  );
}
export default App;


