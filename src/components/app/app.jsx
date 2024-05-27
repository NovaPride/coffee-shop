import { Component } from "react"

import "./app.scss";

import MainPage from "../../pages/main-page/main-page";
import OurCoffee from "../../pages/our-coffee-page/our-coffee-page";
import CoffeeDetails from "../../pages/coffee-details-page/coffee-details-page";

import { linksData, mainCardsData, ourCoffeeCardsData } from "../../resources/data/data";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "coffeedetails"
    }
  }

  render() {
    const route = this.state.route;
    return (<>{{
      "main" : <MainPage links={linksData} cards={mainCardsData}/>,
      "ourcoffee" : <OurCoffee links={linksData} cards={ourCoffeeCardsData}/>,
      "coffeedetails" : <CoffeeDetails links={linksData}/>,
    }[route]
      
    }</>);
  }
}