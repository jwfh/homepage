import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';

export const BottomFade = (props) => (
  <Fade bottom duraton={props.duration} delay={props.delay}>
    {props.children}
  </Fade>
);

BottomFade.defaultProps = {
  duration: 650,
  delay: 100,
};

BottomFade.propTypes = {
  duration: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};
