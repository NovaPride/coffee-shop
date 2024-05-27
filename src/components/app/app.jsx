import { Component } from "react"

import "./app.scss";

import MainPage from "../../pages/main-page/main-page";
import OurCoffee from "../../pages/our-coffee-page/our-coffee-page";
import CoffeeDetails from "../../pages/coffee-details-page/coffee-details-page";
import ForYourPleasure from "../../pages/for-your-pleasure-page/for-your-pleasure-page";


import { mainCardsData, ourCoffeeCardsData } from "../../resources/data/data";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "foryourpleasure"
    }
  }

  render() {
    const route = this.state.route;
    return (<>{{
      "main" : <MainPage cards={mainCardsData}/>,
      "ourcoffee" : <OurCoffee cards={ourCoffeeCardsData}/>,
      "coffeedetails" : <CoffeeDetails/>,
      "foryourpleasure" : <ForYourPleasure cards={ourCoffeeCardsData}/>,
    }[route]

    }</>);
  }
}