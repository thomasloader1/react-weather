import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const Location = ({ city }) => {
  return (
    <Fragment>
      <h1>{city}</h1>
    </Fragment>
  );
};

Location.propTypes ={
    city: PropTypes.string.isRequired,
}

export default Location;
