import React, { useState } from 'react';
import data from "./nba.json";
import './main.css';

function App() {
  class team{
    name;
    logo;
    betterThan;
    worseThan;
    constructor(name,logo){
      this.name = name;
      this.logo = logo;
      this.betterThan = [];
      this.worseThan = [];
    }
  }

  let teams = [];

  for(let i = 0; i < data.length; i++){
    teams.push(new team(data[i].team,data[i].logo));
  }

  let [img1, setImg1] = useState(teams[0].logo);
  let [img2, setImg2] = useState(teams[1].logo);
  let [txt1, setTxt1] = useState(teams[0].name);
  let [txt2, setTxt2] = useState(teams[1].name);
  
  return (
    <>
      <script defer language="JavaScrirpt" src = "Algorithm.js" />
        <div id = "options">
          <div class = "option"><img src = {img1}></img><p>{txt1}</p><hr /></div>
          <p id = "or">or</p>
          <div class = "option"><img src = {img2}></img><p>{txt2}</p><hr /></div>
        </div>
    </>
  )
}

export default App;
