import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { TiMail } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

function ContactMe() {
  return (
    <div className="divContactMe">
      <div>
        {" "}
        <p>
          <a href="https://www.facebook.com/bitacorayogui" target="_blank">
            <IoLogoFacebook className="iconSocialMedia" />
          </a>
          <a
            href="https://www.instagram.com/bitacorayogui.martu/"
            target="_blank"
          >
            <IoLogoInstagram className="iconSocialMedia" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQBwTdhr-4704m2MCKkdaTQ"
            target="_blank"
          >
            <IoLogoYoutube className="iconSocialMedia" />
          </a>
        </p>
      </div>
      <div>
        <span className="titleContactMe">¡Contactémonos!</span>
        <div className="contactMartu">
          <div className="mailMartu">
            <TiMail /> <div> martu.choco@gmail.com</div>
          </div>
          <div className="whatsappMartu">
            <FaWhatsapp /> <span>02494 01-0665</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
