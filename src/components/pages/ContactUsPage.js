import React from "react";
import "../../sass/pages/ContactUsPage.scss";
import ContactUs from "../ContactUs";
import {motion} from "framer-motion";
const ContactUsPage = () => {
  return (
    <div className="container">
        <motion.div
            initial={{opacity: 0, transitionDuration: "1s"}}
            whileInView={{opacity: 1}}>
      <ContactUs />
        </motion.div>
    </div>
  );
};

export default ContactUsPage;
