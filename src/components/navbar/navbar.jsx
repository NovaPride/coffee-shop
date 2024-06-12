import { linksData } from "../../resources/data/data";

import "./navbar.scss";

const Navbar = ({ location }) => {
  return (
    <nav className={"nav" + (location === "top" ? " nav_top" : " nav_bottom")}>
      <ul className="nav_links">
        {linksData.map(({ id, text, link }) => {
          return (
            <li className="nav_links_item" key={id}>
              <a className="nav_links_item_link" href={link}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
