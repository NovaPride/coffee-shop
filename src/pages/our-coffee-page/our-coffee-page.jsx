import { Component } from "react";

import Header from "../../components/header/header";
import Article from "../../components/article/article";
import Separator from "../../components/separator/separator";
import ProductCardsFilter from "../../components/product-cards-filter/product-cards-filter";
import ProductCards from "../../components/product-cards/product-cards";
import Footer from "../../components/footer/footer";

import { aboutImg, ourCoffeeBg } from "../../resources/imgFiles";


export default class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promt: "",
      country : "",
    }
  }

  setPromt = (newPromt) => this.setState(({promt}) => {return{promt: newPromt}});
  
  setCountry = (newCountry) => this.setState(({country}) => {return{country: newCountry}});

  searchPromt = (items, promt) => {
    if (promt.length === 0) return items
    
    return items.filter(item => {
      return item.text.toLowerCase().indexOf(promt) > -1
    })
  }

  searchCountry = (items, country) => {
    if (country.length === 0) return items
    
    return items.filter(item => {
      return item.country.toLowerCase().indexOf(country) > -1
    })
  }

  render() {
    const сardsData = this.searchCountry(this.searchPromt(this.props.cards, this.state.promt), this.state.country);

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
        <ProductCardsFilter setPromt={this.setPromt} setCountry={this.setCountry}/>
        <ProductCards cards={сardsData} shadow={true}/>
        <Footer/>
      </>
    );
  }
}

