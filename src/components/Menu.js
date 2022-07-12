import React from "react";
import "../sass/components/Menu.scss";
import {Link} from "react-router-dom";

class Menu extends React.Component {


    render() {
        return <>{this.renderItems(this.props.items)}</>;
    }

    renderItems(items) {
        return items.map((item) => {
            return (
                <li className="nav-item px-5 py-3" key={item.url}>
                    <Link
                        className={`nav-link text-white ${window.location.pathname === item.url ? "nav-link--active" : ""}`}
                        to={item.url}
                        onClick={() => this.props.onChange(item.url)}
                    >
                        {item.name}
                    </Link>
                </li>
            );
        });
    }
}

export default Menu;
