import React from "react";
import "styles/body/locationList.css";
import { GoLocation } from "react-icons/go";

const LocationList = ({
  citiesData,
  setPlaceHolderInput,
  setFlagLocationList,
  setCitySearched,
}) => {
  function handleSelectLocation(location) {
    const placeHolder = `${location.name}, ${location.countryName}`;

    setCitySearched(location.name);
    setPlaceHolderInput(placeHolder);
    setFlagLocationList(false);
  }

  return (
    <div className="container-location-list">
      {citiesData.map((location) => {
        return (
          <div
            key={location.id}
            className="location-list-container"
            onClick={() => handleSelectLocation(location)}
          >
            <div className="container-hover-aux">
              <span className="icon-location_location-list">
                <GoLocation />
              </span>
              <div className="container-city-country">
                <p className="location-city">{location.name}</p>
                <p className="location-country">{location.countryName}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationList;
