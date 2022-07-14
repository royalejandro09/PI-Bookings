import React from "react";

const CardHotelSkeleton = () => {
  return (
    <div className="container__cardHotel-skeleton">
      <div className="l-container-skeleton">
        <div className="content-l-container-skeleton"></div>
      </div>
      <div className="r-container-skeleton">
        <div className="tr-container-skeleton">
          <div className="category-name-skeleton">
            <div className="category-skeleton">
            </div>
            <div className="hotel-name-skeleton"></div>
          </div>
          <div className="rating-skeleton">
            <div className="rating-content-skeleton"></div>
          </div>
        </div>
        <div className="container-location-skeleton">
          <div className="content-location-skeleton"></div>
        </div>
        <div className="wifi-swim-skeleton">
          <div className="content-wifi-swin-skeleton"></div>
        </div>
        <div className="description_cardHotel-skeleton">
          <div className="content-description-skeleton"></div>
        </div>
        <div className="conteiner-button-skeleton">
          <div className="content-button-skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default CardHotelSkeleton;
