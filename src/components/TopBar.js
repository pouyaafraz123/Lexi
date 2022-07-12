import React from "react";
import Menu from "./Menu";
import "../sass/components/TopBar.scss";
class TopBar extends React.Component {
  render() {
    const menuItems = ["صفحه اصلی", "همکاری با ما", "درباره ما"];
    return (
      <nav className="navbar navbar-expand-md bg-transparent navbar-dark">
        <a className="navbar-brand" href="#">
          <img
            style={{ width: "64px" }}
            className="img-fluid"
            src={require("../img/logo.png")}
            alt={"logo"}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <Menu items={menuItems} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopBar;
