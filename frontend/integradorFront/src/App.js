import Footer from "components/footer/Footer";
import React from "react";
import Header from "components/header/Header";
import Body from "components/body/Body";
import AppContext from "context/AppContext";
import DataUserContext from "context/DataUserContext";

const App = () => {
    return (
        <DataUserContext>
        <AppContext>
            <div className="app">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </AppContext>
        </DataUserContext>
    );
}

export default App;


