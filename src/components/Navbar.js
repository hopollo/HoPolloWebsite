import React, { useState } from "react";
import "../css/navBar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="navbar"
      onClick={() => {
        open ? setOpen(false) : setOpen(true);
      }}
    >
      {open ? (
        <ul className="navbar-nav">
          <attr title="Visiter mon Twitter">
            <a
              className="twitter-follow-button"
              href="https://twitter.com/HoPolloTV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="item">Twitter</li>
            </a>
          </attr>

          <attr title="Voir ma chaine Twitch">
            <a
              className="twitch-follow-button"
              href="https://www.twitch.tv/hopollo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="item">Twitch</li>
            </a>
          </attr>

          <attr title="Voir ma chaine Mixer">
            <a
              className="mixer-follow-button"
              href="https://www.mixer.com/hopollo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="item">Mixer</li>
            </a>
          </attr>

          <attr title="Voir ma page Facebook">
            <a
              className="facebook-follow-button"
              href="https://www.facebook.com/hopollo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="item">Facebook</li>
            </a>
          </attr>

          <attr title="Voir ma chaine Youtube">
            <a
              className="youtube-follow-button"
              href="https://www.youtube.com/user/hopollo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="item">Youtube</li>
            </a>
          </attr>

          <attr title="Voir mes projets publics">
            <a
              className="github-follow-button"
              href="https://github.com/hopollo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="item">Github</li>
            </a>
          </attr>

          <attr title="Rejoindre mon Discord">
            <a
              href="https://discordapp.com/invite/FpMqtSa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="item">Discord</li>
            </a>
          </attr>
        </ul>
      ) : null}
    </div>
  );
}

export default Navbar;
