import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const LocationData = ({ productById }) => {
  function rating(rating) {
    if (rating === 10 || rating === 9) {
      return "Excelente";
    } else if (rating === 8 || rating === 7) {
      return "Muy bueno";
    } else if (rating === 6 || rating === 5) {
      return "Bueno";
    } else if (rating === 4 || rating === 3) {
      return "Malo";
    } else if (rating === 2 || rating === 1 || rating === 0) {
      return "Muy Malo";
    }
  }

  function auxRating(rating) {
    if (rating === 10 || rating === 9) {
      return 5;
    } else if (rating === 8 || rating === 7) {
      return 4;
    } else if (rating === 6 || rating === 5) {
      return 3;
    } else if (rating === 4 || rating === 3) {
      return 2;
    } else if (rating === 2 || rating === 1 || rating === 0) {
      return 1;
    }
  }

  function ratingStars(rating) {
    const arrayStars = [];
    const cantidad = auxRating(rating);

    for (let i = 0; i < cantidad; i++) {
      arrayStars.push(
        <AiFillStar style={{ color: "var(--color_primary)" }} key={i} />
      );
    }

    const cantidad2 = 5 - cantidad;

    for (let i = 0; i < cantidad2; i++) {
      arrayStars.push(<AiFillStar style={{ color: "grey" }} key={i + 10} />);
    }

    return arrayStars;
  }

  return (
    <div className="container-locationData">
      <div className="container-locationData__description">
        <div className="container-locationData__description__aux">
          <span className="container-locationData__description__icon">
            <MdLocationPin />
          </span>
        </div>
        <div>
          <p className="locationData__description__place">
            {productById.cityDto.name}, {productById.cityDto.countryName}
          </p>
          <p className="locationData__description__distance">
            {productById.reference}
          </p>
        </div>
      </div>
      <div className="container-locationData__score">
        <p className="container-locationData__score__number">
          {productById.rating}
        </p>
        <div>
          <p className="container-locationData__score__text">
            {rating(productById.rating)}
          </p>
          <span className="stars">
            {ratingStars(productById.rating).map((element) => {
              return element;
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationData;
