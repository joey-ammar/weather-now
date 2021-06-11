/* import  */
import React from "react";
import classes from "./Introduction.module.css";
import { Link } from "react-router-dom";
/* function Introduction */
const Introduction = () => {
  return (
    <React.Fragment>
      <div className={classes.Introduction}>
        <div className={classes.Introduction_Inside}>
          {/* Left Side */}
          <div className={classes.Introduction_Left}></div>
          {/* Right Side */}
          <div className={classes.Introduction_Right}>
            <div className={classes.Introduction_Right_inside}>
              <h1>The Weather Forecast</h1>
              <p>
                The Weather Forecast and ForecastNow.com provide a national and
                local weather forecast for cities, as well as weather radar,
                report and hurricane coverage.
              </p>
              <Link to="/search">
                <i class="fas fa-caret-square-right"></i> Search
              </Link>
              <div className={classes.Icons}>
                <i className="fab fa-discord"></i>
                <i className="fab fa-slack"></i>
                <i
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="fas fa-link"
                ></i>
                <i
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="far fa-envelope"
                ></i>
                <i className="fab fa-linkedin-in"></i>
                <i
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="fab fa-github"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
/* Export */
export default Introduction;
