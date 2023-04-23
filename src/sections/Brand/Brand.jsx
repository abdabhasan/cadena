import { nowports, kinsta, bankable, orfium, stripe } from "./imports";
import "./Brand.scss";
const Brand = () => {
  return (
    <div className="cadena__brand section__padding">
      <div>
        <img src={nowports} alt="nowports" />
      </div>
      <div>
        <img src={bankable} alt="bankable" />
      </div>
      <div>
        <img src={kinsta} alt="kinsta" />
      </div>
      <div>
        <img src={orfium} alt="orfium" />
      </div>
      <div>
        <img src={stripe} alt="stripe" />
      </div>
    </div>
  );
};

export default Brand;
