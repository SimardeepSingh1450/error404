import React from "react";
import "../css/Main.css";
import Maps from "./Maps";
import Sockpuppet from "./Sockpuppet";

const Main = () => {
  return (
    <div className="container">
      <section className="one">
        <h1>Eye Of Sauron</h1>
      </section>
      <section className="two">
        <h1>Google Maps</h1>
        <Maps />
      </section>
      <section className="third">
      <h1>Third Page</h1>
      <Sockpuppet />
      </section>
    </div>
  );
};

export default Main;
