import React, { useState } from "react";


function Switch(){
    const [turn, setturn] = useState<boolean>(false)

    function Turned(){
        if(turn===false) {
            setturn(true)
        } else {
            setturn(false)
        }

    }

    if(turn===false) {
        return (
            <a onClick={ Turned }>
                <img src="./property/Property 1=Dark.png" alt="mode jour" />
            </a>
        )
    } else {
        return (
            <a onClick={ Turned }>
                <img src="./property/Property 1=Light.png" alt="mode nuit" />
            </a>
        )
    }
}
export default Switch