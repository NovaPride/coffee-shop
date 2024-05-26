import { Component } from "react"

import "./app.scss";

import MainPage from "../../pages/main-page/main-page";
import OurCoffee from "../../pages/our-coffee-page/our-coffee-page";

import { linksData, mainCardsData, ourCoffeeCardsData } from "../../resources/data/data";


export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  render() {
    return (<>{{
      "main" : <MainPage links={linksData} cards={mainCardsData}/>,
      "ourcoffee" : <OurCoffee links={linksData} cards={ourCoffeeCardsData}/>,
      }["ourcoffee"]
      
    }</>);
  }
}