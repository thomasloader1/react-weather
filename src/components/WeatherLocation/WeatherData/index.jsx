import React from "react";
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

const WeatherData = ({data}) => {

  const { temperature, wind, weatherState, humidity } = data;

  return (
    <React.Fragment>
      <WeatherTemperature temperature={temperature} weatherState={weatherState} />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </React.Fragment>
  );
};

// WeatherData.propTypes = {
//   temperature: PropTypes.number.isRequired,
//   humidity: PropTypes.number.isRequired,
//   wind: PropTypes.string.isRequired,
// }

export default WeatherData;
