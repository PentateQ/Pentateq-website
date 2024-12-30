import React, { useState } from "react";
import "./Navbar.css"; // Assuming a CSS file for styling
import App from "./App.jsx";
import People from "./People.jsx";

function Navbar() {
  const [activeTab, setActiveTab] = useState("People");

  const renderContent = () => {
    switch (activeTab) {
      case "People":
        return <People />;
      case "Tech Stack":
        return <App />;
      case "References":
        return (
          <div>
            <h1>References</h1>
            <p>Content for the References page goes here.</p>
          </div>
        );
      case "Privacy":
        return (
          <div>
            <h1>Privacy</h1>
            <p>Content for the Privacy page goes here.</p>
          </div>
        );
      default:
        return (
          <div>
            <h1>Welcome</h1>
            <p>Select a tab to view its content.</p>
          </div>
        );
    }
  };

  return (
    <div className="navbar-container">
      {/* Navbar as App Bar */}
      <nav className="navbar app-bar">
        <ul className="navbar-list">
          {["People", "Tech Stack", "References", "Privacy"].map((tab) => (
            <li
              key={tab}
              className={`navbar-item ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      {/* Static Content Section */}
      <div className="content static-content">{renderContent()}</div>
    </div>
  );
}

export default Navbar;
