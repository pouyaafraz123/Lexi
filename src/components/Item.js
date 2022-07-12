import React from "react";
import '../sass/components/Item.scss';

const Item = (props) => {
    return (
        <div className="Feature-Card my-4 mx-4">
            <img className="img-fluid" src={require(`../img/${props.img}.png`)} alt={"feature"}/>
            <div className="pt-4">{props.text}</div>
        </div>);
}

export default Item;