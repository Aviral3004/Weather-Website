import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import moment from "moment";

import { get5DayForecast } from "../../api";

import FiveDayCard from "../Cards/FiveDayCard";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import ErrorText from "../Texts/ErrorText";
import HeadingText from "../Texts/HeadingText";
import HeadlineText from "../Texts/HeadlineText";

const FiveDayForeCast = () => {
  const [fiveDayForecast, setFiveDayForecast] = useState({
    headline: "",
    forecasts: [],
  });
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  // const [render, setRender] = useState(0);

  const clickHandler = async () => {
    setError(null);

    try {
      const { forecasts, headline } = await get5DayForecast(city);

      setFiveDayForecast({ forecasts, headline });
      // setRender(render + 6);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeadingText heading="Five Day Forecast" />
      <Input setCity={setCity} />
      <Button buttonTitle="Get Five Day Forecast" onClick={clickHandler} />
      {fiveDayForecast.headline.length > 0 && (
        <HeadlineText
          subHeading="Some Information"
          text={fiveDayForecast.headline}
        />
      )}
      {fiveDayForecast.forecasts.length > 0 &&
        fiveDayForecast.forecasts.map((forecast, dayFromToday) => (
          <AnimatePresence key={dayFromToday}>
            <FiveDayCard
              key={dayFromToday}
              maximumTemperature={forecast.maximumTemperature}
              minimumTemperature={forecast.minimumTemperature}
              precipitationProbabilityDay={forecast.precipitationProbabilityDay}
              precipitationProbabilityNight={
                forecast.precipitationProbabilityNight
              }
              airQuality={forecast.airQuality}
              uvIndex={forecast.uvIndex}
              date={moment().add(dayFromToday, "day").format("DD-MMM-YY")}
              dayOfWeek={moment().add(dayFromToday, "days").format("ddd")}
            />
          </AnimatePresence>
        ))}
      {error && <ErrorText />}
    </div>
  );
};

export default FiveDayForeCast;
