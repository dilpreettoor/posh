import "./Footer.css";
import webLogo from "../../assets/Images/poshLogo.png";
import facebook from "../../assets/Icons/facebook.png";
import instagram from "../../assets/Icons/instagram.png";
import SocialButton from "../button/SocialButton";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">

          <div className="footer__logo">
          <img
                className="headerNav__logo--image"
                src={webLogo}
                alt="website logo"
              />
          </div>

          <div className="footer__contact">
            <p>OFFICE: +91 8699777007</p>
            <p>EMAIL: theposhpalettes@gmail.com</p>
            <p>Booth no. 4, Sector 14, panchkula</p>
          </div>

          <div className="footer__social-wrapper">
            <SocialButton>
              <img
                className="footer__social--image"
                src={facebook}
                alt="facebook logo"
              />
            </SocialButton>
            <SocialButton>
            <img
              className="footer__social--image"
              src={instagram}
              alt="instagram logo"
            />
            </SocialButton>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
