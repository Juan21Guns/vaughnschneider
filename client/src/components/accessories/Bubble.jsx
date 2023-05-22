/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Bubble({ name }) {
  const route = name.toLowerCase();

  return (
    <Link to={`/${route}`} id={`/${route}`}>
      <div className="uw-bubble">
        <h1>{name}</h1>
      </div>
    </Link>
  );
}

Bubble.propTypes = {
  name: PropTypes.string,
};

Bubble.defaultProps = {
  name: '',
};

export default Bubble;
