import React from "react";
import "../css/Main.css";
import Maps from "./Maps";
import Sockpuppet from "./Sockpuppet";
import Twitter_Account from "./Twitter_Accounts";

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
      <section className="one">
        <h1>Fourth Page</h1>
        <Twitter_Account />
      </section>
    </div>
  );
};

export default Main;
