import { Component } from "react"
import { linksData } from "../../resources/data/data";

import "./navbar.scss";

export default class Navbar extends Component {
  render() {
    const location = this.props.location;
    return (
      <nav className={"nav" + (location === "top" ? " nav_top" : " nav_bottom")}>
        <ul className="nav_links">
          {
            linksData.map(({id, text, link}) => {
              return (
                <li className="nav_links_item" key={id}>
                  <a className="nav_links_item_link" href={link}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}