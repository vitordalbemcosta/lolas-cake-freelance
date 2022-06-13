import React from 'react';
import styled from "styled-components"
import { SiWhatsapp } from "react-icons/si"
import { IoLogoInstagram } from "react-icons/io";

const FooterTag = styled.footer`
   {
    height: 10vh;
    background-color: #000001;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
  }
  a {
    color: white;
  }
  .my-react-icons {
    height: 40px;
    width: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

function Footer() {
    return (
      <FooterTag>
        <a
          href="https://wa.me/5551982779941"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiWhatsapp className="my-react-icons" />
        </a>
        <a
          href="https://www.instagram.com/lolascakemarcia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram className="my-react-icons" />
        </a>
      </FooterTag>
    );
}

export default Footer;