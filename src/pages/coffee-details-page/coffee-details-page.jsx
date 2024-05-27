import { Component } from "react";

import Header from "../../components/header/header";
import Article from "../../components/article/article";
import Footer from "../../components/footer/footer";

import { ourCoffeeBg, coffeeDetails } from "../../resources/imgFiles";


export default class CoffeeDetails extends Component {
  render() {
    const linksData = this.props.links;

    const altText = "coffee ad with beautiful sunshine";
    const articleText = <>
      <b>Country: </b>Brasil<br/>
      <br/>
      <b>Description: </b>Lorem ipsum dolor sit amet, consectetur<br/>
      adipiscing elit, sed do eiusmod tempor incididunt ut labore<br/>
      et dolore magna aliqua. Ut enim ad minim veniam, quis<br/>
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/>
      commodo consequat.<br/>
      <br/>
      <b>Price: </b><span>16.99$</span>
    </>;
    const articleHeading = <>
      About It
    </>;
    const headingText = <>
      Our Coffee
    </>;

    return (
      <>
        <Header links={linksData} src={ourCoffeeBg} heading={headingText}/>
        <Article heading={articleHeading} text={articleText} textWidth={"450px"} src={coffeeDetails} alt={altText}/>
        <Footer links={linksData}/>
      </>
    );
  }
}

