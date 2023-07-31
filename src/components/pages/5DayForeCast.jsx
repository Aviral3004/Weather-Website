import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import moment from "moment";
import { v4 } from "uuid";
import { toast } from "react-toastify";

import { get5DayForecast } from "../../api";

import FiveDayCard from "../Cards/FiveDayCard";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import HeadingText from "../Texts/HeadingText";
import HeadlineText from "../Texts/HeadlineText";

const FiveDayForeCast = () => {
  const [fiveDayForecast, setFiveDayForecast] = useState({
    headline: "",
    forecasts: [],
  });
  const [city, setCity] = useState("");
  const [animationKey, setAnimationKey] = useState("");

  const clickHandler = async () => {
    setFiveDayForecast({
      headline: "",
      forecasts: [],
    });
    try {
      const { forecasts, headline } = await toast.promise(get5DayForecast(city), {
          pending: "Sending request...",
          success: `Here is the 5 day forecast for ${city}`,
          error: "Couldn't send request. Something went wrong...",
      });

      setFiveDayForecast({ forecasts, headline });
      setAnimationKey(v4());
    } catch (error) {
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
          <AnimatePresence key={animationKey}>
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
    </div>
  );
};

export default FiveDayForeCast;
