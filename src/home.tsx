import React, { useState } from 'react';
import './App.css';

const HomePage = (props) => {
  const [data, setData] = useState([]);

  return (
    <div className="home-page">
      {props.test}
      <p>This is a sample home page.</p>
    </div>
  );
};

export default HomePage;