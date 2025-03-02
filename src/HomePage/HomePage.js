import React, { Component } from "react";
import "./index.scss";
import { ReactComponent as WinLogo } from "./assets/fa-windows.svg";
import { ReactComponent as PdfIcon } from "./assets/fa-pdf-file.svg";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <header>
          <nav>
            <div className="logo">
              <img src="assets/subwayout.png" />
            </div>
            <div className="header-links">
              {/* <a href="#news">News</a> */}
              <a href="#documents">Documents</a>
            </div>
          </nav>
        </header>
        <div className="download">
          <div>
            <img src="./assets/subwayout.png" />
            <button disabled>
              <WinLogo height="2em" />
              <span>Download Now</span>
            </button>
          </div>
        </div>
        <div id="documents">
          <h1>Documents</h1>
          <div className="row">
            <div className="document">
              <div className="row">
                <PdfIcon />
                <h2 className="name">Technical report n°1</h2>
              </div>
              <p className="date">December 2024</p>
              <a target="_blank" href="/docs/defense-1.pdf"><button>&gt;</button></a>
            </div>
            <div className="document">
              <div className="row">
                <PdfIcon />
                <h2 className="name">Technical report n°2</h2>
              </div>
              <p className="date">March 2024</p>
              <button disabled>&gt;</button>
            </div>
            <div className="document">
              <div className="row">
                <PdfIcon />
                <h2 className="name">Technical report n°3</h2>
              </div>
              <p className="date">Upcoming</p>
              <button disabled>&gt;</button>
            </div>
          </div>
          <div className="row">
            <div className="document">
              <div className="row">
                <PdfIcon />
                <h2 className="name">Book of specifications</h2>
              </div>
              <p className="date">November 2024</p>
              <a target="_blank" href="/docs/specifications.pdf"><button>&gt;</button></a>
            </div>
          </div>
          <div className="bg"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
