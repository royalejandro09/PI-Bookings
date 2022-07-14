import "styles/body/home.css";
import React, { useState, useEffect } from "react";
import Categories from "components/homePage/Categories";
import Recommendations from "components/homePage/Recommendations";
import Searcher from "components/homePage/Searcher";
import axios from "axios";

const Home = () => {
  const [categorySelect, setCategorySelect] = useState("Recomendaciones");
  const [categoriesData, setCategoriesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [acommodationData, setAcommodationData] = useState([]);

  useEffect(() => {
    getHotels();
    getCategories();
    getCities();
  }, []);

  useEffect(() => {}, [categorySelect]);

  function changeCategory(cate) {
    setCategorySelect(cate);
  }

  function getHotels() {
    axios
      .get("/products/randoms")
      .then((hotels) => {
        setAcommodationData(hotels.data);
      })
      .catch((error) => console.log(error));
  }

  function getCategories() {
    axios
      .get("/categories")
      .then((categories) => setCategoriesData(categories.data))
      .catch((error) => console.log(error));
  }

  function getCities() {
    axios
      .get("/cities")
      .then((cities) => setCitiesData(cities.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="container-home">
      <Searcher
        citiesData={citiesData}
        setAcommodationData={setAcommodationData}
        setCategorySelect={setCategorySelect}
      />
      <Categories
        changeCategory={changeCategory}
        categoriesData={categoriesData}
        setAcommodationData={setAcommodationData}
      />
      <Recommendations
        categorySelect={categorySelect}
        acommodationData={acommodationData}
      />
    </div>
  );
};

export default Home;
