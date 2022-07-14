import React, { useState } from "react";
import CardCategory from "./CardCategory";
import CardCategorySkeleton from "./CardCategorySkeleton";

const Categories = ({ changeCategory, categoriesData, setAcommodationData }) => {

  const [idCategorySelected, setIdCategorySelected] = useState("")

  return (
    <div className="container-categories">
      <h2 className="h2-category">Buscar por tipo de alojamiento</h2>
      <div className="card-categories">
        {categoriesData.length > 0 ? (
          categoriesData?.map((category) => (
            <CardCategory
            category={category}
            key={category.id}
            changeCategory={changeCategory}
            setAcommodationData={setAcommodationData}
            setIdCategorySelected={setIdCategorySelected}
            idCategorySelected={idCategorySelected}
          />
          ))
        ) : (
          <>
            <CardCategorySkeleton />
            <CardCategorySkeleton />
            <CardCategorySkeleton />
            <CardCategorySkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
