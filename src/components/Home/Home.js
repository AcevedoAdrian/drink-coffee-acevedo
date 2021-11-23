import React from 'react';
import './Home.css'
const Home = ({ title }) => {
  return (
    <section className='home'>
      <div className='home-text'>
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores nihil, reprehenderit, unde repellat quasi repudiandae architecto cumque tempora labore, magni quo accusantium ab quia distinctio vero laboriosam molestias vitae!r</p>
      </div>
    </section>
  );
}

export default Home;