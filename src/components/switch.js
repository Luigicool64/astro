import React, { useState } from "react";
import Dark from "../assets/images/Property 1=Dark.png"
import Light from "../assets/images/Property 1=Light.png";

function Switch(){
    const [turn, setturn] = useState(false)

    function Turned(){
        if(turn===false) {
            setturn(true)
            document.documentElement.style.setProperty('--background', '#AFACD3' )
        } else {
            setturn(false)
            document.documentElement.style.setProperty('--background', '#0B0B14')
        }

    }

    if(turn===false) {
        return (
            <a onClick={ Turned }>
                <img src={Dark} alt="mode jour" />
            </a>
        )
    } else {
        return (
            <a onClick={ Turned }>
                <img src={Light} alt="mode nuit" />
            </a>
        )
    }
}
export default Switch