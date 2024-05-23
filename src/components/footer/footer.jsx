import { Component } from "react";

import "./footer.scss";

import Navbar from "../navbar/navbar";
import BeanSepator from "../bean-separator/bean-separator";


export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const linksData = this.props.links;
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer_wrapper">
            <Navbar location="bottom" links={linksData}/>
            <BeanSepator theme="black"/>
          </div>
        </div>
      </footer>
    );
  }
}