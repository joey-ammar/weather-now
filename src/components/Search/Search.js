/* import */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Search.module.css";
/* function */
const Search = () => {
  /* State */
  let [data, setData] = useState([]);
  /* onSetInput */
  const onSetInput = (event) => {
    setData(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.Main}>
        <div className={classes.Container}>
          <h1 className={classes.Header}>
            Search cities and get the forecast live
          </h1>
          <div className={classes.Divide}>
            <input
              onChange={onSetInput}
              type="text"
              placeholder="Search"
              value={data}
            />

            <Link className={classes.Btn} to="/">
              Home
            </Link>
            <Link
              className={classes.Btn}
              value={data}
              to={{
                pathname: "/weather",
                state: data,
              }}
            >
              Search
            </Link>
          </div>
          <div className={classes.Icons}>
            <i className="fab fa-discord"></i>
            <i className="fab fa-slack"></i>
            <i style={{ padding: "0.6rem 0.6rem" }} className="fas fa-link"></i>
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
    </React.Fragment>
  );
};
/* Export */
export default Search;
