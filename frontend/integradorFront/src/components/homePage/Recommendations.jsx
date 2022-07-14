import React from "react";
import CardHotel from "./CardHotel";
import CardHotelSkeleton from "./CardHotelSkeleton";

const Recommendations = ({ categorySelect, acommodationData }) => {
  // useEffect(() => {}, [categorySelect]);

  return (
    <div className="container-recommendations">
      <h2 className="h2-recommendations">{categorySelect}</h2>
      <div className="card-recommendations">
        {acommodationData.length > 0 ? (
          acommodationData?.map((hotel) => (
            <CardHotel hotel={hotel} key={hotel.id} />
          ))
        ) : (
          <>
            <CardHotelSkeleton />
            <CardHotelSkeleton />
            <CardHotelSkeleton />
            <CardHotelSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
