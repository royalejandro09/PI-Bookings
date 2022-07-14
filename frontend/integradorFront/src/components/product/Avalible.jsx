import React, { useContext, useState } from "react";
import "styles/product/avalible.css";
import "styles/body/calendar.css";
import CalendarProduct from "react-calendar";
import { useNavigate } from "react-router-dom";
import { UserData } from "context/DataUserContext";

const Avalible = ({ productById }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const { userData } = useContext(UserData);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  function handleReserve() {
    if (!userData) return navigate("/login");
    navigate(`/products/id/${productById.id}/reserve`);
  }

  const formatDate = (e) => {
    const day = e.getDate() < 10 ? "0" + (e.getDate() + 1) : e.getDate() + 1;
    const month =
      e.getMonth() < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1;
    const year = e.getFullYear();

    return [day, month, year].join("-");
  };

  function tileClassName({ date, view }) {
    if (view === "month") {
      if (
        productById.listDates?.some(
          (element) => element.toString() === formatDate(date).toString()
        )
      ) {
        return "disabled-calendar";
      }
    }
  }

  return (
    <div className="container-avalible">
      <h2 className="h2-avalible">Fechas disponibles</h2>
      <div className="container-check-booking">
        <div className="calendar-avalible">
          <CalendarProduct
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
            tileDisabled={({ activeStartDate, date, view }) =>
              view === "month" &&
              productById.listDates?.some(
                (element) => element.toString() === formatDate(date).toString()
              )
            }
            navigationLabel={({ date, label, locale, view }) =>
              date.toLocaleDateString(locale, { month: "long" })
            }
            tileClassName={tileClassName}
            formatShortWeekday={(locale, date) =>
              date.toLocaleDateString("es-ES", { weekday: "short" })[0]
            }
          />
        </div>
        <div className="div-check-booking">
          <p className="p-check-booking">
            Agregá tus fechas de viaje para obtener precios exactos
          </p>
          <button
            className="button-check-booking"
            onClick={() => handleReserve()}
          >
            Iniciar reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avalible;
