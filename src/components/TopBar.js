import React from "react";
import Menu from "./Menu";
import "../sass/components/TopBar.scss";
class TopBar extends React.Component{
    render() {
        const menuItems = ["صفحه اصلی","همکاری با ما","درباره ما"];
        return (
            <div>
                <img src={require("../img/logo.png")} alt={"logo"}/>
                <Menu items={menuItems} />
            </div>
        );
    }
}

export default TopBar;