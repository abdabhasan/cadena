import "./Copyright.scss";

const currentYear = new Date().getFullYear(); // Get the current year

const copyrights = () => {
  return (
    <div className="cadena__footer-container_copyright">
      &copy; <span id="current-year">{currentYear}</span> Cadena. All Rights
      Reserved.
    </div>
  );
};

export default copyrights;
