import React from "react";
import "../sass/App.scss";
import TopBar from "./TopBar";
import Header from "./Header";
import AboutUs from "./AboutUs";
import FeatureSection from "./FeatureSection";

const App = () => {
    return (
        <div className="app">
            {/*<div className={"circle"}>
            </div>
            <div className={"app__inside"}>
            </div>*/}


            <TopBar/>
            <Header/>
            <AboutUs/>
            <FeatureSection/>
        </div>
    );
}

export default App;
