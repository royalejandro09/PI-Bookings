import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "../utils/Button.jsx";
import ErrorMessage from "components/reserve/ErrorMessage.jsx";
import { UserContext } from "context/AppContext";
import { UserData } from "context/DataUserContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [flagErrorMessage, setFlagErrorMessage] = useState(false)

  const { setUserData } = useContext(UserData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlagErrorMessage(false)
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    login();
  };

  function getUserByMail() {
    axios
      .get(`/users/email/${formValues.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        setUserData(response.data)
        localStorage.setItem('user',JSON.stringify(response.data));
      })
      .catch((error) => console.log(error));
  }

  function login() {
    axios
      .post(
        `/oauth/token?grant_type=password&username=${formValues.email}&password=${formValues.password}`
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("jwt", response.data.access_token);
          getUserByMail();
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setFlagErrorMessage(true)
      });
  }
  

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
    // eslint-disable-next-line
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Este campo es obligatorio";
    } else if (!regex.test(values.email)) {
      errors.email = "Formato de correo electrónico inválido!";
    }
    if (!values.password) {
      errors.password = "Este campo es obligatorio";
    } else if (values.password.length <= 6) {
      errors.password = "La contraseña debe tener más de seis caracteres";
    }
    return errors;
  };
  // eslint-disable-next-line
  const [_, setCurrentContext] = useContext(UserContext);


  const errorMessage = "Lamentablemente no ha podido iniciar sesión. Por favor, intente más tarde";

  return (
    <div className="container-login-register">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
        {flagErrorMessage && <ErrorMessage errorMessage={errorMessage}/>}
          <h2>Iniciar sesión</h2>

          <div className="form__container">
            <div className="field">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="• • • • • • • •"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
          </div>
          <Button type="submit" filled>
            <span className="btn_style"></span>
            <span className="btn_style"></span>
            <span className="btn_style"></span>
            <span className="btn_style"></span>
            Ingresar
          </Button>
          {/* eslint-disable-next-line */}
          <p className="ancor_register">
            ¿Aún no tenes cuenta?
          {/* eslint-disable-next-line */}
            <a
              className="containerLogo"
              onClick={() => {
                navigate("/register");
              }}
            >
              <span>Registrate</span>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
