import React from "react";

class DownloadSection extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={require(`../img/mobile2.png`)}/>
                </div>
                <div>
                    <div>
                        <h3>
                            دانلود اپلیکیشن
                        </h3>
                        <h4>
                            با لکسی آسان یاد بگیر
                        </h4>
                        <p>
                            تمام افرادی که علاقه دارند آموزش زبان انگلیسی را شروع کنند ام نمیخواهند در کلاس های حضوری
                            شرکت کنند
                            تا در وقت و هزینه خود صرفه جویی کنند، افرادی که قصد مهاجرت دارند، افرادی که میخواهند در
                            آزمون های
                            بین المللی شرکت کنند و نیاز دارند سطح زبانی خود را تقوین کنند. در یک کلام تمام افرادی که قصد
                            دارند
                            زبان انگلیسی را فراگیرند.
                        </p>
                    </div>
                    <div>
                        <button><img src={require("../img/btn1.png")} alt="btn"/>دریافت از <strong>بازار </strong></button>
                        <button><img src={require("../img/btn2.png")} alt="btn"/>دریافت نسخه ios از <strong>سیب اپ </strong></button>
                        <button><img src={require("../img/btn3.png")} alt="btn"/>دریافت از <strong>Google Play </strong></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadSection;