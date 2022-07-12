import React from "react";
import person from "../img/person.png";
import "../sass/components/SuitableSection.scss";
class SuitableSection extends React.Component {
  render() {
    return (
      <div style={{marginTop: '250px'}}>
        <h3>مناسب برای چه کسانی؟!</h3>
        <h4>با لکسی آسان یاد بگیر</h4>
        <p>
          تمام افرادی که علاقه دارند آموزش زبان انگلیسی را شروع کنند ام
          نمیخواهند در کلاس های حضوری شرکت کنند تا در وقت و هزینه خود صرفه جویی
          کنند، افرادی که قصد مهاجرت دارند، افرادی که میخواهند در آزمون های بین
          المللی شرکت کنند و نیاز دارند سطح زبانی خود را تقوین کنند. در یک کلام
          تمام افرادی که قصد دارند زبان انگلیسی را فراگیرند.
        </p>
        <img
          className="img-fluid"
          src={require("../img/person.png")}
          alt={"mobile"}
        />
      </div>
    );
  }
}

export default SuitableSection;
