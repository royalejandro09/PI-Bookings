import React, { useContext } from 'react'
import { UserContext } from 'context/AppContext';
import { UserData } from 'context/DataUserContext';
import { useNavigate } from "react-router";
import Admin from './Admin';


function Logged({ hidden = ''}) {

  const navigate = useNavigate();

  function capitalizeFirstLetter(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  }

    function handleLogOut() {
        setUserData(null)
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        navigate("/")
    }
// eslint-disable-next-line
    const [_, setCurrentContext] = useContext(UserContext)
    const { userData, setUserData } = useContext(UserData)

    return (
        <div className='container-main-header'>
            {userData?.role.name === "ADMIN" && <Admin hidden={hidden}/>}
        <div className= {`initUser__aux ${hidden}`} >
            <div className='initials'><span>{userData?.name[0].toUpperCase()}{userData?.lastName[0].toUpperCase()}</span></div>
            <p>Hola, <span>{capitalizeFirstLetter(userData?.name.toLowerCase())} {capitalizeFirstLetter(userData?.lastName.toLowerCase())}</span></p>
            <p onClick={()=> handleLogOut()} className='closeIcon'>X</p>
        </div>
        </div>
    )
}

export default Logged;

