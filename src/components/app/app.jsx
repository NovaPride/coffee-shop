import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss";

import MainPage from "../../pages/main-page/main-page";
import OurCoffee from "../../pages/our-coffee-page/our-coffee-page";
import CoffeeDetails from "../../pages/coffee-details-page/coffee-details-page";
import ForYourPleasure from "../../pages/for-your-pleasure-page/for-your-pleasure-page";
import Page404 from "../../pages/404-page/404-page";

import { cardsData } from "../../resources/data/data";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage cards={cardsData} />} />
        <Route path="/ourcoffee" element={<OurCoffee cards={cardsData} />} />
        <Route
          path="/foryourpleasure"
          element={<ForYourPleasure cards={cardsData} />}
        />
        <Route path="/coffeedetails/:coffeeId" element={<CoffeeDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
