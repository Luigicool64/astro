import React from "react";
import Switch from "../components/switch";
import { Link } from "react-router-dom";

import titleGame from "../assets/images/homepage/game_name.png"
import SideCard from "../components/SideCard";

function Game(){
    return(
        <>
          <div className="logoswitch">
            <div className="logo">
                <Link to="/">
                    <img src="./logo.png" alt="" />
                </Link>
            </div>
                <Switch/>
            </div>
            <div className="cardsgamegroup">
                <div className="cardgameleft">
                    <SideCard/>
                </div>
                <div className="cardsgamecenter">
                    <div className="cardgametitle">
                        <img src={titleGame} alt="title du jeu" />
                    </div>
                    <div className="cardgamemain">
                        <img src="./card/Group-14.png" alt="carte du jeu principal" />
                    </div>
                </div>
                <div className="cardgameright">
                    <SideCard/>
                </div>
            </div>
        </>
    )
}
export default Game