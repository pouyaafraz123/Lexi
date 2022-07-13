import React from "react";
import Item from "./Item";
import "../sass/components/ItemSection.scss";
class ItemSection extends React.Component {
  render() {
    return (
      <div className="row py-5 d-flex justify-content-center flex-row-reverse">
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    const items = [
      {
        key: "f5",
        text: "پشتیبانی و مشاوره",
      },
      {
        key: "f6",
        text: "صرفه جویی در هزینه",
      },
      {
        key: "f7",
        text: "محتوای تعاملی",
      },
    ];

    return items.map((item) => {
      return (
        <div className="col-lg-4 col-12 d-flex justify-content-center Item-Section-Card">
          <Item img={item.key} key={item.key} text={item.text} />
        </div>
      );
    });
  }
}

export default ItemSection;
