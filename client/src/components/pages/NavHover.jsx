/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function NavHover({ show, divContent }) {
  return (
    show && (
      <div id="hoverDiv">{divContent}</div>
    )
  );
}

NavHover.propTypes = {
  show: PropTypes.bool,
  divContent: PropTypes.string,
};

NavHover.defaultProps = {
  show: false,
  divContent: '',
};

export default NavHover;
