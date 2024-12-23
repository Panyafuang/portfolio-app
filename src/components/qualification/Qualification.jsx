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
                <h3 className="qualification__title">Application Support</h3>
                <span className="qualification__subtitle">BHUMIRAJANAKARINDRA KIDNEY INSTITUTE HOSPITAL - Bangkok</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul. 2024 - Present
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
                <h3 className="qualification__title">IT Engineer</h3>
                <span className="qualification__subtitle">AGFOREPAX INDUSTRIES CO., LTD. - Samut Prakan</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun. 2019 - Feb. 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification