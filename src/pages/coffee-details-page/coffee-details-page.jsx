import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import Header from "../../components/header/header";
import Article from "../../components/article/article";
import Footer from "../../components/footer/footer";

import { ourCoffeeBg, coffeeDetails } from "../../resources/imgFiles";

import { cardsData } from "../../resources/data/data";

const CoffeeDetails = () => {
  const { coffeeId } = useParams();
  const { text, price, country, imgSrc } = cardsData.find(
    (card) => card.id == coffeeId
  );
  const headingText = <>Our Coffee</>;
  const articleHeading = <>About It</>;
  const articleText = (
    <>
      <b>Country: </b>
      {country}
      <br />
      <br />
      <b>Name: </b>
      {text}
      <br />
      <br />
      <b>Description: </b>Lorem ipsum dolor sit amet, consectetur
      <br />
      adipiscing elit, sed do eiusmod tempor incididunt ut labore
      <br />
      et dolore magna aliqua. Ut enim ad minim veniam, quis
      <br />
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      <br />
      commodo consequat.
      <br />
      <br />
      <b>Price: </b>
      <span>{price}$</span>
    </>
  );
  const altText = "coffee ad with beautiful sunshine";

  return (
    <>
      <Helmet>
        <meta name="description" content={text} />
        <title>{text}</title>
      </Helmet>
      <Header src={ourCoffeeBg} heading={headingText} />
      <Article
        heading={articleHeading}
        text={articleText}
        textWidth={"450px"}
        src={imgSrc}
        alt={altText}
      />
      <Footer />
    </>
  );
};

export default CoffeeDetails;
