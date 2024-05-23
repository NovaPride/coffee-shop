import { Component } from "react"
import Navbar from "../navbar/navbar";
import BeanSepator from "../bean-separator/bean-separator";

import './header.scss';


export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render(){
    const linksData = this.props.links;
    return (
      <header className="header">
        <div className="container">
          <Navbar location="top" links={linksData}/>
          <div className="header_info">
            <h1 className="header_info_heading">Everything You Love About Coffee</h1>
            <BeanSepator theme="white"/>
            <p className="header_info_descr">
              We makes every day full of energy and taste <br/>
              Want to try our beans?
            </p>
            <button className="header_info_btn">More</button>
          </div>
        </div>
      </header>
    );
  }
}