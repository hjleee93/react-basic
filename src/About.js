import React from "react";
import qs from 'qs';
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation()
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  }) //ignoreQueryPrefix 있어야 ? 가 업서짐

  const detail = query.detail === 'true';
  return (
    <div>
      <h1>About</h1>
      <p>
        Here is About page
        {detail && <p>detail is true</p>}
      </p>
    </div>
  )
}

export default About;
