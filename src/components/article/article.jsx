import { Component } from "react";

import "./article.scss";

import BeanSepator from "../bean-separator/bean-separator";


export default class Article extends Component {
  // constructor(props) {
  //   super(props)
  // }
  

  render() {
    const imgSrc = this.props.src;
    const imgAlt = this.props.alt;
    const articleText = this.props.text;

    return (
      <article className="article">
        <div className="container">
          {imgSrc ? <>
            <div className="article_wrapper">
              <div className="article_item">
                <img src={imgSrc} alt={imgAlt} />
              </div>
              <div className="article_item">
                <h2 className="article_item_heading">About Us</h2>
                <BeanSepator theme="black"/>
                <div className="article_item_maintext">{articleText}</div>
              </div>
            </div>
          </> : <>
            <div className="article_item">
              <h2 className="article_item_heading">About Us</h2>
              <BeanSepator theme="black"/>
              <div className="article_item_maintext">{articleText}</div>
            </div>
          </>}
        </div>
      </article>
    );
  }
}