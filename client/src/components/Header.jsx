import React from 'react';

function Header() {
  return (
    <header>
      <div className="h-left">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
      </div>

      <div className="h-right">
        <h3>Contact</h3>
      </div>
    </header>
  );
}

export default Header;
