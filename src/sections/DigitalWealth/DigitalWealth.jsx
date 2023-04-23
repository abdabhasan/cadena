import { Card } from "../../components";
import { card1, card2, card3, card4, card5 } from "./imports";
import "./DigitalWealth.scss";
const DigitalWealth = () => {
  return (
    <section className="cadena__wealth section__padding">
      <div className="cadena__wealth-heading">
        <h1>
          Flex Your Digital Wealth with <span>Cadena</span>
        </h1>
      </div>
      <div className="cadena__wealth-container">
        <div className="row d-flex  ">
          <div className="col-lg-8 col-12">
            <div className="row d-flex ">
              <div className="col-lg-6 col-12 my-3">
                <Card
                  imgURL={card1}
                  title={"Versatile Use"}
                  details={
                    "Use your digital card for online purchases, in-store purchases, and more"
                  }
                />
              </div>
              <div className="col-lg-6 col-12 my-3">
                <Card
                  imgURL={card2}
                  title={"Accepted Everywhere"}
                  details={
                    "Use your digital card at any merchant that accepts Visa or Mastercard."
                  }
                />
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-lg-6 col-12 my-3">
                <Card
                  imgURL={card3}
                  title={"Easy Management"}
                  details={
                    "Manage your digital card and transactions easily through our user-friendly app."
                  }
                />
              </div>
              <div className="col-lg-6 col-12 my-3">
                <Card
                  imgURL={card4}
                  title={"Customer Support"}
                  details={
                    "Our team is ready to help you with any questions or issues you may have."
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-3">
            <Card
              imgURL={card5}
              title={"Effortlessly Spend"}
              details={
                "Our digital card allows you to spend your digital assets with ease."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWealth;
