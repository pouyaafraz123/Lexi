import React from "react";
import "../sass/components/Header.scss";
class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={require("../img/mobile.png")} alt={"mobile"}/>
                </div>
                <div>
                    <h1>
                        آموزش زبان راحت تر از همیشه!!!
                    </h1>
                    <p>
                        اپلیکیشن لکسی، اولین پلنفرم هوشمند آموزش زبان انگلیسی میباشد که با بهره گیری از مناسب ترین متد
                        آموزشی، شما میتوانید آموزش زبان را با آن شروع کنید. محتوای آموزشی این اپ، کاملا اصلی و به اصلاح
                        ارجینال میباشد و تیم تولید محتوای لکسی بصورت تخصصی مشغول تولید محتوای آموزشی برای اپ بوده اند.
                    </p>
                    <button>دانلود اپلیکیشن</button>
                </div>
                <div>
                    <div>
                        <img src={require("../img/icon1.png")} alt={"icon"}/>
                        <div>11.254</div>
                        <div>نصب اپلیکیشن</div>
                    </div>
                    <div>
                        <img src={require("../img/icon2.png")} alt={"icon"}/>
                        <div>7.385</div>
                        <div>تعداد کاربران</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;