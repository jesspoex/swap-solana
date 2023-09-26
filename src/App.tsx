import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

import { FaTwitter, FaDiscord } from 'react-icons/fa'; // Import ikon Twitter dan Discord

function App() {
  return (
    <div className="App">
      <Routes />

      <div className="social-buttons">
        <a
          href="https://twitter.com/quantitybuild"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaTwitter /> twitter
          </button>
        </a>
        <a
          href="https://discord.gg/kaYtnXZNW6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaDiscord /> Discord
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
