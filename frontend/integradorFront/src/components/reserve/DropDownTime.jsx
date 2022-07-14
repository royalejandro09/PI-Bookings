import React from "react";

const DropDownTime = ({ handlerInputTime, setTimeSelect }) => {
  
  const listTime = [
    {
      time: "01:00",
      period: "AM",
    },
    {
      time: "02:00",
      period: "AM",
    },
    {
      time: "03:00",
      period: "AM",
    },
    {
      time: "04:00",
      period: "AM",
    },
    {
      time: "05:00",
      period: "AM",
    },
    {
      time: "06:00",
      period: "AM",
    },
    {
      time: "07:00",
      period: "AM",
    },
    {
      time: "08:00",
      period: "AM",
    },
    {
      time: "09:00",
      period: "AM",
    },
    {
      time: "10:00",
      period: "AM",
    },
    {
      time: "11:00",
      period: "AM",
    },
    {
      time: "12:00",
      period: "AM",
    },
    {
      time: "01:00",
      period: "PM",
    },
    {
      time: "02:00",
      period: "PM",
    },
    {
      time: "03:00",
      period: "PM",
    },
    {
      time: "04:00",
      period: "PM",
    },
    {
      time: "05:00",
      period: "PM",
    },
    {
      time: "06:00",
      period: "PM",
    },
    {
      time: "07:00",
      period: "PM",
    },
    {
      time: "08:00",
      period: "PM",
    },
    {
      time: "09:00",
      period: "PM",
    },
    {
      time: "10:00",
      period: "PM",
    },
    {
      time: "11:00",
      period: "PM",
    },
    {
      time: "12:00",
      period: "PM",
    },
  ];

  function handlerTimeSelect(e) {
    setTimeSelect(e.target.innerText);
    handlerInputTime();
  }

  return (
    <div className="container-drop-down">
      {listTime.map((time ,index)=> <p onClick={(e) => handlerTimeSelect(e)} key={index}>{time.time} {time.period}</p>)}
    </div>
  );
};

export default DropDownTime;
