/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navhover from './Navhover';

function Nav() {
  const [showDiv, setShowDiv] = React.useState(false);
  const [hoverBool, setHoverBool] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState('');
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
      setShowDiv(false);
      setTimeout(() => { button.style.transform = 'translateY(0)'; }, 1000);
    }
  };

  React.useEffect(() => {
    if (!hoverBool) {
      const timeId = setTimeout(() => {
        if (!hoverBool) {
          setShowDiv(false);
          setHoveredItem('');
        }
      }, 500);

      return () => clearTimeout(timeId);
    }

    const timeId = setTimeout(() => {
      setShowDiv(true);
    }, 100);

    return () => clearTimeout(timeId);
  }, [hoverBool]);

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
            <li><Link to="/" id="/" onMouseEnter={() => { setHoveredItem('Home'); setHoverBool(true); }} onMouseLeave={() => { setHoverBool(false); }}>Home</Link></li>
            <li><Link to="/about" id="/about" onMouseEnter={() => { setHoveredItem('About'); setHoverBool(true); }} onMouseLeave={() => { setHoverBool(false); }}>About</Link></li>
            <li><Link to="/projects" id="/projects" onMouseEnter={() => { setHoveredItem('Projects'); setHoverBool(true); }} onMouseLeave={() => { setHoverBool(false); }}>Projects</Link></li>
            <li><Link to="/activity" id="/activity" onMouseEnter={() => { setHoveredItem('Activity'); setHoverBool(true); }} onMouseLeave={() => { setHoverBool(false); }}>Activity</Link></li>
            <li className="r-nav"><Link to="/contact" id="/contact" onMouseEnter={() => { setHoveredItem('Contact'); setHoverBool(true); }} onMouseLeave={() => { setHoverBool(false); }}>Contact</Link></li>
          </ul>
          <button type="button" onClick={() => { buttonFly(false, 'header'); }} className="up-arrow">
            <i className="fa-solid fa-ellipsis" />
          </button>
        </div>
        <button type="button" onClick={() => { buttonFly(false, 'button'); }} className="box-collapse">
          <i className="fa-solid fa-bars" aria-label="Menu dropdown" />
        </button>
        <Navhover hoveredItem={hoveredItem} showDiv={showDiv} />
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
