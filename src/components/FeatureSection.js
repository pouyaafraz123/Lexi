import React from "react";
import "../sass/components/FeatureSection.scss";
class FeatureSection extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.renderFeatures()}
                </div>
                <div>
                    <h3>ویژگی لکسی</h3>
                    <p>اپلیکیشن لکسی، اولین پلنفرم هوشمند آموزش زبان انگلیسی میباشد که با بهره گیری از مناسب ترین متد
                       آموزشی، شما میتوانید آموزش زبان را با آن شروع کنید. محتوای آموزشی این اپ، کاملا اصلی و به اصلاح
                       ارجینال میباشد و تیم تولید محتوای لکسی بصورت تخصصی مشغول تولید محتوای آموزشی برای اپ بوده اند.
                       همچین با استفاده از لکسی، هر 4 مهارت اصلی شامل Reading, Listening, Writing, speaking به کاربر
                       آموزش داده میشه و در پایان هر درس، آزمون هوشمند برای سنجش سطح کاربر گرفته میشود. در هر درس،
                       تمریناتی وجود دارد که کاربر میبایست آنها را انجام داده و در برنامه آپلود کند و اینجاست که این
                       تمرینات توسط معلمان تصحیح شده و به کاربر بازخورد داده میشود. وجود یک معلم که همیشه همراه کاربر
                       باشد، لکسی را به بهترین برنامه برای آموزش زبان انگلسی تبدیل میکند.</p>
                </div>
            </div>
        );
    }

    renderFeatures() {
        const features = [
            {text: "تعیین سطح رایگان", key: 1},
            {text: "استاد همراه", key: 2},
            {text: "تولید محتوا", key: 3},
            {text: "مدرک بین المللی", key: 4}
        ];
        return features.map(feature => {
            return (
                <div>
                    <img src={require(`../img/f${feature.key}.png`)} alt={"feature"}/>
                    <div>{feature.text}</div>
                </div>
            );
        });
    }
}

export default FeatureSection;