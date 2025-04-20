import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={
            toggleState === 1
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          } onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={
            toggleState === 2
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          } onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div className={
            toggleState === 1
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor Degrees</h3>
                <span className="qualification__subtitle">Surindra Rajabhat University - Bachelor Of Science In Information Technology</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Vocational Certificate</h3>
                <span className="qualification__subtitle">Surin Polytechnic College - Accounting</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2006 - 2009
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior High School</h3>
                <span className="qualification__subtitle">Jaroenratwittaya School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2004 - 2006
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>

          {/* Experience */}
          <div className={
            toggleState === 2
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }>
            {/* BHUMIRAJANAKARINDRA KIDNEY INSTITUTE HOSPITAL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT Application Support</h3>
                <span className="qualification__subtitle">BHUMIRAJANAKARINDRA KIDNEY INSTITUTE HOSPITAL - Bangkok</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul. 2024 - Present
                </div>
                <div className="qualification__work-experience">
                  <p>&#x2022; Developed web applications to meet the specific needs of each department, beyond the purchased software and applications.</p>
                  <p>&#x2022; Managed and resolved issues related to software/hardware, network, printers, and label printers.</p>
                  <p>&#x2022; Provided support and consultation on the usage of applications.</p>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* AQUA NISHIHARA CORPORATION LIMITED */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Programmer</h3>
                <span className="qualification__subtitle">AQUA NISHIHARA CORPORATION LIMITED - Bangkok</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep. 2023 - Apr. 2024
                </div>
                <div className="qualification__work-experience">
                  <p>&#x2022; Gathered and analyzed user requirements and issues.</p>
                  <p>&#x2022; Developed web applications to support departmental workflows, beyond the functionalities provided by the ERP system.</p>
                  <p>&#x2022; Created user manuals for system usage.</p>
                  <p>&#x2022; Researched new technologies to continuously improve and develop software.</p>
                </div>
              </div>
            </div>
            {/* Easyfo */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programmer</h3>
                <span className="qualification__subtitle">EASYFO CO., LTD. - Bangkok</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug. 2020 - Sept. 2022
                </div>
                <div className="qualification__work-experience">
                  <p>&#x2022; Developed a hotel management system using RESTful API architecture.</p>
                  <p>&#x2022; Performed testing and monitored development progress to ensure alignment with requirements.</p>
                  <p>&#x2022; Researched and integrated new technologies to continuously enhance and improve software systems.</p>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Agrorepax */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">IT Support</h3>
                <span className="qualification__subtitle">AGFOREPAX INDUSTRIES CO., LTD. - Samut Prakan</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar. 2019 - Mar. 2020
                </div>
                <div className="qualification__work-experience">
                  <p>&#x2022; Maintained and troubleshooted computers, notebooks, printers, hardware, software, ERP, network, and CCTV to ensure smooth operations.</p>
                  <p>&#x2022; Managed IT inventory, asset registration, and preventive maintenance plans.</p>
                  <p>&#x2022; Coordinated with vendors for repair and system maintenance services.</p>
                  <p>&#x2022; Gathered user requirements across departments to improve internal systems.</p>
                  <p>&#x2022; Designed, developed, and maintained internal web applications, including optimizing existing systems for better performance..</p>
                </div>
              </div>
            </div>
            {/* Chai Television Limited Partnership */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT Support</h3>
                <span className="qualification__subtitle">Chai Television Limited Partnership - Surin</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Dec. 2014 - Aug. 2016
                </div>
                <div className="qualification__work-experience">
                  <p>&#x2022; Installed and troubleshooted computers, notebooks, printers, hardware/software, and various peripheral devices within the company.</p>
                  <p>&#x2022; Analyzed issues and coordinated with external vendors to resolve network, CCTV, and IPBX system problems.</p>
                  <p>&#x2022; Handled IT-related procurement and managed inventory of IT equipment and supplies.</p>
                  <p>&#x2022; Performed other assigned IT-related tasks as required.</p>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification