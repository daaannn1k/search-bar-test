import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello, my friend</h1>
      <NavLink to="/search">
        <button className="btn btn-secondary">Let's search</button>
      </NavLink>
    </div>
  );
};

export default Home;
