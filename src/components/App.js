import React from "react";
import "../sass/App.scss";
import TopBar from "./TopBar";
import Header from "./Header";
import AboutUs from "./AboutUs";
import FeatureSection from "./FeatureSection";

const App = () => {
  return (
    <>
      <div className="app">
        {/*<div className={"circle"}>
            </div>
            <div className={"app__inside"}>
            </div>*/}

        <div className="container">
          <div className="pt-5">
            <TopBar />
            <Header />
            <AboutUs />
          </div>
        </div>
        <div style={{ backgroundColor: "#353535" }}>
          <div className="container">
            <FeatureSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
