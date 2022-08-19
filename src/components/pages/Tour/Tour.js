import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTour } from "../../actions/userActions";

const Tour = () => {
  const [tourDetail, setTourDetail] = useState({});
  const { state } = useLocation();

  const _getTour = (id) => {
    getTour(id).then((res) => {
      if (res) {
        setTourDetail(res.data.doc);
      }
    });
  };
  console.log("log:", tourDetail);
  useEffect(() => {
    _getTour(state);
    console.log(state);
  }, []);

  return (
    <div>
      <div>
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay">&nbsp;</div>
            <img
              className="header__hero-img"
              src={tourDetail.imageCover}
              alt="Tour 1"
            />
          </div>
          <div className="heading-box">
            <h1 className="heading-primary">
              <span>
                {tourDetail.name} <br />
              </span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="img/icons.svg#icon-clock" />
                </svg>
                <span className="heading-box__text">
                  {tourDetail.duration} days
                </span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="img/icons.svg#icon-map-pin" />
                </svg>

                <span className="heading-box__text">
                  // TODO: solve this addewss tour detail.location
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-description">
          <div className="overview-box">
            <div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref="img/icons.svg#icon-calendar" />
                  </svg>
                  <span className="overview-box__label">Next date :</span>
                  <span className="overview-box__text">August 2021</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref="img/icons.svg#icon-trending-up" />
                  </svg>
                  <span className="overview-box__label">Difficulty :</span>
                  <span className="overview-box__text">
                    {tourDetail.difficulty}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref="img/icons.svg#icon-user" />
                  </svg>
                  <span className="overview-box__label">Participants :</span>
                  <span className="overview-box__text">
                    {tourDetail.maxGroupSize}
                  </span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use xlinkHref="img/icons.svg#icon-star" />
                  </svg>
                  <span className="overview-box__label">Rating :</span>
                  <span className="overview-box__text">
                    {tourDetail.ratingsAverage} / 5
                  </span>
                </div>
              </div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
                <div className="overview-box__detail">
                  <img
                    src="img/users/user-19.jpg"
                    alt="Lead guide"
                    className="overview-box__img"
                  />
                  <span className="overview-box__label">Lead guide</span>
                  <span className="overview-box__text">Steven Miller</span>
                </div>
                <div className="overview-box__detail">
                  <img
                    src="img/users/user-18.jpg"
                    alt="Tour guide"
                    className="overview-box__img"
                  />
                  <span className="overview-box__label">Tour guide</span>
                  <span className="overview-box__text">Lisa Brown</span>
                </div>
                <div className="overview-box__detail">
                  <img
                    src="img/users/user-17.jpg"
                    alt="Intern"
                    className="overview-box__img"
                  />
                  <span className="overview-box__label">Intern</span>
                  <span className="overview-box__text">Max Smith</span>
                </div>
              </div>
            </div>
          </div>
          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">
              About {tourDetail.name}
            </h2>
            <p className="description__text">{tourDetail.description}</p>
          </div>
        </section>
        <section className="section-pictures">
          <div className="picture-box">
            <img
              className="picture-box__img picture-box__img--1"
              src={tourDetail.images[0]}
              alt="The Park Camper Tour 1"
            />
          </div>
          <div className="picture-box">
            <img
              className="picture-box__img picture-box__img--2"
              src={tourDetail.images[1]}
              alt="The Park Camper Tour 1"
            />
          </div>
          <div className="picture-box">
            <img
              className="picture-box__img picture-box__img--3"
              src={tourDetail.images[2]}
              alt="The Park Camper Tour 1"
            />
          </div>
        </section>
        <section className="section-map">
          <div id="map" />
        </section>

        <section className="section-reviews">
          <div className="reviews">
            {tourDetail.reviews.map((item) => (
              <div className="reviews__card">
                <div className="reviews__avatar">
                  <img
                    src="img/users/user-7.jpg"
                    alt="Jim Brown"
                    className="reviews__avatar-img"
                  />
                  <h6 className="reviews__user">{item.user.name}</h6>
                </div>
                <p className="reviews__text">{item.review}</p>
                <div className="reviews__rating">
                  <svg className="reviews__star reviews__star--active">
                    <use xlinkHref="img/icons.svg#icon-star" />
                  </svg>
                  <svg className="reviews__star reviews__star--active">
                    <use xlinkHref="img/icons.svg#icon-star" />
                  </svg>
                  <svg className="reviews__star reviews__star--active">
                    <use xlinkHref="img/icons.svg#icon-star" />
                  </svg>
                  <svg className="reviews__star reviews__star--active">
                    <use xlinkHref="img/icons.svg#icon-star" />
                  </svg>
                  <svg className="reviews__star reviews__star--active">
                    <use xlinkHref="img/icons.svg#icon-star" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-cta">
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img src="img/logo-white.png" alt="Natours logo" className />
            </div>
            <img
              src="img/tour-5-2.jpg"
              alt=""
              className="cta__img cta__img--1"
            />
            <img
              src="img/tour-5-1.jpg"
              alt=""
              className="cta__img cta__img--2"
            />
            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">
                10 days. 1 adventure. Infinite memories. Make it yours today!
              </p>
              <button className="btn btn--green span-all-rows">
                Book tour now!
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tour;
