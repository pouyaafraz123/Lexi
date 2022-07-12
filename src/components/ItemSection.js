import React from "react";
import Item from "./Item";
import "../sass/components/ItemSection.scss";
class ItemSection extends React.Component{
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }

    renderItems(){
        const items = [
            {
                key:"f5",
                text:"پشتیبانی و مشاوره"
            },
            {
                key:"f6",
                text:"صرفه جویی در هزینه"
            },
            {
                key:"f7",
                text:"محتوای تعاملی"
            }
        ];

        return items.map(item=>{
           return (
               <Item img={item.key} key={item.key} text={item.text}/>
           );
        });
    }
}

export default ItemSection;