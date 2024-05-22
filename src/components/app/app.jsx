import { Component } from "react"
import Header from "../header/header";

import './app.scss';

import { linksData } from "../../resources/data/data";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <Header links={linksData}/>
    );
  }
}