import React from "react";
import icon_facebook from "assets/img/icon_facebook.png";
import icon_ig from "assets/img/icon_ig.png";
import icon_linkedin from "assets/img/icon_linkedin.png";
import icon_tweet from "assets/img/icon_tweet.png";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p> &nbsp; &copy; 2022 Digital Booking</p>
      </div>
      <div className="social_networks">
        <img src={icon_facebook} alt="icono de Facebook" />
        <img src={icon_linkedin} alt="icono de Linkedin" />
        <img src={icon_tweet} alt="icono de Twitter" />
        <img src={icon_ig} alt="icono de Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
