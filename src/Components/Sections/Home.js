import React from 'react';
import Projects from './Projects';
import About from './About';
import Banner from "./Banner";
import Knowledge from './Knowledge';

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Projects />
      <Knowledge />
    </div>
  )
}

export default Home;