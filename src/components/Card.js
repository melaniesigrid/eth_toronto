import React from "react";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
// import "./Card.css";

export default function Card(title, description, goal) {
  return (
    <div key={title}>
      <h3>{title}</h3>
      <p>{description}</p>
      <NavLink>Learn More</NavLink>
      <p>`Goal: ${goal}`</p>
      <button>Donate</button>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
};
