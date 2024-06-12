import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import Article from "../../components/article/article";
import OurBest from "../../components/our-best-main/our-best-main";
import Footer from "../../components/footer/footer";

import { mainBg } from "../../resources/imgFiles";

const MainPage = ({ cards }) => {
  const headingText = <>Everything You Love About Coffee</>;
  const descrText = (
    <>
      We makes every day full of energy and taste <br />
      Want to try our beans?
    </>
  );
  const articleHeading = <>About Us</>;
  const articleText = (
    <>
      Extremity sweetness difficult behaviour he of. On disposal of as landlord
      horrible. Afraid at highly months do things on at. Situation recommend
      objection do intention so questions. As greatly removed calling pleased
      improve an. Last ask him cold feel met spot shy want. Children me laughing
      we prospect answered followed. At it went is song that held help face.
      <br />
      <br />
      Now residence dashwoods she excellent you. Shade being under his bed her,
      Much read on as draw. Blessing for ignorant exercise any yourself
      unpacked. Pleasant horrible but confined day end marriage. Eagerness
      furniture set preserved far recommend. Did even but nor are most gave
      hope. Secure active living depend son repair day ladies now.
    </>
  );

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
        />
        <title>Coffee house</title>
      </Helmet>
      <Header
        src={mainBg}
        heading={headingText}
        descr={descrText}
        button="More"
      />
      <Article heading={articleHeading} text={articleText} />
      <OurBest cards={cards} />
      <Footer />
    </>
  );
};

export default MainPage;
