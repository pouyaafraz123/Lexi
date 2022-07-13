import React from "react";
import MyMap from "./GoogleMap";

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div>
                            <img src={require("../img/i1.png")} alt={"tel"}/>
                            <div>45 667 89 9-45 667 89 9</div>
                        </div>
                        <div>
                            <img src={require("../img/i2.png")} alt={"email"}/>
                            <div>lexi.ir</div>
                        </div>
                        <div>
                            <img src={require("../img/i3.png")} alt={"address"}/>
                            <div>قم خیابان معلم ساختمان لارا طبقه 3</div>
                        </div>
                        <div>
                            <MyMap
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <img src={require("../img/contact.png")} alt={"contact us"}/>
                </div>
            </div>
        );
    }
}

export default ContactUs;