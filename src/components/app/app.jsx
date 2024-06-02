import { Component } from "react"

import "./app.scss";

import MainPage from "../../pages/main-page/main-page";
import OurCoffee from "../../pages/our-coffee-page/our-coffee-page";
import CoffeeDetails from "../../pages/coffee-details-page/coffee-details-page";
import ForYourPleasure from "../../pages/for-your-pleasure-page/for-your-pleasure-page";

import { cardsData, bestCardsData } from "../../resources/data/data";


export default class App extends Component {
  render() {
    return (
    <>
      {
        {
          "/" : <MainPage cards={bestCardsData}/>,
          "/ourcoffee" : <OurCoffee cards={cardsData}/>,
          "/coffeedetails" : <CoffeeDetails/>,
          "/foryourpleasure" : <ForYourPleasure cards={cardsData}/>,
        }[window.location.pathname]
      }
    </>
    )
  }
}