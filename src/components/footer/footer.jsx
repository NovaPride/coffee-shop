import "./footer.scss";

import Navbar from "../navbar/navbar";
import BeanSepator from "../bean-separator/bean-separator";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <Navbar location="bottom" />
          <BeanSepator theme="black" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
