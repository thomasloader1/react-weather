import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) =>{
    return(
        <React.Fragment>
            <p>{humidity} - {wind}</p>
        </React.Fragment>
    )
};

WeatherExtraInfo.porpTypes ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;