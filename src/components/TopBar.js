import React from "react";
import Menu from "./Menu";
import "../sass/components/TopBar.scss";
import {Link} from "react-router-dom";

class TopBar extends React.Component {
    render() {
        const menuItems = [
            {name: "صفحه اصلی", url: "/"},
            {name: "همکاری با ما", url: "/collaborate"},
            {name: "درباره ما", url: "/about-us"}
        ];
        return (
            <nav className="navbar navbar-expand-md bg-transparent navbar-dark">
                <Link className="navbar-brand logo" to="/">
                    <img
                        style={{width: "64px"}}
                        className="img-fluid"
                        src={require("../img/logo.png")}
                        alt={"logo"}
                    />
                </Link>
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
                        <Menu items={menuItems}/>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopBar;
