/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Navhover({ hoveredItem, showDiv }) {
  const [render, setRender] = React.useState(false);
  const [contentChange, setContentChange] = React.useState(hoveredItem);

  React.useEffect(() => {
    if (!showDiv) {
      const timeId = setTimeout(() => {
        if (!showDiv) {
          setRender(false);
        }
      }, 500);
      return () => clearTimeout(timeId);
    }

    setRender(true);
    return () => {};
  }, [showDiv]);

  React.useEffect(() => {
    if (hoveredItem !== contentChange) {
      const timeId = setTimeout(() => {
        if (hoveredItem !== contentChange) {
          setContentChange(hoveredItem);
        }
      }, 250);
      return () => clearTimeout(timeId);
    }

    return () => {};
  }, [hoveredItem]);

  return (
    render && (
    <div id="hoverDiv" style={{ animation: `${showDiv ? 'fadeIn 0.5s' : 'fadeOut 0.5s'}` }}>
      <p>{contentChange}</p>
    </div>
    )
  );
}

Navhover.propTypes = {
  hoveredItem: PropTypes.string,
  showDiv: PropTypes.bool,
};

Navhover.defaultProps = {
  hoveredItem: '',
  showDiv: false,
};

export default Navhover;
