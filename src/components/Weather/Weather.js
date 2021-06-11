/* import */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import classes from "./Weather.module.css";
require("dotenv").config();
console.log(process.env);
/* function */
const Weather = () => {
  /* State */
  const [weather, setWeather] = useState();
  const [loader, setLoader] = useState(false);
  /* useLocation to have the state from the Search bar */
  let location = useLocation();
  const values = location.state;
  const API = process.env.REACT_APP_API_KEY;

  /* Axios request */
  const ApiCall = async () => {
    setLoader(true);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&APPID=${API}`
      )
      .then((response) => {
        setWeather(response.data);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  };
  /* useEffect */
  useEffect(() => {
    ApiCall();
  }, []);
  /**/
  return (
    <React.Fragment>
      {!weather ? (
        <>
          <div className={classes.Special}>
            <small>404 Not found</small>
            <h1>Sorry no city was found search again !</h1>
            <Link to="/search">Back to Search</Link>
          </div>
        </>
      ) : (
        <div className={classes.Main}>
          <div className={classes.Left}>
            <div className={classes.Container}>
              <div className={classes.City}>
                {loader ? (
                  "Loading"
                ) : (
                  <>
                    <div className={classes.Country}>
                      <div>{weather ? <h1>{weather.name}</h1> : ""}</div>
                      <div>{weather ? <h1>{weather.sys.country}</h1> : ""}</div>
                    </div>
                    <div className={classes.Temp}>
                      <div>
                        {weather ? (
                          <h1>Temperature: {weather.main.temp} °C</h1>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {weather ? (
                          <h1> Feels like: {weather.main.feels_like} °C</h1>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className={classes.Temp}>
                      <div>
                        {weather ? (
                          <h1>Main: {weather.weather[0].main}</h1>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {weather ? (
                          <>
                            <h1> Humidity: {weather.main.humidity}</h1>
                            <img
                              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className={classes.Temp}>
                      <div>
                        {weather ? (
                          <Link to="/search">Back to Search</Link>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={classes.Right}></div>
        </div>
      )}
    </React.Fragment>
  );
};
/* Export */
export default Weather;
