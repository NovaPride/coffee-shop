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
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer_wrapper">
            <Navbar location="bottom"/>
            <BeanSepator theme="black"/>
          </div>
        </div>
      </footer>
    );
  }
}