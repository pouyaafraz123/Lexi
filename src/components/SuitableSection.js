import React from "react";
import person from "../img/person.png";
import "../sass/components/SuitableSection.scss";
class SuitableSection extends React.Component {
  render() {
    return (
      <div className="row Suitable-Section">
        <div className="col-lg-6 col-12 mb-5 Suitable-Section-Text">
          <h3 className="mb-3">
            <strong>مناسب برای چه کسانی؟!</strong>
          </h3>
          <h5 className="mb-3">
            <strong>با لکسی آسان یاد بگیر</strong>
          </h5>
          <p className="small">
            تمام افرادی که علاقه دارند آموزش زبان انگلیسی را شروع کنند ام
            نمیخواهند در کلاس های حضوری شرکت کنند تا در وقت و هزینه خود صرفه
            جویی کنند، افرادی که قصد مهاجرت دارند، افرادی که میخواهند در آزمون
            های بین المللی شرکت کنند و نیاز دارند سطح زبانی خود را تقوین کنند.
            در یک کلام تمام افرادی که قصد دارند زبان انگلیسی را فراگیرند.
          </p>
        </div>
        <div className="col-lg-6 col-12 Suitable-Section-Image">
          <img
            className="img-fluid"
            src={require("../img/person.png")}
            alt={"mobile"}
          />
        </div>
      </div>
    );
  }
}

export default SuitableSection;
