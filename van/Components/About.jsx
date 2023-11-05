import React from "react";

const About = () => {
  return (
    <>
      <div className="full-width-hero about-image"></div>
      <div className="container flex flex--column">
        <h1 className="header">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <div className="container container--dark flex flex--column">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <button className="button button--dark">Explore our vans</button>
        </div>
      </div>
    </>
  );
};

export default About;
