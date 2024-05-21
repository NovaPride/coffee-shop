import { Component } from "react";
import styled from 'styled-components'

import LinksItem from "../links-item/links-item";

export default class Links extends Component{

  Wrapper = styled.ul`
    width: 100px;
    height: 100px;
    background-color: #eee;
  `;

  render(){
    return (
      <this.Wrapper>
        <LinksItem/>
      </this.Wrapper>
    );
  }
}