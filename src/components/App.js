import React from "react";
import "../sass/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import CollaborationPage from "./pages/CollaborationPage";
import ContactUsPage from "./pages/ContactUsPage";
import RulesPage from "./pages/RulesPage";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={"app"}>
          <div className="container">
            <div className="pt-5">
              <motion.div
                initial={{ opacity: 0, transitionDuration: "1s" }}
                whileInView={{ opacity: 1 }}
              >
                <TopBar />
              </motion.div>
            </div>
          </div>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about-us"} exact component={AboutUsPage} />
            <Route path={"/collaborate"} exact component={CollaborationPage} />
            <Route path={"/contact-us"} exact component={ContactUsPage} />
            <Route path={"/rules"} exact component={RulesPage} />
          </Switch>
          <div className="container" style={{backgroundColor: "#353535", borderRadius: '12px'}}>
            <motion.div
              initial={{ opacity: 0, transitionDuration: "1s" }}
              whileInView={{ opacity: 1 }}
            >
              <Footer />
            </motion.div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
