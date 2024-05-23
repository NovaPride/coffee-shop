import { Component } from "react"

import "./app.scss";

import Header from "../header/header";
import AboutUs from "../about-us-main/about-us-main";
import OurBest from "../our-best-main/our-best-main";
import Footer from "../footer/footer";

import { linksData, mainCardsData } from "../../resources/data/data";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Header links={linksData}/>
        <AboutUs/>
        <OurBest cards={mainCardsData}/>
        <Footer links={linksData}/>
      </>
    );
  }
}