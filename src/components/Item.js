import React from "react";

const Item = (props) => {
    return (
        <div>
            <img src={require(`../img/${props.img}.png`)} alt={"feature"}/>
            <div>{props.text}</div>
        </div>);
}

export default Item;