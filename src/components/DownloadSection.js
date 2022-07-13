import React from "react";
import "../sass/components/DownloadSection.scss";

class DownloadSection extends React.Component {
  render() {
    return (
      <div className="row Download-Section">
        <div className="col-lg-6 col-12 mb-2 Download-Section-Image">
          <img className="img-fluid" src={require(`../img/mobile2.png`)} />
        </div>
        <div className="col-lg-6 col-12">
          <div className="Download-Section-Text">
            <h3 className="mb-4">
              <strong>دانلود اپلیکیشن</strong>
            </h3>
            <h4 className="mb-4">
              <strong>با لکسی آسان یاد بگیر</strong>
            </h4>
            <p className="small">
              تمام افرادی که علاقه دارند آموزش زبان انگلیسی را شروع کنند ام
              نمیخواهند در کلاس های حضوری شرکت کنند تا در وقت و هزینه خود صرفه
              جویی کنند، افرادی که قصد مهاجرت دارند، افرادی که میخواهند در آزمون
              های بین المللی شرکت کنند و نیاز دارند سطح زبانی خود را تقوین کنند.
              در یک کلام تمام افرادی که قصد دارند زبان انگلیسی را فراگیرند.
            </p>
          </div>
          <div className="row mt-5 Download-Section-Text-Image">
            <div className="col-lg-4 col-12 mb-2 text-center">
              <img
                className="img-fluid"
                src={require("../img/btn1.png")}
                alt="btn"
              />
            </div>
            <div className="col-lg-4 col-12 mb-2 text-center">
              <img
                className="img-fluid"
                src={require("../img/btn3.png")}
                alt="btn"
              />
            </div>
            <div className="col-lg-4 col-12 mb-2 text-center">
              <img
                className="img-fluid"
                src={require("../img/btn2.png")}
                alt="btn"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadSection;
