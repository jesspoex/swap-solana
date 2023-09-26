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
        Follow on Twitter
      </button>
    </a>
    <a
      href="https://discord.gg/RAbZs9wuxF"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>
        Join Discord
      </button>
    </a>
  </div>
</div>

  );
}

export default App;
