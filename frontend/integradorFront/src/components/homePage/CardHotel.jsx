import React from "react";
import "styles/cards/cardHotel.css";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdLocationPin, MdFavorite, MdKitchen } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { BiSwim, BiWifi } from "react-icons/bi";
import { BsSnow } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";

const Card = ({ hotel }) => {
  const navigate = useNavigate();

  function getCharac(product) {
    const productToLowerCase = product.toLowerCase();

    if (productToLowerCase === "cocina") return <MdKitchen />;
    if (productToLowerCase === "televisor") return <CgScreen />;
    if (productToLowerCase === "aire acondicionado") return <BsSnow />;
    if (productToLowerCase === "apto mascotas") return <FaPaw />;
    if (productToLowerCase === "estacionamiento gratuito") return <IoMdCar />;
    if (productToLowerCase === "pileta") return <BiSwim />;
    if (productToLowerCase === "wifi") return <BiWifi />;
  }

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

  function handleShowMore() {
    navigate(`/products/id/${hotel.id}`);
  }

  return (
    <div className="container__cardHotel">
      <div className="l-container">
        <img
          className="img-background"
          src={hotel.imagesDto[0]?.urlImg}
          alt="Hotel"
        />
        <span className="container-icon-favorite">
          <MdFavorite />
        </span>
      </div>
      <div className="r-container">
        <div className="tr-container">
          <div className="category-name">
            <div className="category">
              <p className="type-category">{hotel.categoryDto.title}</p>
              <span className="stars">
                {ratingStars(hotel.rating).map((element) => {
                  return element;
                })}
              </span>
            </div>
            <p className="hotel-name">{hotel.name}</p>
          </div>
          <div className="rating">
            <p className="number-rating">{hotel.rating}</p>
            <p className="text-rating">{rating(hotel.rating)}</p>
          </div>
        </div>
        <div className="container-location">
          <span className="icon-location">
            <MdLocationPin />
          </span>
          <p className="text-location">{hotel.reference}</p>
          <p className="show-map">MOSTRAR EN EL MAPA</p>
        </div>
        <div className="wifi-swim">
          {hotel.featureDto.map((feature, index) => {
            return (
              <span className="feature-icon" key={index}>
                {getCharac(feature.name)}
              </span>
            );
          })}
        </div>
        <p className="description_cardHotel">{hotel.description}</p>
        <button onClick={() => handleShowMore()} className="button-more-info">
          Ver Más
        </button>
      </div>
    </div>
  );
};

export default Card;
