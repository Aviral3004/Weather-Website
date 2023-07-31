import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import OneDayForeCast from "./components/pages/1DayForeCast";
import FiveDayForeCast from "./components/pages/5DayForeCast";
import CurrentForeCast from "./components/pages/CurrentForeCast";
import NavbarFooter from "./components/Containers/NavbarFooter";
import ErrorText from "./components/Texts/ErrorText";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarFooter />,
    errorElement: <ErrorText />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/oneDayForecast", element: <OneDayForeCast /> },
      { path: "/fiveDayForecast", element: <FiveDayForeCast /> },
      { path: "/currentForecast", element: <CurrentForeCast /> },
    ],
  },
]);

const App = () => {
  return(
    <>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      bodyStyle={{
        fontFamily: "Space Grotesk",
      }}
    />
    <RouterProvider router={router} />
  </>
  );
};

export default App;
