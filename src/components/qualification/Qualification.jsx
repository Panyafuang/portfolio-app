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
                <span className="qualification__subtitle">มหาวิทยาลัยราชภัฏสุรินทร์ - เทคโนโลยีสารสนเทศ</span>
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
                <span className="qualification__subtitle">วิทยาลัยสารพัดช่างสุรินทร์ - พณิชยการ</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2007 - 2009
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior High School</h3>
                <span className="qualification__subtitle">โรงเรียนเจริญราษฏร์วิทยา</span>
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
          {/* NYC */}
          <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Programmer</h3>
                <span className="qualification__subtitle">N.Y.C. Industry Co.,Ltd. - Samut Prakan</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct. 2022 - Dec. 2022
                </div>
              </div>
            </div>
          {/* Easyfo */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Programmer</h3>
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
            {/* Ogisokogy */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technical Intern Training Program</h3>
                <span className="qualification__subtitle">OGISOKOGYO CO.LTD - JAPAN</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Nov. 2017 - May 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* หจก. ชัยโทรทัศน์ */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">IT Support</h3>
                <span className="qualification__subtitle">หจก.ชัยโทรทัศน์ - Surin</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Dec. 2014 - Aug. 2016
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