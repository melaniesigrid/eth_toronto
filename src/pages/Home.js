import React from "react";
import "./Home.css";
import Card from '../components/Card';
import Logo from "../assets/logo.png";

export default function Home() {
  return (
    <div>
      <div
        className="home-container"
        style={{
          display: "flex",
          marginTop: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ height: "500px" }}>
          <h2 className="welcome" style={{ margin: "7rem 1rem 1rem 0" }}>
            Welcome to Mel's
            <br />
            Meta
          </h2>
          <p
            style={{
              width: "350px",
              textAlign: "justify",
              marginBottom: "1.5rem",
            }}
          >
            Our platform helps volunteers raise funds utilizing blockchain
            technology. Donors can pay using USN, and volunteering organizations
            are given reputability scores.
          </p>
          <button variant="outline-primary" className="action-button">
            Scroll to view Organizations
          </button>
        </div>
        <div>
          <img
            src={Logo}
            alt="Mel's Meta Logo"
            style={{ height: "354px", margin: "3rem" }}
          />
        </div>
      </div>
      <div>
        <h2 className="everybody">Everybody has a story</h2>
        {/* <Card title="My title" description="Lorem ipsum" goal="10000" /> */}
      </div>
    </div>
  );
}
