import React from "react";

class Collaboration extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h3>همکاری با ما</h3>
                    <p>و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد با هدف بهبود ابزارهای
                       کاربردی می باشد. کتابهای زیادی در شصت
                    </p>
                    <input type="text" placeholder={"نام و نام خانوادگی خود را وارد کنید"}/>
                    <input type="text" placeholder={"تاریخ تولد"}/>
                    <input type="text" placeholder={"شماره تماس"}/>
                    <input type="text" placeholder={"ایمیل"}/>
                    <input type="text" placeholder={"تحصیلات خود را وارد نمایید"}/>
                    <input type="text" placeholder={"لطفا رزومه خود را آپلود کنید"}/>
                    <div>
                        <input type={"checkbox"} id={"check"}/>
                        <label htmlFor="check">قوانین و مقررات را قبول دارم</label>
                    </div>
                    <button>ارسال</button>
                </div>
                <div>
                    <img src={require("../img/clb.png")} alt={"collaboration"}/>
                </div>
            </div>
        );
    }
}

export default Collaboration;