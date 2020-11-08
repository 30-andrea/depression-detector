import React from 'react';
import PropTypes from 'prop-types';

function qCount(props) {
  return (
    <div className="qCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

qCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default qCount;
