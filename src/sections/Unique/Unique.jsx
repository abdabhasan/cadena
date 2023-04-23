import { card, card1, card2, card3, card4, card5 } from "./imports";
import { FaChevronRight } from "react-icons/fa";
import "./Unique.scss";
const Unique = () => {
  return (
    <section className="cadena__unique section__padding">
      <div className="cadena__unique-container">
        <div className="cadena__unique-container_content">
          <h1>
            Create Unique Cards in <span>Style</span>
          </h1>
          <p>
            Our cards offer more than just attractive design. They also feature
            instant payment notifications and in-app card security management.
            Plus, you can start making purchases right away using Google Pay or
            Apple Pay.
          </p>
          <div className="cadena__unique-container_content-btn">
            <button>Get a Card</button> <FaChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
