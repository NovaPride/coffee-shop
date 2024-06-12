import "./header.scss";

import Navbar from "../navbar/navbar";
import BeanSepator from "../bean-separator/bean-separator";

const Header = ({ src, heading, descr, button }) => {
  const headerStyle = {
    backgroundImage: `url(${src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <Navbar location="top" />
        <div className="header_info">
          <h1 className="header_info_heading">{heading}</h1>
          {descr ? (
            <>
              <BeanSepator theme="white" />
              <p className="header_info_descr">{descr}</p>
            </>
          ) : (
            <></>
          )}
          {button ? (
            <>
              <button className="header_info_btn">{button}</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
