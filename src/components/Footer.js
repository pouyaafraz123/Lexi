import React from "react";
import "../sass/components/Footer.scss";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="row Footer-Section">
        <div className="col-lg-5 col-12 Footer-Section-1">
          <img
            style={{ width: "64px", height: "64px" }}
            className="img-fluid mb-3"
            src={require("../img/logo.png")}
            alt="logo"
          />
          <p style={{ lineHeight: "2" }}>
            اپلیکیشن لکسی، اولین پلنفرم هوشمند آموزش زبان انگلیسی میباشد که با
            بهره گیری از مناسب ترین متد آموزشی، شما میتوانید آموزش زبان را با آن
            شروع کنید. محتوای آموزشی این اپ، کاملا اصلی و به اصلاح ارجینال
            میباشد و تیم تولید محتوای لکسی بصورت تخصصی مشغول تولید محتوای آموزشی
            برای اپ بوده اند
          </p>
        </div>
        <div className="col-lg-2 col-12 Footer-Section-2 pt-4 mx-5">
          <h3 className="mb-4">دسترسی</h3>
          <div className="d-flex justify-content-between align-items-right flex-column">
            {this.renderLinks()}
          </div>
        </div>
        <div className="col-lg-3 col-12 Footer-Section-3 pt-4 ml-5">
          <h3 className="mb-4">مجوز ها</h3>
          <img
            className="img-fluid"
            src={require(`../img/img2.png`)}
            alt="access"
          />
        </div>
      </div>
    );
  }

  renderLinks() {
    const links = [
      {
        name: "صفحه اصلی",
        url: "/",
      },
      {
        name: "همکاری با ما",
        url: "/collaborate",
      },
      {
        name: "درباره ما",
        url: "/about-us",
      },
      {
        name: "قوانین و مقررات",
        url: "/rules",
      },
    ];

    return links.map((link) => {
      return <Link to={link.url} className={`${window.location.pathname === link.url ? "link__active" : ""}`} onClick={() => this.props.onChange(link.url)}>{link.name}</Link>;
    });
  }
}

export default Footer;
