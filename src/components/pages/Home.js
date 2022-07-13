import React from "react";
import TopBar from "../TopBar";
import Header from "../Header";
import AboutUs from "../AboutUs";
import FeatureSection from "../FeatureSection";
import { motion } from "framer-motion";
import "../../sass/pages/Home.scss";
import SuitableSection from "../SuitableSection";
import ItemSection from "../ItemSection";
import DownloadSection from "../DownloadSection";
import Weblog from "../Weblog";

const Home = () => {
  return (
    <>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, transitionDuration: "1s" }}
          whileInView={{ opacity: 1 }}
        >
          <Header />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transitionDuration: "1s" }}
          whileInView={{ opacity: 1 }}
        >
          <AboutUs />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, transitionDuration: "1s" }}
        whileInView={{ opacity: 1 }}
      >
        <div className="" style={{ backgroundColor: "#353535" }}>
          <div className="container">
            <FeatureSection />
          </div>
        </div>
      </motion.div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, transitionDuration: "1s" }}
          whileInView={{ opacity: 1 }}
        >
          <SuitableSection />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, transitionDuration: "1s" }}
        whileInView={{ opacity: 1 }}
      >
        <div className="container">
          <div className="container" style={{ backgroundColor: "#353535" , borderRadius: '12px'}}>
            <ItemSection />
          </div>
        </div>
      </motion.div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, transitionDuration: "1s" }}
          whileInView={{ opacity: 1 }}
        >
          <DownloadSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transitionDuration: "1s" }}
          whileInView={{ opacity: 1 }}
        >
          <Weblog />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
