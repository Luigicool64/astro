import React from "react";

import Backgrourd from "../assets/images/homepage/background_center_card.png"
import image from "../assets/images/exemple/Group 8.png"

function CenterCard(){
    return(
        <>
            <div className="backgrourd">
                <img src={Backgrourd}/>
            </div>
            <div className="main">
                <div className="maininfo">
                    <h1>Nébuleuse d’orion</h1>
                    <img src={image}/>
                    <div className="maininput">
                        <input type="text"/>
                        <button>envoyer</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CenterCard