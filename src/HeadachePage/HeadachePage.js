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
                <a className="game" href="/subway-out/">
                  <img src="/assets/swo-icon.png" alt="" />
                </a>
                <img className="game" src="/assets/dice-icon.png" alt="" />
                <img className="game" src="/assets/gamepad-icon.png" alt="" />
                </div>
              <div className="row links">
                <a className="link members" href="#team">
                  <LogoMembers />
                  <span>Members</span>
                </a>
                <a className="link members" href="https://www.instagram.com/head4che.prod.co/" target="_blank" rel="noreferrer noopener">
                  <LogoInsta />
                  <span>Instagram</span>
                </a>
                <a className="link members" href="https://discord.gg/PmBhK3khEC" target="_blank" rel="noreferrer noopener">
                  <LogoDiscord />
                  <span>Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="team">
          <h1>Our Team</h1>
          <div className="row">
          <div className="member">
              <img src="/assets/members/jeanne.png" alt="member"></img>
              <span className="name">Jeanne Durand</span>
              <span className="nickname">Camel Executive Officer</span>
            </div>
            <div className="member">
              <img src="/assets/members/arthur.png" alt="member"></img>
              <span className="name">Arthur Fiolet</span>
              <span className="nickname">The Kid</span>
            </div>
            <div className="member">
              <img src="/assets/members/adam.png" alt="member"></img>
              <span className="name">Adam Graziani</span>
              <span className="nickname">Échelle Graziani</span>
            </div>
          </div>
          <div className="row">
          <div className="member">
              <img src="/assets/members/tidiane.png" alt="member"></img>
              <span className="name">Tidiane Bathily</span>
              <span className="nickname">titiClicker</span>
            </div>
            <div className="member">
              <img src="/assets/members/valentin.png" alt="member"></img>
              <span className="name">Valentin Kiep</span>
              <span className="nickname">Tonton</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadachePage;
