import React from 'react';

const Masthead = () => (
  <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      <img className="masthead-avatar mb-5" src="../assets/img/avataaars.svg" alt="..." />
      <h1 className="masthead-heading text-uppercase mb-0">A Full Stack Web Developer</h1>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      <p className="masthead-subheading font-weight-light mb-0">Programmer - Web Developer - react</p>
    </div>
  </header>
);

export default Masthead;
