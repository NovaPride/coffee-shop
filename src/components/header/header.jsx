import { Component } from "react"

import "./header.scss";

import Navbar from "../navbar/navbar";
import BeanSepator from "../bean-separator/bean-separator";


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    const bgSrc = this.props.src;
    const heading = this.props.heading;
    const descr = this.props.descr;
    const button = this.props.button;

    const headerStyle = {
      backgroundImage: `url(${bgSrc})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <header className="header" style={headerStyle}>
        <div className="container">
          <Navbar location="top"/>
          <div className="header_info">
            <h1 className="header_info_heading">{heading}</h1>
            {descr ? 
              <>
                <BeanSepator theme="white"/>
                <p className="header_info_descr">
                  {descr}
                </p>
              </> : <></>
            }
            {button ? <>
              <button className="header_info_btn">{button}</button>
            </> : <></>
            }
            
          </div>
        </div>
      </header>
    );
  }
}