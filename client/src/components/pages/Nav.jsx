/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import NavHover from './NavHover';

function Nav() {
  const [showDiv, setShowDiv] = React.useState(false);
  const [divContent, setDivContent] = React.useState('');
  const x = useLocation();
  const distance = '-200px';

  const buttonFly = (hidden, option) => {
    const navBar = document.querySelector('.collapse');
    const button = document.querySelector('.box-collapse');

    if (option === 'button') {
      if (hidden) {
        button.style.visibility = 'hidden';
      }
      navBar.style.transform = 'translateY(0)';
      button.style.transform = `translateY(${distance})`;
    } else if (option === 'header') {
      button.style.visibility = 'visible';
      navBar.style.transform = `translateY(${distance})`;
      setTimeout(() => { button.style.transform = 'translateY(0)'; }, 1000);
    }
  };

  const hoverStyle = (bool, name) => {
    if (bool) {
      setShowDiv(true);
      setDivContent(name);
    } else {
      setShowDiv(false);
      setDivContent('');
    }
  };

  React.useEffect(() => {
    const listPath = document.querySelectorAll('ul a');
    const path = document.getElementById(`${x.pathname}`);

    listPath.forEach((element) => {
      const nonMutate = element;
      nonMutate.style.color = 'revert-layer';
      nonMutate.style.textShadow = 'revert-layer';
    });
    path.style.color = 'rgb(255, 255, 255)';
    path.style.textShadow = '0 2px 1px black';

    switch (x.pathname) {
      case '/':
        buttonFly(true, 'button');
        break;
      default:
        buttonFly(false, 'header');
        break;
    }
  }, [x]);

  return (
    <>
      <nav id="header">
        <div className="collapse">
          <ul>
            <li><Link to="/" id="/" onMouseEnter={() => { hoverStyle(true, 'Home'); }} onMouseLeave={() => { hoverStyle(false); }}>Home</Link></li>
            <li><Link to="/about" id="/about" onMouseEnter={() => { hoverStyle(true, 'About'); }} onMouseLeave={() => { hoverStyle(false); }}>About</Link></li>
            <li><Link to="/projects" id="/projects" onMouseEnter={() => { hoverStyle(true, 'Projects'); }} onMouseLeave={() => { hoverStyle(false); }}>Projects</Link></li>
            <li><Link to="/activity" id="/activity" onMouseEnter={() => { hoverStyle(true, 'Activity'); }} onMouseLeave={() => { hoverStyle(false); }}>Activity</Link></li>
            <li className="r-nav"><Link to="/contact" id="/contact" onMouseEnter={() => { hoverStyle(true, 'Contact'); }} onMouseLeave={() => { hoverStyle(false); }}>Contact</Link></li>
          </ul>
          <button type="button" onClick={() => { buttonFly(false, 'header'); }} className="up-arrow">
            <i className="fa-solid fa-arrow-up" />
          </button>
        </div>
        <button type="button" onClick={() => { buttonFly(false, 'button'); }} className="box-collapse">
          <i className="fa-solid fa-bars" aria-label="Menu dropdown" />
        </button>
      </nav>
      <NavHover show={showDiv} divContent={divContent} />
      <Outlet />
    </>
  );
}

export default Nav;
