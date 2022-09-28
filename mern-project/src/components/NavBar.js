import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="container red top-bottom-borders-in">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="favorites">Favorites</Link>
      </li>
    </div>
  );
};
