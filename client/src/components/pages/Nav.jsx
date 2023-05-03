/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Nav() {
  const x = useLocation();
  const distance = '-200px';

  React.useEffect(() => {
    const navBar = document.querySelector('.collapse');
    const button = document.querySelector('.box-collapse');
    switch (x.pathname) {
      case '/':
        button.style.visibility = 'hidden';
        navBar.style.transform = 'translateY(0)';
        button.style.transform = `translateY(${distance})`;

        break;
      default:
        button.style.visibility = 'visible';
        navBar.style.transform = `translateY(${distance})`;
        button.style.transform = 'translateY(0)';
        break;
    }
  }, [x]);

  const clickHandler = (event) => {
    event.preventDefault();
    const button = document.querySelector('.box-collapse');
    const navBar = document.querySelector('.collapse');
    button.style.transform = `translateY(${distance})`;
    navBar.style.transform = 'translateY(0)';
  };

  return (
    <>
      <nav id="header">
        <div className="collapse">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/activity">Activity</Link></li>
            <li className="r-nav"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <button type="button" onClick={clickHandler} className="box-collapse">Menu</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
