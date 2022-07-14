import React from "react";
import { useNavigate } from "react-router";
import BlockHeader from "components/product/BlockHeader";
import AddDescription from "components/createProduct/AddDescription";
import AddFeatures from "components/createProduct/AddFeatures";
import AddPolitics from "components/createProduct/AddPolitics";
import AddImages from "components/createProduct/AddImages";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const [name, setName] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [adress, setAdress] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [titleDescription, setTitleDescription] = useState(undefined);

  const [features, setFeatures] = useState([]);
  const [featureValue, setFeatureValue] = useState(undefined);

  const [rulesPolitics, setRulesPolitics] = useState([]);
  const [rulePoliticValue, setRulePoliticValue] = useState(undefined);

  const [securityPolitics, setSecurityPolitics] = useState([]);
  const [securityValue, setSecurityValue] = useState(undefined);

  const [cancelPolitics, setCancelPolitics] = useState([]);
  const [cancelValue, setCancelValue] = useState(undefined);

  const [images, setImages] = useState([]);
  const [imageValue, setImageValue] = useState(undefined);

  const [flagDropCity, setFlagDropCity] = useState(false);
  const [flagDropCategory, setFlagDropCategory] = useState(false);
  const [flagDropFeatures, setFlagDropFeatures] = useState(false);
  const [citiesData, setCitiesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getFeatures();
    getCategories();
    getCities();
  }, []);

  function getCategories() {
    axios
      .get("/categories")
      .then((element) => setCategoriesData(element.data))
      .catch((error) => console.log(error));
  }

  function getCities() {
    axios
      .get("/cities")
      .then((element) => setCitiesData(element.data))
      .catch((error) => console.log(error));
  }

  function getFeatures() {
    axios
      .get("/features")
      .then((element) => setFeaturesData(element.data))
      .catch((error) => console.log(error));
  }

  // function handleSubmit() {
  //   navigate(`/admin/success`);
  // }

  // var data = {
  //   name: name,
  //   descriptionTitle: "Esta es la descripcion del titulo400",
  //   description: description,
  //   latitude: "newLatitude12",
  //   longitude: "newLOngitude12",
  //   reference: adress,
  //   address: "newAddress12",
  //   categoryDto: {
  //     title: category?.title,
  //     description: category?.description,
  //     imageUrl: category?.imageUrl,
  //   },
  //   cityDto: {
  //     name: city?.name,
  //     countryName: city?.countryName,
  //   },
  //   imagesDto: images,
  //   featureDto: features,
  //   policyHouseRulesDto: rulesPolitics,
  //   policyCancellationDto: securityPolitics,
  //   policyHealthSecurityDto: cancelPolitics,
  // };

  var data = {
    name,
    descriptionTitle: titleDescription,
    description: description,
    latitude: "newLatitude",
    longitude: "newLOngitude",
    reference: adress,
    address: "newAddress",
    categoryDto: {
      title: category?.title,
      description: category?.description,
      imageUrl: category?.imageUrl,
    },
    cityDto: {
      name: city?.name,
      countryName: city?.countryName,
    },
    imagesDto: images,
    featureDto: features,
    policyHouseRulesDto: rulesPolitics,
    policyCancellationDto: cancelPolitics,
    policyHealthSecurityDto: securityPolitics,
  };

  var config = {
    method: "post",
    url: "/products",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  function postProduct(e) {
    e.preventDefault();

    if (
      name === undefined ||
      category === undefined ||
      adress === undefined ||
      city === undefined ||
      description === undefined ||
      titleDescription === undefined ||
      features.length === 0 ||
      rulesPolitics.length === 0 ||
      securityPolitics.length === 0 ||
      cancelPolitics.length === 0 ||
      images.length === 0
    ) {
      Toast.fire({
        icon: "error",
        title: "Todos los campos deben estar completos",
      });
    } else {
      axios(config)
        .then(function (response) {
          if (response.status === 201) {
            navigate("/admin/success");
          }
        })
        .catch(function (error) {
          console.log(error);
          Toast.fire({
            icon: "error",
            title:
              "Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde",
          });
        });
    }
  }

  function handleSubmitForm(e) {
    postProduct(e);
  }

  const adminText = "Administración de productos";

  return (
    <div>
      <BlockHeader adminText={adminText} />
      <div className="container-form-create-product">
        <h2 className="h2-create-product">Crear propiedad</h2>
        <form
          className="form-create-product"
          onSubmit={(e) => handleSubmitForm(e)}
        >
          <AddDescription
            citiesData={citiesData}
            categoriesData={categoriesData}
            flagDropCity={flagDropCity}
            setFlagDropCity={setFlagDropCity}
            flagDropCategory={flagDropCategory}
            setFlagDropCategory={setFlagDropCategory}
            setFlagDropFeatures={setFlagDropFeatures}
            setCategory={setCategory}
            setCity={setCity}
            category={category}
            city={city}
            setName={setName}
            setAdress={setAdress}
            setDescription={setDescription}
            setTitleDescription={setTitleDescription}
          />
          <AddFeatures
            featuresData={featuresData}
            flagDropFeatures={flagDropFeatures}
            setFlagDropFeatures={setFlagDropFeatures}
            setFlagDropCategory={setFlagDropCategory}
            setFlagDropCity={setFlagDropCity}
            setFeatureValue={setFeatureValue}
            featureValue={featureValue}
            setFeatures={setFeatures}
            features={features}
          />
          <AddPolitics
            setRulesPolitics={setRulesPolitics}
            setSecurityPolitics={setSecurityPolitics}
            setCancelPolitics={setCancelPolitics}
            setRulePoliticValue={setRulePoliticValue}
            setSecurityValue={setSecurityValue}
            setCancelValue={setCancelValue}
            rulePoliticValue={rulePoliticValue}
            securityValue={securityValue}
            cancelValue={cancelValue}
            rulesPolitics={rulesPolitics}
            securityPolitics={securityPolitics}
            cancelPolitics={cancelPolitics}
          />
          <AddImages
            setImageValue={setImageValue}
            imageValue={imageValue}
            setImages={setImages}
            images={images}
          />
          <button
            type="submit"
            className="button-create-product"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
