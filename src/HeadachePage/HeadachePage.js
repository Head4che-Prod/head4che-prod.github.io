import React, { Component } from "react";
import "./index.scss";
import { ReactComponent as LogoHeadache } from "./assets/head4che_red.svg";
import { ReactComponent as LogoMembers } from "./assets/members.svg";
import { ReactComponent as LogoInsta } from "./assets/fa-instagram.svg";
import { ReactComponent as LogoDiscord } from "./assets/fa-discord.svg";

class HeadachePage extends Component {
  render() {
    return (
      <div class="headachePage">
        <div className="main">
          <div className="row">
            <LogoHeadache className="logo" />
            <div className="content">
              <h1>Head4che Production Company</h1>
              <div className="row games">
                <a href="/subway-out/">
                  <img src="/assets/swo-icon.png" alt="" />
                </a>
                <img src="/assets/dice-icon.png" alt="" />
                <img src="/assets/gamepad-icon.png" alt="" />
                </div>
              <div className="row links">
                <a className="link members" href="#team">
                  <LogoMembers />
                  <span>Members</span>
                </a>
                <a className="link members" href="https://www.instagram.com/head4che.prod.co/" target="_blank">
                  <LogoInsta />
                  <span>Instagram</span>
                </a>
                <a className="link members" href="https://discord.gg/PmBhK3khEC" target="_blank">
                  <LogoDiscord />
                  <span>Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="team"></div>
      </div>
    );
  }
}

export default HeadachePage;
