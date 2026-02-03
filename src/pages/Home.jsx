import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Movie Directory</h1>
      <p>Explore our collection of directors and their films.</p>
      <div>
        <Link to="/directors">View All Directors</Link>
        {' | '}
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
}

export default Home;
