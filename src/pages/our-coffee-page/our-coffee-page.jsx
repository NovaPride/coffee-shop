import { Component } from "react";

import Header from "../../components/header/header";
import Article from "../../components/article/article";
import Separator from "../../components/separator/separator";
import ProductCardsFilter from "../../components/product-cards-filter/product-cards-filter";
import ProductCards from "../../components/product-cards/product-cards";
import Footer from "../../components/footer/footer";

import { aboutImg, ourCoffeeBg } from "../../resources/imgFiles";


export default class OurCoffee extends Component {
  render() {
    const ourCoffeeCardsData = this.props.cards;

    const headingText = <>
      Our Coffee
    </>;
    const articleHeading = <>
      About our beans
    </>;
    const articleText = <>
      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
      <br/><br/>
      Afraid at highly months do things on at. Situation recommend objection do intention <br/>
      so questions. <br/>
      As greatly removed calling pleased improve an. Last ask him cold feel <br/>
      met spot shy want. Children me laughing we prospect answered followed. At it went <br/>
      is song that held help face.
    </>;
    const altText = "women drinks coffee";

    return (
      <>
        <Header src={ourCoffeeBg} heading={headingText}/>
        <Article heading={articleHeading} text={articleText} src={aboutImg} alt={altText}/>
        <Separator/>
        <ProductCardsFilter/>
        <ProductCards cards={ourCoffeeCardsData} shadow={true}/>
        <Footer/>
      </>
    );
  }
}

