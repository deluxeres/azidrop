import React from "react";
import { Link } from 'react-router-dom'
import webMoney from "../../Assets/images/Footer/web.png";
import Skrill from "../../Assets/images/Footer/skrill.png";
import visa from "../../Assets/images/Footer/visa.png";
import eco from "../../Assets/images/Footer/eco.png";
import master from "../../Assets/images/Footer/master.png";
import footerLogo from '../../Assets/images/Header/logo.png'
import "./Footer.scss";
import headerLogo from "../../Assets/images/Header/logotype.png"


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-payment">
          <img src={webMoney} alt="payment" />
          <img src={Skrill} alt="payment" />
          <img src={visa} alt="payment" />
          <img src={eco} alt="payment" />
          <img src={master} alt="payment" />
        </div>
        <div className="footer-general">
          <div className="footer-logo">
            <div className="footer-logo__block">
            <Link to="/">
              <img src={headerLogo} alt="logotype" />
            </Link>
            </div>
            <p>© azidrop – CS: GO cases that you want to open</p>
          </div>
          <div className="footer-info">
            <div className="footer-info__link">
                <Link to="/bonus">Бонусная система</Link>
                <Link to="/">privacy policy</Link>
                <Link to="/">contacts</Link>
                <Link to="/faq">faq</Link>
            </div>
            <div className="footer-info__text">
                <p>The copyright holder of the inventory objects is Valve Corporation. All included here mentioned brand names are registered and property of the respective companies. The right to participate in a promotional event for the drawing of a unique digital product, presented in the form of a limited personal non-transferable revocable exclusive license, without the right to sublicense, for the use of digital objects, is guaranteed to every user who has purchased goods in the amount of $1 or more. Terms of the promotion: from December 1, 2020 to October 29, 2022. The transparency of the event is ensured by the presence of a Live Feed mechanism on the site. The results of the event are summed up instantly, by randomly selecting the winners. The number of allowed participation attempts is unlimited and is directly proportional to the purchase amount.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
