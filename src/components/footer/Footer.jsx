import React from 'react';
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Thanadilok Panyafuang</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className='footer__link'>About</a>
          </li>
          <li>
            <a href="#portfolio" className='footer__link'>Projects</a>
          </li>
          <li>
            <a href="#contact" className='footer__link'>Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="http://line.me/ti/p/~panyafuang" className="footer__social-link" target="_blank">
            <i className="fa-brands fa-line"></i>
          </a>
          <a href="https://www.facebook.com" className="footer__social-link" target="_blank">
            <i className='bx bxl-facebook-square'></i>
          </a>
          <a href="https://twitter.com" className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className='footer__copy'>Copyright &#169; 2022. All Rights Reserved</span>
      </div>
    </footer>
  )
}
