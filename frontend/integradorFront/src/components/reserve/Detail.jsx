import React, { useContext, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import { UserData } from "context/DataUserContext";
import { useNavigate } from "react-router-dom";

const Detail = ({ productById, checkInDate, checkOutDate, timeSelect }) => {
  // eslint-disable-next-line
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const [flagError, setFlagError] = useState(false);
  const [paddingBotom, setPaddingBotom] = useState(75);
  const [errorMessage, setErrorMessage] = useState("");

  const { userData } = useContext(UserData);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

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

  function handleSubmitReserve() {
    setFlagError(false);
    setPaddingBotom(75);

    if (
      checkInDate === undefined ||
      checkOutDate === undefined ||
      timeSelect === undefined
    ) {
      setPaddingBotom(9);
      setErrorMessage("Completar los campos fecha reserva y horario llegada");
      setFlagError(true);
    } else {
      postReservation();
    }
  }

  function postReservation() {
    const data = JSON.stringify({
      timeOfArrival: timeSelect,
      startDate: checkInDate,
      finalDate: checkOutDate,
      productId: productById.id,
      userId: userData.id,
    });

    const config = {
      method: "post",
      url: "/reservations",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.status === 201) {
          navigate(`/products/id/${productById.id}/reserve/success`);
        } else {
          setPaddingBotom(9);
          setErrorMessage(
            "Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde"
          );
          setFlagError(true);
        }
      })
      .catch(() => {
        setPaddingBotom(9);
        setErrorMessage(
          "Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde"
        );
        setFlagError(true);
      });
  }

  return (
    <div className="container-detail">
      <div className="detail-container">
        <h2 className="h2-detail">Detalle de la reserva</h2>
        <div className="container-img-description-detail">
          <div className="container-img-detail">
            <img
              className="img-detail"
              src={productById.imagesDto[0]?.urlImg}
              alt="Imagen principal"
            />
          </div>
          <div className="container-description-detail">
            <p className="p-category-detail">{productById.categoryDto.title}</p>
            <p className="p-name-detail">{productById.name}</p>
            <div className="container-rating-detail">             
              {ratingStars(productById.rating).map((element) => {
              return element;
            })}
            </div>
            <div className="container-location-detail">
              <span>
                <MdLocationOn />
              </span>
              <p className="p-location-detail">{productById.reference}</p>
            </div>
            <div
              className="check-date-section"
              style={{ paddingBottom: paddingBotom }}
            >
              <div className="container-p-check-in">
                <p className="p-check-date">Check in</p>
                <p className="p-date">
                  {checkInDate !== undefined ? checkInDate : "__ / __ / __"}
                </p>
              </div>
              <div className="container-p-check-out">
                <p className="p-check-date">Check out</p>
                <p className="p-date">
                  {checkOutDate !== undefined ? checkOutDate : "__ / __ / __"}
                </p>
              </div>
            </div>
            {flagError && <ErrorMessage errorMessage={errorMessage} />}
            <button
              onClick={() => handleSubmitReserve()}
              className="button-detail"
            >
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
