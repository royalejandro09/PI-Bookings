import { React, useState } from "react";
import Calendar from "react-calendar";

const DateSelect = ({ setCheckInDate, setCheckOutDate, productById }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  function dateFormat(date) {
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
    setCheckInDate(checkIn);
    setCheckOutDate(checkIn);
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
      const checkOut =
        checkOutDay + "-" + checkOutMonth + "-" + checkOutYear;
      setCheckOutDate(checkOut);
    }
  }

  function handleCalendar(date) {
    dateFormat(date)
  }

  const formatDate = (e) => {
    const day = e.getDate() < 10 ? '0' +( e.getDate() + 1) : (e.getDate() + 1)
    const month = e.getMonth() < 10 ? '0' + (e.getMonth() + 1) : (e.getMonth() + 1)
    const year = e.getFullYear()

    return [day, month, year].join('-')
  }

  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (productById.listDates?.some((element) => element.toString() === formatDate(date).toString())) {
        return 'disabled-calendar';
      }
    }
  }

  return (
    <div className="container-date-select">
      <h2 className="h2-date-select">Seleccioná tu fecha de reserva</h2>
      <div className="calendar-date-select">
        <Calendar
          onChange={(value, event) => {
            handleCalendar(value)
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
          tileDisabled={({activeStartDate, date, view }) => (view === "month") && productById.listDates?.some((element) => element.toString() === formatDate(date).toString())}
          tileClassName={tileClassName}
          formatShortWeekday={(locale, date) => date.toLocaleDateString('es-ES', {weekday:'short'})[0]}
        />
      </div>
    </div>
  );
};

export default DateSelect;
