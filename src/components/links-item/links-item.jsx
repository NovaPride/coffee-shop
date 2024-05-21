import { Component } from "react";
import styled from 'styled-components'

export default class LinksItem extends Component{



  render(){
    return (
      <>
        <li><a href="#">Coffee house</a></li>
        <li><a href="#">Our coffee</a></li>
        <li><a href="#">For your pleasure</a></li>
      </>  
    );
  }
}