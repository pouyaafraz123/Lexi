import React from "react";

class Collaboration extends React.Component {
  render() {
    return (
      <div className="row Collaboration-Section">
        <div className="col-lg-7 col-12 mb-4 Collaboration-Section-Text">
          <h3 className="mb-4">همکاری با ما</h3>
          <p className="mb-5">
            و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
            با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
          </p>
          <div className="row Collaboration-Section-Inputs">
            <input
              className="col-lg-5 col-12 mb-3 ml-lg-4 custom-input"
              type="text"
              placeholder={"نام و نام خانوادگی خود را وارد کنید"}
            />
            <input
              className="col-lg-5 col-12 mb-3 custom-input"
              type="text"
              placeholder={"تاریخ تولد"}
            />
            <input
              className="col-lg-5 col-12 mb-3 ml-lg-4 custom-input"
              type="text"
              placeholder={"شماره تماس"}
            />
            <input
              className="col-lg-5 col-12 mb-3 custom-input"
              type="text"
              placeholder={"ایمیل"}
            />
            <input
              className="col-lg-5 col-12 mb-3 ml-lg-4 custom-input"
              type="text"
              placeholder={"تحصیلات خود را وارد نمایید"}
            />
            <input
              className="col-lg-5 col-12 mb-3 custom-input"
              type="text"
              placeholder={"لطفا رزومه خود را آپلود کنید"}
            />
            <div className="custom-control custom-checkbox col-lg-5 col-12 mb-3 ml-lg-4">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck"
                name="example1"
              />
              <label className="custom-control-label pr-4" for="customCheck">
                قوانین و مقررات را قبول دارم
              </label>
            </div>
            <button className="col-lg-5 col-12 mb-2 custom-button">
              <small>ارسال</small>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-12 Collaboration-Section-Image">
          <img
            className="img-fluid"
            src={require("../img/clb.png")}
            alt={"collaboration"}
          />
        </div>
      </div>
    );
  }
}

export default Collaboration;
