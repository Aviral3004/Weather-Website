import React, { useState, Fragment } from "react";

import { get1DayForecast } from "../../api";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import HeadingText from "../Texts/HeadingText";
import OneDayCard from "../Cards/OneDayCard";
const OneDayForeCast = () => {
  const [oneDayForecast, setOneDayForecast] = useState({
    aboutWeather: "",
    temperature: undefined,
    realFeelTemperature: undefined,
    realFeelTemperatureShade: undefined,
    windGust: undefined,
    precipitationProbability: undefined,
    uvIndex: "",
    hoursOfSun: undefined,
  });
  const [city, setCity] = useState("");
  const [key, setKey] = useState(0);

  const clickHandler = async () => {

    try {
      const {
        aboutWeather,
        temperature,
        realFeelTemperature,
        realFeelTemperatureShade,
        windGust,
        precipitationProbability,
        uvIndex,
        hoursOfSun,
      } = await toast.promise(get1DayForecast(city), {
      pending: "Sending request...",
      success: `Here is the 1 day forecast for ${city}`,
      error: "Couldn't send request. Something went wrong...",
    });

      setOneDayForecast({
        aboutWeather,
        temperature,
        realFeelTemperature,
        realFeelTemperatureShade,
        windGust,
        precipitationProbability,
        uvIndex,
        hoursOfSun,
      });
      setKey(key + 1);
    } catch (error) {
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeadingText heading="One Day Forecast" />
      <Input setCity={setCity} />
      <Button buttonTitle="Get One Day Forecast" onClick={clickHandler} />
      {oneDayForecast.aboutWeather.length > 0 && (
        <Fragment>
          <AnimatePresence key={key}>
            <OneDayCard
              time="day"
              aboutWeather={oneDayForecast.aboutWeather}
              hoursOfSun={oneDayForecast.hoursOfSun}
              precipitationProbability={
                oneDayForecast.precipitationProbability?.day
              }
              realFeelTemperature={oneDayForecast.realFeelTemperature?.day}
              realFeelTemperatureShade={oneDayForecast.realFeelTemperatureShade}
              temperature={oneDayForecast.temperature?.day}
              uvIndex={oneDayForecast.uvIndex}
              windGust={oneDayForecast.windGust?.day}
            />
            <OneDayCard
              time="night"
              precipitationProbability={
                oneDayForecast.precipitationProbability?.night
              }
              realFeelTemperature={oneDayForecast.realFeelTemperature?.night}
              temperature={oneDayForecast.temperature?.night}
              windGust={oneDayForecast.windGust?.night}
            />
          </AnimatePresence>
        </Fragment>
      )}
    </div>
  );
};

export default OneDayForeCast;
