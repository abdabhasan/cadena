import cards from "../../assets/cards.png";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import { BsArrowRight } from "react-icons/bs";
import "./Hero.scss";
const Hero = () => {
  return (
    <div id="home" className="cadena__hero section__padding">
      <div className="cadena__hero-content">
        <div className="cadena__hero-content-discount">
          <button className="cadena__hero-content-discount_btn">New!</button>

          <div className="cadena__hero-content-discount_container">
            <p>Refer a friend & Get 25% </p>
            <BsArrowRight />
          </div>
        </div>
        <h1>
          Spend Your <span>Money in Style</span> with a Customized Card
        </h1>
        <p>
          Use your digital card for online purchases, in-store purchases, and
          more.
        </p>
        <div className="cadena__hero-content-stores">
          <img src={apple} alt="app store" />
          <img src={google} alt="play store" />
        </div>
      </div>
      <div className="cadena__hero-image">
        <img src={cards} alt="cards" />
      </div>
    </div>
  );
};

export default Hero;
