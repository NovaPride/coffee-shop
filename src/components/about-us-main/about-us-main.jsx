import { Component } from "react";

import BeanSepator from "../bean-separator/bean-separator";

import './about-us-main.scss';

export default class AboutUs extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
      <section className="about_us">
        <div className="container">
          <div className="about_us_wrapper">
            <h2 className="about_us_wrapper_heading">About Us</h2>
            <BeanSepator theme="black"/>
            <div className="about_us_wrapper_maintext">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
              <br/><br/>
              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </section>
    );
  }
}