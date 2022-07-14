// import React, { useContext, useEffect, useState } from 'react'
// import Swal from 'sweetalert2';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import Button from 'components/utils/Button';
// import { UserContext } from 'context/AppContext';


// const Successful = () => {

//     const navigate = useNavigate()

//     const { id } = useParams();
//     const [productById, setProductById] = useState(null);

//     useEffect(() => {
//         getProductById(id);
//     }, []);

//     function getProductById(id) {
//         axios
//             .get(`/products/id/${id}`)
//             .then((product) => {
//                 setProductById(product.data);
//                 console.log(product.data);
//             })
//             .catch((error) => console.log(error));
//     }

//     function statusSuccessful() {
//         axios
//             .get(`products/id/${id}`)
//             .then((response) => {
//                 if (response.status === 200) {
//                     setCurrentContext({ isLogged: true })
//                     navigate(`/products/id/${id}/reserve/successful`)
                    
//                 }
//             })
//             .catch((err) => {
//                 console.warn(err)
//                 // Reemplazar alert por mensaje de error 
//                 Swal.fire({
//                     icon: 'error',
//                     toast: true,
//                     position: 'center',
//                     showConfirmButton: true,
//                     text: 'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde',
//                     iconColor: 'var(--color_primary)',
//                     confirmButtonColor: 'var(--color_primary)',
//                     confirmButtonText: 'Aceptar',
//                     customClass: {
//                         popup: 'alert-popup-class',
//                         confirmButton: 'alert-confirmButton-class'
//                     }
//                 }).then(() => {
//                     navigate("/")
//                 })
//             });
//     }

//     const showAlertTrue = () => {

//         Swal.fire({
//             imageUrl: 'https://ouch-cdn2.icons8.com/ZI5pVuEz3TA8rRK1mrXMrtrAtmoanRfQ1qFOqORoxZs/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjky/LzM5YTcxZWRiLWY4/NjAtNDMzZi1hZmM5/LTE4YmY4MGQzZmE5/Mi5zdmc.png',
//             imageHeight: 90,
//             title: `<h5 style='color:var(--color_primary)'>¡Muchas gracias!</h5>`,
//             html: `<span style='font-weight:bold'>Su reserva se ha realizado con éxito</span>`,
//             confirmButtonColor: 'var(--color_primary)',
//             backdrop: `rgba(250, 171, 147, 0.2)`,
//             padding: `1rem`,
//             timer: 3500,
//             timerProgressBar: true,
//             customClass: {
//                 popup: 'alert-popup-class',
//                 confirmButton: 'alert-confirmButton-class'
//             }
//         }).then(() => {
//             navigate("/")
//         })
//     }

//     const showAlertInfo = () => {
//         Swal.fire({
//             icon: 'warning',
//             toast: true,
//             position: 'top',
//             timer: 2500,
//             timerProgressBar: true,
//             showConfirmButton: false,
//             title: `<h5 style='color:#FFFFFF; font-weight: lighter'>Por favor, complete todos los campos obligatorios.</h5>`,
//             background: 'var(--color_secondary)',
//             iconColor: '#FFFFFF',
//         })/* .then(() => {
//             navigate("/")
//         }) */
//     }

//     const showAlertFalse = () => {
//         Swal.fire({
//             icon: 'error',
//             toast: true,
//             position: 'center',
//             showConfirmButton: true,
//             text: 'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde',
//             iconColor: 'var(--color_primary)',
//             confirmButtonColor: 'var(--color_primary)',
//             confirmButtonText: 'Aceptar',
//             customClass: {
//                 popup: 'alert-popup-class',
//                 confirmButton: 'alert-confirmButton-class'
//             }
//         }).then(() => {
//             navigate("/")
//         })
//     }
//     const [currentContext] = useContext(UserContext)

//     const handleClick = () => {
//         if (currentContext.isLogged) {
//             return navigate(`products/id/${id}`)
//         } else {
//             Swal.fire({
//                 icon: 'warning',
//                 toast: true,
//                 position: 'top',
//                 timer: 5000,
//                 showConfirmButton: false,
//                 title: `<h5 style='color:#AB011F; font-weight: 700'>Para realizar una reserva necesitas estar logueado.</h5>`,
//                 background: '#FAE0E1',
//                 iconColor: '#AB011F'
//             }).then(() => {
//                 navigate("/")
//             })
//         }
//     }

//     return (

//                 /* Cambiar por template de reserva */
//         <div>
//             <div onClick={handleClick}><Button onClick={() => showAlertTrue()}>a</Button></div>
//         </div>
//                  /* Cambiar por template de reserva */
//     )
// }

// export default Successful;