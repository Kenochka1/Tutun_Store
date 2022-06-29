import React from "react";
import "./Footer.css";
import logo from "../../Assets/images/logo.PNG";
import youtube from "../../Assets/images/youtube.svg";
import vk from "../../Assets/images/vk.svg";
import telega from "../../Assets/images/telega.svg";
import instagram from "../../Assets/images/instagram.svg";

import visa from "../../Assets/images/visa.svg";
import mastercard from "../../Assets/images/mastercard.svg";
import paypal from "../../Assets/images/paypal.svg";
import phonebook from "../../Assets/images/phonebook.svg";
import email from "../../Assets/images/email.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer__con__items">
        <div className="footer__items__logo">
          <img id="logos" src={logo} alt="logo" />
          <p>© 2022 Tutun Team</p>
        </div>
        <div className="footer__items">
          <h3>Payment</h3>
          <p>
            Payment with: Visa card <br /> Paypal / Master card
          </p>
          <NavLink to="/payment">
            <img id="visa" src={visa} alt="visa" />
            <img id="paypal" src={paypal} alt="paypal" />
            <img id="mastercard" src={mastercard} alt="mastercard" />
          </NavLink>
        </div>
        <div className="footer__items">
          <h3>Contacts</h3>
          <p>
            +996 (770) 50 30 05 <br />
            +996 (995) 50 30 05 <br /> sultanalievkanat@gmail.com
            <br /> aibativagov@gmail.com
          </p>
        </div>
        <div className="footer__items">
          <h3>Social</h3>
          <p>
            Vkontakte / Youtube <br /> Telegram / Instagram
          </p>
          <a href="https://vk.com/" target="_blank">
            {" "}
            <img id="vk" src={vk} alt="vk" />{" "}
          </a>
          <a href="https://www.youtube.com/watch?v=3z92NeR7KWU" target="_blank">
            <img id="youtube" src={youtube} alt="youtube" />
          </a>
          <a href="https://web.telegram.org/" target="_blank">
            <img id="telega" src={telega} alt="telega" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img id="instagram" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
