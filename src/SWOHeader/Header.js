import React, { Component } from "react";
import "./index.scss";
import { ReactComponent as LogoHeadache } from "./assets/head4che_red.svg";

class Header extends Component {
  render() {
    return (
        <header class="swoHeader">
          <nav>
            <div className="logo">
              <a href="/"><LogoHeadache height="calc(10vh - 2em)" width="min-content" /></a>
              <a href="/subway-out/"><img alt="logo-subwayout" src="/assets/subwayout.png" /></a>
            </div>
            <div className="header-links">
              <a href="#news">News</a>
              <a href="#documents">Documents</a>
              <a href="./the-project/">The Project</a>
            </div>
          </nav>
        </header>
    );
  }
}

export default Header;