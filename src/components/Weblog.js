import React from "react";
import "../sass/components/Weblog.scss";
import blog1 from "../img/blog1.png";
import blog2 from "../img/blog2.png";
import blog3 from "../img/blog3.png";

class Weblog extends React.Component {
  render() {
    return (
      <div className="Weblog-Section">
        <h3 className="mb-4">
          <strong>وبلاگ</strong>
        </h3>

        <div className="row d-flex justify-content-center mb-3">
          {this.renderBlogs()}
        </div>
      </div>
    );
  }

  renderBlogs = () => {
    const items = [
      {
        img: blog1,
        title: "جمله‌واره، عبارت و جمله",
        date: "یکشنبه 30 مرداد 98",
        text: "جمله‌واره، عبارت و جمله واحدهای دستوری هستند و بخش‌های مختلف کلام را تشکیل می‌دهند.",
      },
      {
        img: blog2,
        title: "افعال وجهی",
        date: "یکشنبه 30 مرداد 98",
        text: "افعال وجهی در زبان انگلیسی به فعل‌هایی گفته می‌شود که با ترکیب با فعل‌های اصلی معانی مختلفی از قبیل درخواست، توانایی، احتمال، اجازه، نصیحت و... را منتقل می‌کند",
      },
      {
        img: blog3,
        title: "آواشناسی",
        date: "یکشنبه 30 مرداد 98",
        text: "در این بخش با مبانی آواشناسی زبان انگلیسی و الفبای آواشناسی بیشتر آشنا می شویم",
      },
    ];

    return items.map((item) => {
      return (
        <div className={"blog col-lg-4 col-12"}>
          <div
            className={"back"}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
            }}
          >
            <div className="blog__inside">
              <div>
                <h6 className={"mb-2"}>
                  <strong>{item.title}</strong>
                </h6>
                <div className={"blog-date mb-2"}>{item.date}</div>
                <p>{item.text}</p>
              </div>
              <button className={"blog-button"}>
                <strong>ادامه مطلب</strong>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
}

export default Weblog;

// class Weblog extends React.Component {
//   render() {
//     return (
//       <div className="Weblog-Section">
//         <h3>
//           <strong>وبلاگ</strong>
//         </h3>
//         <div className="row mt-4">{this.renderBlogs()}</div>
//       </div>
//     );
//   }

//   renderBlogs = () => {
//     const items = [
//       {
//         img: "blog1",
//         title: "جمله‌واره، عبارت و جمله",
//         date: "یکشنبه 30 مرداد 98",
//         text: "جمله‌واره، عبارت و جمله واحدهای دستوری هستند و بخش‌های مختلف کلام را تشکیل می‌دهند.",
//       },
//       {
//         img: "blog2",
//         title: "افعال وجهی",
//         date: "یکشنبه 30 مرداد 98",
//         text: "افعال وجهی در زبان انگلیسی به فعل‌هایی گفته می‌شود که با ترکیب با فعل‌های اصلی معانی مختلفی از قبیل درخواست، توانایی، احتمال، اجازه، نصیحت و... را منتقل می‌کند",
//       },
//       {
//         img: "blog3",
//         title: "آواشناسی",
//         date: "یکشنبه 30 مرداد 98",
//         text: "در این بخش با مبانی آواشناسی زبان انگلیسی و الفبای آواشناسی بیشتر آشنا می شویم",
//       },
//     ];

//     return items.map((item) => {
//       return (
//         <div className="card bg-transparent border-0 col-lg-4 col-12 mb-4 WebLog-Section">
//           <div className="card-header border-0 bg-transparent WebLog-Section-Image">
//             <img
//               className="img-fluid card-img-top"
//               src={require("../img/" + item.img + ".png")}
//               alt="btn"
//             />
//           </div>
//           <div className="card-body WebLog-Section-Text">
//             <h6 className="">
//               <strong>{item.title}</strong>
//             </h6>
//             <p className="">{item.date}</p>
//             <p>{item.text}</p>
//             <a href="#" className="">
//               <strong>ادامه مطلب</strong>
//             </a>
//           </div>
//         </div>
//       );
//     });
//   };
// }

// export default Weblog;
