import React, { useEffect, useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
      {/* Front End */}
        <div className="services__content">
          <div>
            <i className="bx bxs-palette services__icon"></i>
            <h3 className="services__title">Web <br /> Developer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Service with 3 years of experience. Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  {/* พัฒนา Web Application ในรูปแบบ RESTful API */}
                  Develop Web applications to support company's and get requirement from user.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  {/* พัฒนาส่วน Front-End โดยใช้ภาษา HTML, CSS, JavaScript TypeScript, Angular Framework */}
                  Analyze, design, develop, as well as implement RESTful services and APIs
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  {/* CSS Framework Bootstrap, Angular Material */}
                  Apply the latest software design techniques and contribute to the technical design of new solutions
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  Modify and maintain the existing applications to meet business requirements.
                  {/* พัฒนาส่วน Back-End โดยใช้ Node.js, PHP, MySQL, MS SQL Server */}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  Write object-oriented, clean, and maintainable code
                  {/* เทคโนโลยีที่ใช้ GIT, Docker, Redis, Elasticsearch, Firebase, kafka */}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/* IT Engineer */}
        <div className="services__content">
          <div>
            <i className="bx bx-desktop services__icon"></i>
            <h3 className="services__title">IT <br /> Engineer</h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">IT Engineer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality work to companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                    {/* ดูแลแก้ไข Hardware, Software, โปรแกรม ERP */}
                    Support and troubleshooting of hardware, sofrware, ERP problems to the end-users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                   {/* บริหารจัดการ User account, Email account */}
                   Managing, monitoring and troubleshooting daily batch and backup processes.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  {/* สำรองข้อมูลและตั้งค่าอุปกรณ์อาทิ veeam, switch cisco, firewall, router, server, cctv */}
                  Develop software and programs to meet the IT needs of a company.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  {/* ดูแลจัดการสต็อก และเบิก-จ่าย อุปกรณ์สารสนเทศ */}
                  Researched, tested, or verified proper functioning of software patches and fixes.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  {/* ศึกษาและเรียนรู้ Tool และ Technology ใหม่ๆ เพื่อพัฒนาระบบภายในองค์กร */}
                  Configuring, deploying and maintaining the Cisco firewalls, switches and routers.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="serviers__modal-info">
                  {/* ออกแบบและพัฒนา Web Application เพื่อใช้งานภายในองค์กร */}
                  Conducted computer technology training with all new staff.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services