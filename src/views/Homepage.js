import React from "react"
import Switch from "../components/switch"
import { Link } from "react-router-dom"

import  commingSoon from "../assets/images/homepage/game_menu_card_coming_soon.png" ;
import titleImage from "../assets/images/homepage/card_astrodle.png";
import gameMenuCard from "../assets/images/homepage/game_menu_card.png";
import dailyCard from "../assets/images/homepage/daily.png"

function Homepage() {
  return (
    <>
      <div className="switch">
        <Switch />
      </div>
      <div className="cardgroup">
        <div className="cardsright">
          <div className="cardtop">
            <Link to="#">
              <img src={commingSoon} />
            </Link>
          </div>
          <div className="carddown">
            <Link to="#">
              <img src={commingSoon} alt="carte prochaine" />
            </Link>
          </div>
        </div>
        <div className="cardscenter">
          <div className="cardtitle">
            <Link to="#" >
              <img src={titleImage} alt="carte astrodle" />
            </Link>
          </div>
          <div className="cardcenter">
            <Link to="/game">
              <img src={gameMenuCard} alt="carPte partie" />
            </Link>
          </div>
          <div className="carddailymode">
            <Link to="#">
              <img src={dailyCard} alt="carte mode journalier" />
            </Link>
          </div>
        </div>
        <div className="cardsleft">
          <div className="cardtop">
            <Link to="#">
              <img src={commingSoon} alt="carte prochaine" />
            </Link>
          </div>
          <div className="carddown">
            <Link to="#">
              <img src={commingSoon} alt="carte prochaine" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Homepage