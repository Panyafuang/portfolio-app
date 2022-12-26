import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        {/* <i className="bx bx-award about__icon"></i> */}
        <i class='bx bx-code-block about__icon'></i>
        <h3 className="about__title">Programmer</h3>
        <span className="about__subtitle">3 Years Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">IT Engineer</h3>
        <span className="about__subtitle">3 Years Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Etc</h3>
        <span className="about__subtitle">2 Years Working</span>
      </div>
    </div>
  )
}

export default Info