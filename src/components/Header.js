import React from "react";
import "../sass/components/Header.scss";
class Header extends React.Component {
  render() {
    return (
      <div className="row mt-5 mb-5 Header-Section">
        <div className="col-lg-6 col-12 mb-2 Header-Section-image">
          <img
            className="img-fluid"
            src={require("../img/mobile.png")}
            alt={"mobile"}
          />
        </div>
        <div
          className="col-lg-6 col-12 d-flex flex-column Header-Section-text"
          style={{ marginRight: "-50px" }}
        >
          <div className="pt-5">
            <h3 className="text-white pt-5 mt-5">
              <strong> آموزش زبان راحت تر از همیشه!!!</strong>
            </h3>
            <p className="text-white pt-3">
              اپلیکیشن لکسی، اولین پلنفرم هوشمند آموزش زبان انگلیسی میباشد که با
              بهره گیری از مناسب ترین متد آموزشی، شما میتوانید آموزش زبان را با
              آن شروع کنید. محتوای آموزشی این اپ، کاملا اصلی و به اصلاح ارجینال
              میباشد و تیم تولید محتوای لکسی بصورت تخصصی مشغول تولید محتوای
              آموزشی برای اپ بوده اند.
            </p>
            <button className="mt-5 shadow">دانلود اپلیکیشن</button>
          </div>
          <div className="d-flex flex-row justify-content-end align-items-center mt-5 pt-5 Header-Section-text-info">
            <div className="d-flex flex-row justify-content-between align-items-center pl-4">
              <img
                style={{ width: "38px", height: "38px" }}
                className="img-fluid"
                src={require("../img/icon1.png")}
                alt={"icon"}
              />
              <div className="d-flex flex-column justify-content-between text-left pr-4">
                <h4>
                  <strong className="text-white">11.254</strong>
                </h4>
                <small className="text-muted">نصب اپلیکیشن</small>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center border-right pr-4">
              <img
                style={{ width: "29px", height: "40.95px" }}
                className="img-fluid"
                src={require("../img/icon2.png")}
                alt={"icon"}
              />
              <div className="d-flex flex-column justify-content-between text-left pr-4">
                <h4>
                  <strong className="text-white">7.385</strong>
                </h4>
                <small className="text-muted">تعداد کاربران</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
