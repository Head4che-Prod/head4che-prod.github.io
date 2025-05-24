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
            The Head4che Production Company is a French video game studio
            created in 2024. Composed of 5 active members, this studio was born
            from a shared passion for computer science and puzzles. Specialized
            in the creation of escape games, the Head4che Production Company
            offers unique and innovative experiences in the universe of puzzle
            games. The passion for solving puzzles and the drive to do so as
            fast as possible, motivates the team to create a video game open to
            the public, blending the challenge of complex puzzle-solving with
            the freedom offered by a three-dimensional environment. The way each
            team contributor collaborates for academic subjects was also
            important, as the group often gathers to work together. This
            efficiency for academic classes was thus important because working
            together created strong relationships and more importantly lasting
            friendships among the group. Therefore, the Head4che Production
            Company is a studio where puzzles and complex enigmas are a
            fundamental part of the team's passion but above all, it is a studio
            where friendships were made.
          </p>
        </div>
        <div className="realization">
          <h2>Realization</h2>
          <p>
            <img alt="timeline" src="/assets/Timeline_SubWay_Out.png" />
            <h3>⚠️ Challenges & Solutions</h3>
            <ul>
              <li>
                🧊 Model backface culling issues → Recalculating normals in Blender.
              </li>
              <li>
                🎨 Texture mismatches → Embedding textures on export.
              </li>
              <li>
                🚶‍➡️ Animation rigging → Using animations directly in Unity.
              </li>
              <li>
                🏀 Grabbed objects' position synchronization → Running on all computation on the server.
              </li>
              <li>
                🗃️ Netcode for GameObject's nested NetworkObject restrictions → Serializing parent NetworkObject in elements.
              </li>
              <li>
                🚀 Fast-moving objects clipping → Physics strictness levels specific to each object.
              </li>
              <li>
                🛜 Tedious client connection → Transition to Unity Relay Servers.
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
            <li>Rider: The C# editor used to code our game</li>
            <li>Paint, Inkscape, Gimp, <a rel="noreferrer" target="_blank" href="https://draw.io">draw.io</a>: To design pretty visuals 🎀</li>
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
                    Daddy sugar advertisment
                  </a>{" "}
                  – Cristal Union
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
