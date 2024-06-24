import React from "react";

function Game(){
    return(
        <>
            <div className="cardsgamegroup">
                <div className="cardgameleft">
                    <img src="./card/Group-68.png" alt="carte du jeu gauche" />
                </div>
                <div className="cardsgamecenter">
                    <div className="cardgametitle">
                        <img src="./card/Game Name.png" alt="title du jeu" />
                    </div>
                    <div className="cardgamemain">
                        <img src="./card/Group-14.png" alt="carte du jeu principal" />
                    </div>
                </div>
                <div className="cardgameright">
                    <img src="./card/Group-66.png" alt="carte du jeu droit" />
                </div>
            </div>
        </>
    )
}
export default Game