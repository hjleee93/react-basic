import React from 'react'
import { Route, Routes, Link } from 'react-router-dom' //특정 주소에 특정 컴포넌트를 연결해줌
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import History from './HistorySample'
import NotFound from './NotFound';

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
        <li>
          <Link to="/history">example</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profiles/:username" element={<Profile />} /> */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
        {/*  상단의 모든 라우터를 확인하고 일치하는 라우터가 없는 경우 해당 라우터가 실행됨*/}
      </Routes>
    </div>
  );
}
export default App;


