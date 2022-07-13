import React from "react";
import Header from "../Header";
import AboutUs from "../AboutUs";
import FeatureSection from "../FeatureSection";
import {motion} from "framer-motion";
import "../../sass/pages/Home.scss";
import SuitableSection from "../SuitableSection";
import ItemSection from "../ItemSection";
import DownloadSection from "../DownloadSection";
import Weblog from "../Weblog";

const Home = () => {

    const aboutText1 =
        <p>
            اپلیکیشن لکسی، اولین پلنفرم هوشمند آموزش زبان انگلیسی میباشد که با بهره گیری از مناسب ترین متد آموزشی، شما
            میتوانید آموزش زبان را با آن شروع کنید. محتوای آموزشی این اپ، کاملا اصلی و به اصلاح ارجینال میباشد و تیم
            تولید محتوای لکسی بصورت تخصصی مشغول تولید محتوای آموزشی برای اپ بوده اند. همچین با استفاده از لکسی، هر 4
            مهارت اصلی شامل Reading, Listening, Writing, speaking به کاربر آموزش داده میشه و در پایان هر درس، آزمون
            هوشمند برای سنجش سطح کاربر گرفته میشود. در هر درس، تمریناتی وجود دارد که کاربر میبایست آنها را انجام داده و
            در برنامه آپلود کند و اینجاست که این تمرینات توسط معلمان تصحیح شده و به کاربر بازخورد داده میشود. وجود یک
            معلم که همیشه همراه کاربر باشد، لکسی را به بهترین برنامه برای آموزش زبان انگلسی تبدیل میکند.
        </p>
    return (
        <>
            <div className="container">
                <motion.div
                    initial={{opacity: 0, transitionDuration: "1s"}}
                    whileInView={{opacity: 1}}
                >
                    <Header/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, transitionDuration: "1s"}}
                    whileInView={{opacity: 1}}
                >
                    <AboutUs title>{aboutText1}</AboutUs>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}
            >
                <div className="" style={{backgroundColor: "#353535"}}>
                    <div className="container">
                        <FeatureSection/>
                    </div>
                </div>
            </motion.div>
            <div className="container">
                <motion.div
                    initial={{opacity: 0, transitionDuration: "1s"}}
                    whileInView={{opacity: 1}}
                >
                    <SuitableSection/>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}
            >
                <div className="" style={{backgroundColor: "#353535"}}>
                    <div className="container">
                        <ItemSection/>
                    </div>
                </div>
            </motion.div>
            <div className="container">
                <motion.div
                    initial={{opacity: 0, transitionDuration: "1s"}}
                    whileInView={{opacity: 1}}
                >
                    <DownloadSection/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, transitionDuration: "1s"}}
                    whileInView={{opacity: 1}}
                >
                    <Weblog/>
                </motion.div>
            </div>
        </>
    );
};

export default Home;