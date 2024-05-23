import { Component } from "react"

import './app.scss';

import Header from "../header/header";
import AboutUs from "../about-us-main/about-us-main";
import Footer from "../footer/footer";

import { linksData } from "../../resources/data/data";


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <>
        <Header links={linksData}/>
        <AboutUs/>
        <Footer links={linksData}/>
      </>
    );
  }
}