/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Nav() {
  const x = useLocation();
  React.useEffect(() => {
    console.log(x.pathname);
  }, [x]);

  return (
    <>
      <nav>
        <div className="collapse">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/activity">Activity</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
