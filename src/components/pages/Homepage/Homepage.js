import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTours } from "../../../actions/userActions";

import "../../../style.css";

const Homepage = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const _getallTours = async () => {
    const tour = await getAllTours();
    if (tour) {
      let data = tour.data?.doc;
      console.log(tour);
      setLoading(false);
      setTours(data);
    }
  };

  useEffect(() => {
    _getallTours();
  }, []);

  return (
    <div className="main">
      <div className="card-container">
        {!loading ? (
          tours.map((item, index) => (
            <div className="card" key={index}>
              <div className="card__header">
                <div className="card__picture">
                  <div className="card__picture-overlay">&nbsp;</div>
                  <img
                    className="card__picture-img"
                    src={item.imageCover}
                    alt="Tour 1"
                  />
                </div>
                <h3 className="heading-tertirary">
                  <span>{item.name}</span>
                </h3>
              </div>
              <div className="card__details">
                <h4 className="card__sub-heading">
                  {item.difficulty} {item.duration}-day tour
                </h4>
                <p className="card__text">{item.summary}</p>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-map-pin" />
                  </svg>
                  <span>{item.startLocation.description}</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-calendar" />
                  </svg>
                  <span>{item.startDates[0]}</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-flag" />
                  </svg>
                  <span>{item.locations.length} stops</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-user" />
                  </svg>
                  <span>{item.maxGroupSize} people</span>
                </div>
              </div>
              <div className="card__footer">
                <p>
                  <span className="card__footer-value">Rs.{item.price}</span>
                  <span className="card__footer-text">per person</span>
                </p>
                <p className="card__ratings">
                  <span className="card__footer-value">
                    {item.ratingsAverage}
                  </span>
                  <span className="card__footer-text">
                    rating ({item.ratingsQuantity})
                  </span>
                </p>
                <Link
                  className="btn btn--green btn--small"
                  to="/tourDetails"
                  state={item._id}
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <>
            <Box></Box>
            <Box
              display="flex"
              justifyContent="center"
              style={{ textAlign: "center", fontSize: "64px" }}
            >
              {" "}
              Loading...
            </Box>
          </>
        )}
      </div>
    </div>
  );
};

export default Homepage;
