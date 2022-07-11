import React from "react";

class Menu extends React.Component{
    render() {
        return (
            <div>
                {this.renderItems(this.props.items)}
            </div>
        );
    }

    renderItems(items) {
        return items.map(item=>{
            return (
                <a href={"#"}>
                    {item}
                </a>
            );
        })
    }
}

export default Menu;