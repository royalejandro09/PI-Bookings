import React, { useState } from "react";
import "styles/body/searcher.css";
import "styles/body/calendar.css";
import { MdLocationOn } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import LocationList from "./LocationList";
import Calendar from "react-calendar/dist/umd/Calendar";
import axios from "axios";
import { TiDelete } from "react-icons/ti";

const Searcher = ({ citiesData, setAcommodationData, setCategorySelect }) => {
  const [flagLocationList, setFlagLocationList] = useState(false);
  const [flagCalendar, setFlagCalendar] = useState(false);
  const [placeHolderInput, setPlaceHolderInput] = useState("");
  const [valueCalendarIn, setValueCalendarIn] = useState(undefined);
  const [valueCalendarOut, setvalueCalendarOut] = useState(undefined);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [valueCalendar, setValueCalendar] = useState(null);
  const [citySearched, setCitySearched] = useState(undefined);
  const [valueCalendarInRequest, setValueCalendarInRequest] =
    useState(undefined);
  const [valueCalendarOutRequest, setValueCalendarOutRequest] =
    useState(undefined);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  function handleInputSearcher() {
    setFlagLocationList(!flagLocationList);
    setFlagCalendar(false);
  }

  function handleInputCalendar() {
    setFlagCalendar(!flagCalendar);
    setFlagLocationList(false);
  }

  function handleApply(event) {
    event.preventDefault();

    dateFormatRequest(valueCalendar);
    dateFormat(valueCalendar);
    setFlagCalendar(false);
  }

  function dateFormat(date) {
    let checkInMonth = date[0].toLocaleDateString("es-ES", {
      month: "short",
    });
    let checkInDay = date[0].toLocaleDateString("es-ES", {
      day: "2-digit",
    });
    const checkIn = checkInDay + " de " + checkInMonth;
    setValueCalendarIn(checkIn);
    setvalueCalendarOut(checkIn);
    if (date.length > 1) {
      let checkOutMonth = date[1].toLocaleDateString("es-ES", {
        month: "short",
      });
      let checkOutDay = date[1].toLocaleDateString("es-ES", {
        day: "2-digit",
      });
      const checkOut = checkOutDay + " de " + checkOutMonth;
      setvalueCalendarOut(checkOut);
    }
  }

  function dateFormatRequest(date) {
    let checkInMonth = date[0].toLocaleDateString("es-ES", {
      month: "2-digit",
    });
    let checkInDay = date[0].toLocaleDateString("es-ES", {
      day: "2-digit",
    });
    let checkInYear = date[0].toLocaleDateString("es-ES", {
      year: "numeric",
    });
    const checkIn = checkInDay + "-" + checkInMonth + "-" + checkInYear;
    setValueCalendarInRequest(checkIn);
    setValueCalendarOutRequest(checkIn);
    if (date.length > 1) {
      let checkOutMonth = date[1].toLocaleDateString("es-ES", {
        month: "2-digit",
      });
      let checkOutDay = date[1].toLocaleDateString("es-ES", {
        day: "2-digit",
      });
      let checkOutYear = date[1].toLocaleDateString("es-ES", {
        year: "numeric",
      });
      const checkOut = checkOutDay + "-" + checkOutMonth + "-" + checkOutYear;
      setValueCalendarOutRequest(checkOut);
    }
  }

  function handleSearch(event, city, date1, date2) {
    event.preventDefault();

    if (valueCalendarIn !== undefined && citySearched !== undefined) {
      getByCityAndDate(city, date1, date2);
      setCategorySelect(city + " " + date1 + " / " + date2);
      setFlagLocationList(false);
    } else if (valueCalendarIn !== undefined) {
      getByDate(date1, date2);
      setCategorySelect(date1 + " / " + date2);
    } else if (citySearched !== undefined) {
      getByCity(city);
      setCategorySelect(city);
      setFlagLocationList(false);
    }
  }

  function getByCity(city) {
    axios
      .get(`/products/city/${city}`)
      .then((cities) => setAcommodationData(cities.data))
      .catch((error) => console.log(error));
  }

  function getByDate(dateStart, dateEnd) {
    axios
      .get(`/products/filterbydate?startDate=${dateStart}&finalDate=${dateEnd}`)
      .then((products) => setAcommodationData(products.data))
      .catch((error) => console.log(error));
  }

  function getByCityAndDate(city, dateStart, dateEnd) {
    axios
      .get(
        `/products/filtercitydate?startDate=${dateStart}&finalDate=${dateEnd}&cityName=${city}`
      )
      .then((products) => setAcommodationData(products.data))
      .catch((error) => console.log(error));
  }

  function handleCleanFilterCity() {
    setPlaceHolderInput("");
    setCitySearched(undefined);
  }

  function handleCleanFilterDate() {
    setValueCalendarIn(undefined)
    setvalueCalendarOut(undefined)
  }

  return (
    <div className="container-searcher">
      <h1 className="h1-searcher">
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <form
        className="searcher-form"
        onSubmit={(event) =>
          handleSearch(
            event,
            citySearched,
            valueCalendarInRequest,
            valueCalendarOutRequest
          )
        }
      >
        <div className="container-input-searcher">
          <span
            className="icon-location-searcher"
            onClick={() => handleInputSearcher()}
          >
            <MdLocationOn />
          </span>
          <input
            className="input-searcher"
            type="text"
            placeholder="¿A dónde vamos?"
            value={placeHolderInput}
            onClick={() => handleInputSearcher()}
            onChange={(event) => {
              setPlaceHolderInput(event.target.value);
              setCitySearched(event.target.value);
            }}
          />
          <span
            className="icon-cross-searcher"
            onClick={() => handleCleanFilterCity()}
          >
            <TiDelete />
          </span>
          {flagLocationList ? (
            <LocationList
              setPlaceHolderInput={setPlaceHolderInput}
              setFlagLocationList={setFlagLocationList}
              citiesData={citiesData}
              setCitySearched={setCitySearched}
            />
          ) : null}
        </div>
        <div className="container-calendar-searcher">
          <span
            className="icon-calendar-searcher"
            onClick={() => handleInputCalendar()}
          >
            <BsCalendarEvent />
          </span>
          <input
            placeholder="Check in - Check out"
            onClick={() => handleInputCalendar()}
            value={
              valueCalendarIn === undefined
                ? "Check in - Check out"
                : valueCalendarIn + " - " + valueCalendarOut
            }
            className="input-calendar"
            readOnly
          />
          <span
            className="icon-cross-searcher"
            onClick={() => handleCleanFilterDate()}
          >
            <TiDelete />
          </span>
          {flagCalendar === false ? null : (
            <div className="calendar-container">
              <Calendar
                onChange={(value, event) => {
                  setValueCalendar(value);
                }}
                allowPartialRange={true}
                returnValue="range"
                minDate={new Date()}
                prev2Label={null}
                next2Label={null}
                showDoubleView={windowWidth >= 600 ? true : false}
                selectRange={true}
                calendarType="US"
                showFixedNumberOfWeeks={false}
                showNeighboringMonth={false}
                view="month"
                navigationLabel={({ date, label, locale, view }) =>
                  date.toLocaleDateString(locale, { month: "long" })
                }
                formatShortWeekday={(locale, date) =>
                  date.toLocaleDateString("es-ES", { weekday: "short" })[0]
                }
              />
              <button
                className="button-apply-calendar"
                onClick={(event) => handleApply(event)}
              >
                Aplicar
              </button>
            </div>
          )}
        </div>
        <button className="button-searcher" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Searcher;
