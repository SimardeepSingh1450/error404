import React from "react";
import "../css/Main.css";
import Maps from "./Maps";
import Sockpuppet from "./Sockpuppet";
import Twitter_Account from "./Twitter_Accounts";
import Twitter_Tweets from "./Twitter_Tweets";
import {motion} from 'framer-motion';
import Features from "./Features";
import Reddit from "./Reddit";
import Sherlock from "./Sherlock";
import SearchFeed from "./SearchFeed";

//react-icons
import {TbSock} from 'react-icons/tb'
import {ImLocation} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {BsReddit} from 'react-icons/bs'
import {GiBroadsword} from 'react-icons/gi'
import {GiSherlockHolmes} from 'react-icons/gi'
import {BiSearchAlt} from 'react-icons/bi'

const Main = () => {
  return (
    <div className="container">
      <section className="one">
        <motion.h1 initial={{opacity:0,y:-300}} transition={{duration:5}} animate={{opacity:1,y:0}}>Eye Of Sauron</motion.h1>
      </section>
      <section className="two">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Powers of Eye Of Sauron <GiBroadsword style={{marginLeft:'50px'}}/></h1>
        {/* <h1>Powers of Eye Of Sauron</h1> */}
        <Features/>
      </section>
      <section className="third">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Sock Puppet OSINT <TbSock style={{marginLeft:'50px'}}/></h1>
        <Sockpuppet />
      </section>
      <section className="four">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Geo OSINT <ImLocation style={{marginLeft:'50px'}}/></h1>
        <Maps />
        
      </section>
      <section className="five">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Twitter IDs Info <BsTwitter style={{marginLeft:'50px',fontSize:'6vw'}}/></h1>
        <Twitter_Account />
      </section>
      <section className="six">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Fetching Twitter Tweets <BsTwitter style={{marginLeft:'50px',fontSize:'6vw'}}/></h1>
        <Twitter_Tweets />
      </section>
      <section className="seven">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Gathering Reddit Info <BsReddit style={{marginLeft:'50px',fontSize:'6vw'}}/></h1>
      <Reddit/>
      </section>
      <section className="eight">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Discovering User ID's<GiSherlockHolmes style={{borderRadius:'100px',marginLeft:'50px',fontSize:'6vw'}}/></h1>
      <Sherlock/>
      </section>
      <section className="nine">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Search Feed OSINT<BiSearchAlt style={{borderRadius:'100px',marginLeft:'50px',fontSize:'6vw'}}/></h1>
      <SearchFeed/>
      </section>
    </div>
  );
};

export default Main;
