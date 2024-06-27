import React from "react";
import Conseillation from "../assets/icons/constellation.png";
import Discover from "../assets/icons/discoverDay.png";
import Distance from "../assets/icons/distance.png";

function SideCard(){
    return(
        <>
        <div className="card">
            <img src=""/>
            <h1></h1>
            <p></p>
            <div className="infogroup">
                <div className="info">
                    <img src={Conseillation}/>
                    <p></p>
                </div>
                <div className="info">
                    <img src={Discover}/>
                    <p></p>
                </div>
                <div className="info">
                    <img src={Conseillation}/>
                    <p></p>
                </div>
                <div className="info">
                    <img src={Conseillation}/>
                    <p></p>
                </div>
                <div className="info">
                    <img src={Distance}/>
                    <p></p>
                </div>
            </div>
        </div>
        </>
    )
}
export default SideCard
