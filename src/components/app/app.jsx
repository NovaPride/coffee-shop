import { Component } from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./app.scss";

import MainPage from "../../pages/main-page/main-page";
import OurCoffee from "../../pages/our-coffee-page/our-coffee-page";
import CoffeeDetails from "../../pages/coffee-details-page/coffee-details-page";
import ForYourPleasure from "../../pages/for-your-pleasure-page/for-your-pleasure-page";
import Page404 from "../../pages/404-page/404-page";

import { cardsData, bestCardsData } from "../../resources/data/data";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage cards={bestCardsData}/>}/>
          <Route path="/ourcoffee" element={<OurCoffee cards={cardsData}/>}/>
          <Route path="/foryourpleasure" element={<ForYourPleasure cards={cardsData}/>}/>
          <Route path="/coffeedetails" element={<CoffeeDetails/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Router>
    // <>
    //   {
    //     {
    //       "/" : <MainPage cards={bestCardsData}/>,
    //       "/ourcoffee" : <OurCoffee cards={cardsData}/>,
    //       "/coffeedetails" : <CoffeeDetails/>,
    //       "/foryourpleasure" : <ForYourPleasure cards={cardsData}/>,
    //     }[window.location.pathname]
    //   }
    // </>
    )
  }
}



/*
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const CharactersPage = lazy(() => import("../../pages/CharactersPage"))
const ComicsPage = lazy(() => import("../../pages/ComicsPage"))
const SingleComicPage = lazy(() => import("../../pages/SingleComicPage"))
const SingleCharacterPage = lazy(() => import("../../pages/SingleCharacterPage"))
const Page404 = lazy(() => import("../../pages/404"))

const App = () => { 
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<CharactersPage/>}/>
              <Route path="/comics" element={<ComicsPage/>}/>
              <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
              <Route path="/character/:characterId" element={<SingleCharacterPage/>}/>
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;

/* 
{
  {
    "/" : <CharacterPage/>,
    "/comics" : <ComicsPage/>,
  }[window.location.pathname]
} 
*/