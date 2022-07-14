import React, { useState, createContext, useEffect } from "react";

export const UserData = createContext();

const DataUserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    dataUser()
  }, [])
  

 function dataUser() {
  if (localStorage.getItem("user") !== null) {
    console.log(localStorage.getItem("user"));
    setUserData(JSON.parse(localStorage.getItem("user")))
  } else {
    console.log("NO ESTA LOGEADO");
  }
 }

  return (
    <UserData.Provider value={{userData, setUserData}}>
      {children}
    </UserData.Provider>
  );
};

export default DataUserContext;
