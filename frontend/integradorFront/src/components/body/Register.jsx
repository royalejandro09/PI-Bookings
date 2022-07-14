import { useNavigate } from "react-router";
import Button from "../utils/Button.jsx";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "context/AppContext";
import  { UserData } from "context/DataUserContext.jsx";
import ErrorMessage from "components/reserve/ErrorMessage.jsx";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "", confPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [flagError, setFlagError] = useState(false)


  const {setUserData} = useContext(UserData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlagError(false)
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    postUser(e);
  };

  function postUser(e) {
    e.preventDefault();

    axios
      .post("/users", {
        name: nameValue,
        lastName: lastNameValue,
        mail: formValues.email,
        password: formValues.password,
        role: {
          name: "USER",
        },
      })
      .then((response) => {
        setUserData(response.data)
        localStorage.setItem('user',JSON.stringify(response.data));
        if (response.status === 201) {
          login();
        }
      })
      .catch((error) => {
        console.log(error)
        setFlagError(true)
    });
  }

  function login() {
    axios
      .post(`/oauth/token?grant_type=password&username=${formValues.email}&password=${formValues.password}`)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('jwt', response.data.access_token);
            navigate("/")
        }
      })
      .catch((error) => {
        console.log(error)
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
    } else if (values.password !== values.confPassword) {
      errors.confPassword = "Las contraseñas no coinciden";
    }
    return errors;
  };
// eslint-disable-next-line
  const [_, setCurrentContext] = useContext(UserContext);

  const errorMessage = "Lamentablemente no ha podido registrarse. Por favor, intente más tarde";


  return (
    <div className="container-login-register">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
      {flagError && <ErrorMessage errorMessage={errorMessage}/>}
          <h2>Crear cuenta</h2>

          <div className="form__container">
            <div className="container__aux">
              <div className="field">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  required
                  onChange={(event) => setNameValue(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="lastname">Apellido</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Apellido"
                  required
                  onChange={(event) => setLastNameValue(event.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Usuario"
                onChange={handleChange}
                required
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="• • • • • • • •"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="field">
              <label htmlFor="conf-password">Confirmar contraseña</label>
              <input
                type="password"
                name="confPassword"
                id="conf-password"
                placeholder="• • • • • • • •"
                value={formValues.confPassword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.confPassword}</p>
          </div>

          <Button type="submit" filled>
            <span className="btn_style"></span>
            <span className="btn_style"></span>
            <span className="btn_style"></span>
            <span className="btn_style"></span>
            Crear cuenta
          </Button>

          <p className="ancor_register">
            ¿Ya tienes una cuenta? {/*eslint-disable-next-line*/}
            <a
              className="containerLogo"
              onClick={() => {
                navigate("/login");
              }}
            >
              <span>Iniciar sesión</span>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
