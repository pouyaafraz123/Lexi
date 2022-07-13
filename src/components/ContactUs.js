import React from "react";
import MyMap from "./GoogleMap";
import "../sass/pages/CollaborationPage.scss";

class ContactUs extends React.Component {
  render() {
    return (
      <div className="ContactUs-Section">
        <h3 className="text-light mb-5">
          <strong>تماس با ما</strong>
        </h3>
        <div className="row">
          <div className="col-lg-6 col-12 mb-2">
            <div className="card border-0 bg-transparent ContactUs-Section-Text">
              <div className="card-body row pt-5 pb-5">
                <div className="col-lg-12 col-12 mb-5">
                  <div className="d-flex justify-content-start align-items-center pb-3 pr-lg-3 custom-border">
                    <img
                      className="img-fluid pr-2"
                      src={require("../img/i1.png")}
                      alt={"tel"}
                    />
                    <div className="mr-5">45 667 89 9-45 667 89 9</div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center pb-3 pt-3 pr-lg-3 custom-border">
                    <img
                      className="img-fluid pr-2"
                      src={require("../img/i2.png")}
                      alt={"email"}
                    />
                    <div className="mr-5">lexi.ir</div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center pt-3 pr-lg-3">
                    <img
                      className="img-fluid pr-2"
                      src={require("../img/i3.png")}
                      alt={"address"}
                    />
                    <div className="mr-5">
                      قم خیابان معلم ساختمان لارا طبقه 3
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-12 d-flex justify-content-center align-items-center">
                  <div>
                    <MyMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 ContactUs-Section-Image">
            <img
              className="img-fluid"
              src={require("../img/contact.png")}
              alt={"contact us"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
