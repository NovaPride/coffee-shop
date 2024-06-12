import "./article.scss";

import BeanSepator from "../bean-separator/bean-separator";

const Article = ({ src, alt, heading, text, textWidth }) => {
  return (
    <article className="article">
      <div className="container">
        {src ? (
          <>
            <div className="article_wrapper">
              <div className="article_item">
                <img src={src} alt={alt} />
              </div>
              <div className="article_item">
                <h2 className="article_item_heading">{heading}</h2>
                <BeanSepator theme="black" />
                <div
                  className="article_item_maintext"
                  style={{ width: textWidth }}>
                  {text}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="article_item">
              <h2 className="article_item_heading">{heading}</h2>
              <BeanSepator theme="black" />
              <div className="article_item_maintext">{text}</div>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default Article;
