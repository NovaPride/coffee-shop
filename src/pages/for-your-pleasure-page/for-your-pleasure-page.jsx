import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Article from "../../components/article/article";
import Separator from "../../components/separator/separator";
import ProductCards from "../../components/product-cards/product-cards";
import Footer from "../../components/footer/footer";

import { hotCoffee, forPleasureBg } from "../../resources/imgFiles";

const ForYourPleasure = ({ cards }) => {
  const altText = "women drinks coffee";
  const articleText = (
    <>
      Extremity sweetness difficult behaviour he of. On disposal of as landlord
      horrible.
      <br />
      <br />
      Afraid at highly months do things on at. Situation recommend objection do
      intention <br />
      so questions. <br />
      As greatly removed calling pleased improve an. Last ask him cold feel{" "}
      <br />
      met spot shy want. Children me laughing we prospect answered followed. At
      it went <br />
      is song that held help face.
    </>
  );
  const articleHeading = <>About our goods</>;
  const headingText = <>For your pleasure</>;

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
        />
        <title>For your pleasure</title>
      </Helmet>
      <Header src={forPleasureBg} heading={headingText} />
      <Article
        heading={articleHeading}
        text={articleText}
        src={hotCoffee}
        alt={altText}
      />
      <Separator /> <br />
      <br />
      <br />
      <ProductCards cards={cards} shadow={true} />
      <Footer />
    </>
  );
};

export default ForYourPleasure;
