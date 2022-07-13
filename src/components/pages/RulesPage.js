import React from "react";
import "../../sass/pages/RulesPage.scss";
import Rules from "../Rules";
import {motion} from "framer-motion";
const RulesPage = () => {
    return (
        <div className={"container"}>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <Rules/>
            </motion.div>
        </div>
    );
}

export default RulesPage;