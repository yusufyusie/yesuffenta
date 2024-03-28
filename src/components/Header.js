import React from 'react';

const Header = () => (
  <header className="bg-night-500 text-white px-6 py-4">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="font-poppins text-xl mb-4 sm:mb-0">My Portfolio</div>
      <nav>
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <li><a href="/" className="hover:text-primary">Home</a></li>
          <li><a href="/projects" className="hover:text-primary">Projects</a></li>
          <li><a href="/about" className="hover:text-primary">About</a></li>
          <li><a href="/contact" className="hover:text-primary">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
