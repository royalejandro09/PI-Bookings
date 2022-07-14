import React, { useState, createContext } from 'react'

export const UserContext = createContext(); 

const AppContext = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({isLogged: false });

    return (
        <div>
            <UserContext.Provider value={[currentUser, setCurrentUser]}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default AppContext;