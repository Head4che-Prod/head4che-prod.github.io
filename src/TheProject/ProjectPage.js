import React, { Component } from "react";
import "./index.scss";
import Header from "../SWOHeader/Header";

class ProjectPage extends Component {
  render() {
    return (
      <div class="ProjectPage">
        <Header />
        <h1>SubWay Out: The Project</h1>
        <div className="history">
          <h2>History</h2>
          <p>
            After creating the Head4che production company, formed of five
            first-year students at EPITA, we decided to create a game. As we all
            loved puzzles and escape-games, we decided to create an innovative
            videogame: an escape game in the metro, featuring a very realistic
            experience.
          </p>
        </div>
        <div className="realization">
          <h2>Realization</h2>
          <p>
            <h3>📆 Timeline</h3>
            <ul>
              <li>
                January 2025 (B2): Initial concept, story writing, level design,
                and implementation of basic mechanics in Unity.
              </li>
              <li>
                March 2025 (B3): Added multiplayer support, created 3D models,
                developed puzzles, and integrated gameplay elements.
              </li>
              <li>
                May 2025 (B4): Finalized animations, implemented networking with
                Netcode for GameObjects, added multilingual support, and built
                the game’s website.
              </li>
            </ul>
            <h3>⚠️ Challenges & Solutions</h3>
            <ul>
              <li>
                Player movement on slopes: The player would slide unnaturally. →
                Fixed by adjusting Unity's friction and collider settings.
              </li>
              <li>
                Multiplayer sync issues: Difficulties syncing interactive
                objects. → Resolved using Netcode for GameObjects for proper
                network authority and object synchronization.
              </li>
              <li>
                3D modeling delays: Creating detailed environments took longer
                than expected. → Tasks were split among team members and
                streamlined using efficient tools.
              </li>
              <li>
                Localization: Needed a scalable way to manage multiple
                languages. → Developed a centralized translation system.
              </li>
              <li>
                Website development: Building a responsive, appealing site in
                parallel. → Handled with modern web technologies for consistency
                and performance.
              </li>
            </ul>
          </p>
        </div>
        <div className="tools">
          <h2>Our Tools</h2>
          <ul className="linklist">
            <li>
              <a rel="noreferrer" target="_blank" href="https://unity.com/">
                Unity
              </a>
              : Our game engine
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Head4che-Prod"
              >
                GitHub
              </a>
              : Our shared version control system
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Head4che-Prod/head4che-prod.github.io"
              >
                GitHub Pages
              </a>
              : The service hosting our website
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://discord.gg/PmBhK3khEC"
              >
                Discord
              </a>
              : The tool we used to organize ourselves and to communicate in the
              team
            </li>
            <li>Paint, Inkscape, Gimp: To design pretty visuals 🎀</li>
            <li>Powerpoint: To present our game at technical defenses</li>
            <li>Figma: The webservice used to design this website</li>
            <li>
              Instagram: The social media we used to show the progress of the
              game development to our future players
            </li>
          </ul>
        </div>
        <div className="assets">
          <h2>Assets used</h2>
          <ul className="linklist">
            <li>
              Tunnel 3D model:{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://sketchfab.com/3d-models/low-poly-style-subway-tunnel-section-26668039209f41a1a793e0e28ed8589c"
              >
                Low Poly Style Subway Tunnel Section
              </a>{" "}
              – TreDè
            </li>
            <li>
              Rat 3D model and animations:{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://sketchfab.com/3d-models/rat-5deb007a05a946d28ce6403616f9629b"
              >
                Rat
              </a>{" "}
              – Artise1
            </li>
            <li>
              Images used for in-game designs:
              <ul>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://fr.freepik.com/vecteurs-libre/illustration-fond-the-dessin-anime_16692042.htm#fromView=search&page=5&position=34&uuid=e65d097b-4dbc-4061-a5bc-89054539a001&query=tea+ad"
                  >
                    Illustration de fond de thé de dessin animé
                  </a>{" "}
                  – pikisuperstar
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://fr.freepik.com/vecteurs-libre/meilleure-affiche-du-fromage_899247.htm#fromView=search&page=2&position=36&uuid=dfd4081a-2cd8-4823-8622-3d0a0eacdd23&query=cheese+ad"
                  >
                    La meilleure affiche du fromage
                  </a>{" "}
                  – Freepik
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.pour-nourrir-demain.fr/le-sucre-daddy-devient-le-sucre-papa"
                  >
                    Sugar adversiment
                  </a>{" "}
                  – Daddy
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
