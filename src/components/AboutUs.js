import React from "react";
import image from "../img/icon3.png";
import "../sass/components/AboutUs.scss";
class AboutUs extends React.Component {
  render() {
    const buttonStyle = {
      backgroundColor: "#FF9291",
      backgroundImage: `url(${image}),linear-gradient(0deg, #FF9291, #FF9291)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "30px",
      width: "100px",
      height: "100px",
      borderWidth: 0,
      borderRadius: "500px",
      outline: "5px 5px 5px 0px solid #FF9291",
      outlineOffset: "10px",
    };
    return (
      <div className="AboutUs-Section">
        <h1 className="text-light mb-5">
          <strong>درباره ما</strong>
        </h1>
        <div className="row">
          <div className="col-lg-6 col-12 mb-2 text-white">
            <h3 className="mb-4">با لکسی آسان یاد بگیر</h3>
            <p className="pl-3">
              اپلیکیشن لکسی، اولین پلنفرم هوشمند آموزش زبان انگلیسی میباشد که با
              بهره گیری از مناسب ترین متد آموزشی، شما میتوانید آموزش زبان را با
              آن شروع کنید. محتوای آموزشی این اپ، کاملا اصلی و به اصلاح ارجینال
              میباشد و تیم تولید محتوای لکسی بصورت تخصصی مشغول تولید محتوای
              آموزشی برای اپ بوده اند. همچین با استفاده از لکسی، هر 4 مهارت اصلی
              شامل Reading, Listening, Writing, speaking به کاربر آموزش داده
              میشه و در پایان هر درس، آزمون هوشمند برای سنجش سطح کاربر گرفته
              میشود. در هر درس، تمریناتی وجود دارد که کاربر میبایست آنها را
              انجام داده و در برنامه آپلود کند و اینجاست که این تمرینات توسط
              معلمان تصحیح شده و به کاربر بازخورد داده میشود. وجود یک معلم که
              همیشه همراه کاربر باشد، لکسی را به بهترین برنامه برای آموزش زبان
              انگلسی تبدیل میکند.
            </p>
          </div>
          <div className="col-lg-6 col-12 mb-2 pt-4 AboutUs-Section-Media">
            <img
              className="img-fluid"
              src={require("../img/img1.png")}
              alt={"about us"}
            />
            <button style={buttonStyle}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
