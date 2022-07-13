import React from "react";
import "../sass/components/Footer.scss";
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={require("../img/logo.png")} alt="logo"/>
                    <p>
                        اپلیکیشن لکسی، اولین پلنفرم هوشمند آموزش زبان انگلیسی میباشد که با بهره گیری از مناسب ترین متد
                        آموزشی، شما میتوانید آموزش زبان را با آن شروع کنید. محتوای آموزشی این اپ، کاملا اصلی و به اصلاح
                        ارجینال میباشد و تیم تولید محتوای لکسی بصورت تخصصی مشغول تولید محتوای آموزشی برای اپ بوده اند
                    </p>
                </div>
                <div>
                    <h6>
                        دسترسی
                    </h6>
                    <div>
                        {this.renderLinks()}
                    </div>
                </div>
                <div>
                    <h6>
                        مجوز ها
                    </h6>
                    <img src={require(`../img/img2.png`)} alt="access"/>
                </div>
            </div>
        );
    }

    renderLinks() {
        const links = [
            {
                name:"صفحه اصلی",
                url:"/"
            },
            {
                name:"همکاری با ما",
                url:"/collaborate"
            },
            {
                name:"درباره ما",
                url:"/about-us"
            },
            {
                name:"قوانین و مقررات",
                url:"/rules"
            }
        ];

        return links.map(link=>{
            return <Link to={link.url}>{link.name}</Link>;
        });
    }
}

export default Footer;