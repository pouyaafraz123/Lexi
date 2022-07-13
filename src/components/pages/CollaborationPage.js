import React from "react";
import "../../sass/pages/CollaborationPage.scss";
import Collaboration from "../Collaboration";
import {motion} from "framer-motion";

const CollaborationPage = () => {
    return (
        <div className={"container"}>
            <motion.div
                initial={{opacity: 0, transitionDuration: "1s"}}
                whileInView={{opacity: 1}}>
                <Collaboration/>
            </motion.div>
        </div>
    );
}

export default CollaborationPage;