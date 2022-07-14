import React from 'react'
import { useNavigate } from "react-router";


const Admin = ({ hidden }) => {
  const navigate = useNavigate();


    function handleAdmin() {
        navigate("/admin");
    }
  return (
    <div className={`container-admin ${hidden}`} onClick={() => handleAdmin()}>
        <p className='p-admin'>Administración</p>
    </div>
  )
}

export default Admin