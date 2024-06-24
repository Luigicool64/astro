import React, { useState } from 'react';
import './App.css';
import Game from './page/game' ;
import Switch from './component/switch';

function App() {
  const [page, setpage] = useState('')


  function pageGame(){
    setpage('game');
  }

  
    if(page==='game'){
      return(
        <>
          <div className="logoswitch">
            <div className="logo">
              <img src="./logo.png" alt="" />
            </div>
            <Switch/>
          </div>
          <Game/>  
        </>
      )
    } else {
      return (
        <>
        <div className="switch">
          <Switch/>
        </div>
        <div className="cardgroup">
          <div className="cardsright">
            <div className="cardtop">
              <a href="#">
                <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
              </a>
            </div>
            <div className="carddown">
              <a href="#">
                <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
              </a>
            </div>
            </div>
            <div className="cardscenter">
              <div className="card cardtitle">
                <a href="#">
                  <img src="./card/card_astrodle.png" alt="carte astrodle" />
                </a>
              </div>
              <div className="cardcenter">
                <a onClick={pageGame}>
                  <img src="./card/game-menu-card.png" alt="carte partie" />
                </a>
              </div>
              <div className="card carddailymode">
                <a href="#">
                  <img src="./card/Daily.png" alt="carte mode journalier" />
                </a>
              </div>
            </div>
            <div className="cardsleft">
              <div className="cardtop">
                <a href="#">
                  <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
                </a>
              </div>
              <div className="carddown">
                <a href="#">
                  <img src="./card/game-menu-card-coming-soon.png" alt="carte prochaine" />
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  

export default App;
