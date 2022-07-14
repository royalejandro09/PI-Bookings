import React, { useEffect, useState } from "react";
import BlockHeader from "components/product/BlockHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import Policy from "components/product/Policy";
import FormReserve from "components/reserve/FormReserve";
import DateSelect from "components/reserve/DateSelect";
import TimeSelect from "components/reserve/TimeSelect";
import Detail from "components/reserve/Detail";

const Reserve = () => {
  const { id } = useParams();
  const [productById, setProductById] = useState(null);
  const [checkInDate, setCheckInDate] = useState(undefined)
  const [checkOutDate, setCheckOutDate] = useState(undefined)
  const [timeSelect, setTimeSelect] = useState(undefined);


  useEffect(() => {
    getProductById(id); // eslint-disable-next-line
  }, []);

  function getProductById(id) {
    axios
      .get(`/products/id/${id}`)
      .then((product) => {
        setProductById(product.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    productById !== null && (
      <div>
        <BlockHeader productById={productById} nav={`products/id/${id}`} />
        <div className="container-reserve">
          <div className="l-container-reserve">
            <FormReserve/>
            <DateSelect setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} productById={productById}/>
            <TimeSelect timeSelect={timeSelect} setTimeSelect={setTimeSelect}/>
          </div>
          <Detail productById={productById} checkInDate={checkInDate} checkOutDate={checkOutDate} timeSelect={timeSelect}/>
        </div>
        <Policy productById={productById}/>
      </div>
    )
  );
};

export default Reserve;
