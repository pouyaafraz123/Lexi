import React from "react";
import image from "../img/icon3.png";
import "../sass/components/AboutUs.scss";
class AboutUs extends React.Component {
  render() {
    const buttonStyle = {
      backgroundColor: "#FF9291",
      backgroundImage: `url(${image}),linear-gradient(0deg, #FF9291, #FF9291)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "30px",
      width: "100px",
      height: "100px",
      borderWidth: 0,
      borderRadius: "500px",
      outline: "5px solid #FF9291",
      outlineOffset: "10px",
    };
    return (
      <div className="AboutUs-Section">
        <h1 className="text-light mb-5">
          <strong>درباره ما</strong>
        </h1>
        <div className="row">
          <div className="col-lg-6 col-12 mb-2 text-white">
            {this.props.title?<h3 className="mb-4">با لکسی آسان یاد بگیر</h3>:""}
            {this.props.children}
          </div>
          <div className="col-lg-6 col-12 mb-2 pt-4 AboutUs-Section-Media">
            <img
              className="img-fluid"
              src={require("../img/img1.png")}
              alt={"about us"}
            />
            <button style={buttonStyle}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
