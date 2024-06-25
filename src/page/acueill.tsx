import React from "react"
import Switch from "../component/switch"
import { Link } from "react-router-dom"

function Acueill() {
    return (
        <>
        <div className="switch">
          <Switch/>
        </div>
        <div className="cardgroup">
          <div className="cardsright">
            <div className="cardtop">
              <Link to="#">
                <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
              </Link>
            </div>
            <div className="carddown">
              <Link to="#">
                <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
              </Link>
            </div>
            </div>
            <div className="cardscenter">
              <div className="card cardtitle">
                <Link to="#" >
                  <img src="./card/card_astrodle.png" alt="carte astrodle" />
                </Link>
              </div>
              <div className="cardcenter">
                <Link to="/game">
                  <img src="./card/game-menu-card.png" alt="carte partie" />
                </Link>
              </div>
              <div className="card carddailymode">
                <Link to="#">
                  <img src="./card/Daily.png" alt="carte mode journalier" />
                </Link>
              </div>
            </div>
            <div className="cardsleft">
              <div className="cardtop">
                <Link to="#">
                  <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
                </Link>
              </div>
              <div className="carddown">
                <Link to="#">
                  <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
                </Link>
              </div>
            </div>
          </div>
          </>
    )
}
export default Acueill