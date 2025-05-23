import React, { Component } from "react";
import "./index.scss";
import { ReactComponent as WinLogo } from "./assets/fa-windows.svg";
import { ReactComponent as PdfIcon } from "./assets/fa-pdf-file.svg";
import Header from "../SWOHeader/Header";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <Header />
        <div className="download">
          <div className="beautifulBlueBox">
            <img
              className="logo-swo"
              alt="logo-subwayout"
              src="/assets/subwayout.png"
            />
            <div className="alldownloads withTopMargin">
              <div className="mainDownload">
                <a href="/subwayout_installer-v1.0.1.exe">
                  <button>
                    <WinLogo height="2em" />
                    <span>Download Now</span>
                  </button>
                </a>
              </div>
              <div className="instructionManual">
                <a target="_blank" href="/docs/instruction-manual.pdf">
                  <img
                    src="/assets/info.png"
                    alt=""
                    width={60}
                    height={60}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="trailer">
          <h1>Trailer</h1>
          <iframe
            src="https://www.youtube.com/embed/CKALwMykcis?si=PGcKPX9ZGiYBIuxq"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div id="news">
          <h1>Traffic News</h1>
          <div className="row">
            <div className="news-display first">
              <img src="/assets/news_image.jpg" alt="defense-group-pic" />
              <p className="date">27.05.2025</p>
              <p className="event">Final Defense</p>
            </div>
            <div className="news-display instagram">
              <div className="instagram-link">
                <a
                  href="https://www.instagram.com/head4che.prod.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svg-icon"
                >
                  _
                </a>
                <a
                  href="https://www.instagram.com/head4che.prod.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="username"
                >
                  @head4che.prod.co
                </a>
              </div>
            </div>
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
              <p className="date">January 2025</p>
              <a target="_blank" href="/docs/defense-1.pdf">
                <button>&gt;</button>
              </a>
            </div>
            <div className="document">
              <div className="row">
                <PdfIcon />
                <h2 className="name">Technical report n°2</h2>
              </div>
              <p className="date">March 2025</p>
              <a target="_blank" href="/docs/defense-2.pdf">
                <button>&gt;</button>
              </a>
            </div>
            <div className="document">
              <div className="row">
                <PdfIcon />
                <h2 className="name">Project report</h2>
              </div>
              <p className="date">May 2025</p>
              <a target="_blank" href="/docs/project-report.pdf">
                <button>&gt;</button>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="document">
              <div className="row">
                <PdfIcon />
                <h2 className="name">Book of specifications</h2>
              </div>
              <p className="date">November 2024</p>
              <a target="_blank" href="/docs/specifications.pdf">
                <button>&gt;</button>
              </a>
            </div>
          </div>
          <div className="bg"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
