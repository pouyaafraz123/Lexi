import React from "react";
import "../sass/components/Menu.scss";
class Menu extends React.Component {
  render() {
    return <>{this.renderItems(this.props.items)}</>;
  }

  renderItems(items) {
    return items.map((item) => {
      return (
        <li className="nav-item px-5 py-3">
          <a className="nav-link text-white" href={"#"}>
            {item}
          </a>
        </li>
      );
    });
  }
}

export default Menu;
