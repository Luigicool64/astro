import React, { useState } from "react";


function Switch(){
    const [turn, setturn] = useState<boolean>(false)

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
                <img src="./property/Property 1=Light.png" alt="mode jour" />
            </a>
        )
    } else {
        return (
            <a onClick={ Turned }>
                <img src="./property/Property 1=Dark.png" alt="mode nuit" />
            </a>
        )
    }
}
export default Switch