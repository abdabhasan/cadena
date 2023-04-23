import "./Card.scss";

const Card = ({ imgURL, details, title }) => {
  return (
    <div className="cadena__wealth-container_card">
      <div className="cadena__wealth-container_card-heading">
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="cadena__wealth-container_card-image">
        <img src={imgURL} alt="wealth_card" />
      </div>
      <div className="cadena__wealth-container_card-content">
        <div>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
