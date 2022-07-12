import React from "react";
import TopBar from "../TopBar";
import Header from "../Header";
import AboutUs from "../AboutUs";
import FeatureSection from "../FeatureSection";
import {motion} from "framer-motion";
import "../../sass/pages/Home.scss";
import SuitableSection from "../SuitableSection";
import ItemSection from "../ItemSection";
import DownloadSection from "../DownloadSection";

const Home = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <Header/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <AboutUs/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <div style={{backgroundColor: "#353535"}}>
                    <div className="container">
                        <FeatureSection/>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <SuitableSection/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <ItemSection/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <DownloadSection/>
            </motion.div>

        </>
    );
}

export default Home;