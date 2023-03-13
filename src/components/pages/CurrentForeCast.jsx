import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { getCurrentForecast } from "../../api";
import HeadingText from "../Texts/HeadingText";
import Input from "../Inputs/Input";
import ErrorText from "../Texts/ErrorText";
import Button from "../Buttons/Button";
import CurrentCard from "../Cards/CurrentCard";

const CurrentForeCast = () => {
  const [city, setCity] = useState("");
  const [key, setKey] = useState(0);
  const [currentForecast, setCurrentForecast] = useState({
    weatherText: "",
    temperature: undefined,
    realFeelTemperature: undefined,
    wind: "",
    dewPoint: undefined,
    visibility: "",
    currentlyRaining: false,
    humidity: undefined,
    pressure: undefined,
  });
  const [error, setError] = useState(null);

  const clickHandler = async () => {
    setError(null);

    try {
      const {
        currentlyRaining,
        dewPoint,
        humidity,
        realFeelTemperature,
        temperature,
        visibility,
        weatherText,
        wind,
        pressure,
      } = await getCurrentForecast(city);

      setCurrentForecast({
        currentlyRaining,
        dewPoint,
        humidity,
        realFeelTemperature,
        temperature,
        visibility,
        weatherText,
        wind,
        pressure,
      });
      setKey(key + 1);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeadingText heading="Current Forecast" />
      <Input setCity={setCity} />
      <Button buttonTitle="Get Current Forecast" onClick={clickHandler} />
      {currentForecast.weatherText.length > 0 && (
        <AnimatePresence key={key}>
          <CurrentCard
            currentlyRaining={currentForecast.currentlyRaining}
            dewPoint={currentForecast.dewPoint}
            humidity={currentForecast.humidity}
            visibility={currentForecast.visibility}
            weatherText={currentForecast.weatherText}
            wind={currentForecast.wind}
            realFeelTemperature={currentForecast.realFeelTemperature}
            temperature={currentForecast.temperature}
            pressure={currentForecast.pressure}
          />
        </AnimatePresence>
      )}
      {error && <ErrorText />}
    </div>
  );
};

export default CurrentForeCast;
