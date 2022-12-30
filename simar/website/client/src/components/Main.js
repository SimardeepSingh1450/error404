import React from "react";
import "../css/Main.css";
import Maps from "./Maps";
import Sockpuppet from "./Sockpuppet";
import Twitter_Account from "./Twitter_Accounts";
import Twitter_Tweets from "./Twitter_Tweets";
import {motion} from 'framer-motion';
import Features from "./Features";


const Main = () => {
  return (
    <div className="container">
      <section className="one">
        <motion.h1 initial={{opacity:0,y:-300}} transition={{duration:5}} animate={{opacity:1,y:0}}>Eye Of Sauron</motion.h1>
      </section>
      <section className="two">
        <h1>Powers of Eye Of Sauron</h1>
        <Features/>
      </section>
      <section className="third">
      <h1>Sock Puppet OSINT</h1>
        <Sockpuppet />
      </section>
      <section className="four">
      <h1>Geolocation OSINT</h1>
        <Maps />
        
      </section>
      <section className="five">
        <h1>Twitter IDs Info Gathering</h1>
        <Twitter_Account />
      </section>
      <section className="six">
        <h1>Gathering Twitter Tweets</h1>
        <Twitter_Tweets />
      </section>
    </div>
  );
};

export default Main;
