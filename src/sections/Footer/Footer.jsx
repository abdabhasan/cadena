import { Logo, Copyright, SocialMedia } from "../../components";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="cadena__footer section__padding">
      <div className="cadena__footer-container">
        <div className="cadena__footer-container_social">
          <SocialMedia />
        </div>
        <div className="cadena__footer-container_logo">
          <Logo />
        </div>
        <div className="cadena__footer-container_copyright">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
