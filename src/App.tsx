import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

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
            twitter
          </button>
        </a>
        <a
          href="https://discord.gg/kaYtnXZNW6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            Discord
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
