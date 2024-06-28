import React from "react";

import Conseillation from "../assets/icons/constellation.png";
import Discover from "../assets/icons/discoverDay.png";
import Distance from "../assets/icons/distance.png";
import Magnitude from "../assets/icons/Magnitude.png";
import Object from "../assets/icons/object.png";

import image from "../assets/images/exemple/Rectangle 71.png"

function SideCard(){
    return(
        <>
        <div className="card">
            <div className="cardinfo">
                <img src={image}/>
                <h1>Nicolas Claude Fabri de Peyresc</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tincidunt libero, eu gravida lectus. Maecenas placerat euismod tellus, non sollicitudin enim aliquam at. Quisque eget leo nisl.</p>
                <div className="infogroup">
                    <div className="info">
                        <img src={Conseillation}/>
                        <p>Orion</p>
                    </div>
                    <div className="info">
                        <img src={Discover}/>
                        <p>26 novembre 1610</p>
                    </div>
                    <div className="info">
                        <img src={Object}/>
                        <p>Nébuleuse</p>
                    </div>
                    <div className="info">
                        <img src={Magnitude}/>
                        <p>7.5</p>
                    </div>
                    <div className="info">
                        <img src={Distance}/>
                        <p>1344</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default SideCard
