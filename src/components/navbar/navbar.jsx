import { Component } from "react";
import styled from 'styled-components'

import Links from "../links/links";

export default class Navbar extends Component{

  Nav = styled.nav`
    width: 100px;
    height: 100px;
    background-color: #eee;
  `;

  render(){
    return (
      <this.Nav>
        <Links/>
      </this.Nav>
    );
  }
}