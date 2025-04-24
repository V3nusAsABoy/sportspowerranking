import React, { useState } from 'react';
import data from "./nba.json";
import './main.css';

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

let current1 = 0;
let current2 = 1;

function App() {

let [img1, setImg1] = useState(teams[current1].logo);
let [img2, setImg2] = useState(teams[current2].logo);
let [txt1, setTxt1] = useState(teams[current1].name);
let [txt2, setTxt2] = useState(teams[current2].name);

Array.prototype.unique = function() {
  var a = this.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }

  return a;
};

  function firstOption(){
    teams[current1].betterThan.concat(teams[current2].betterThan).unique();
    teams[current1].betterThan.push(teams[current2].name);
    teams[current2].worseThan.concat(teams[current1].worseThan).unique();
    teams[current2].worseThan.push(teams[current1].name);
    addToBetter(teams[current2].name,teams[current1].name);
    addToWorse(teams[current2].name,teams[current1].name);
    next();
  }

  function secondOption(){
    teams[current2].betterThan = teams[current2].betterThan.concat(teams[current1].betterThan).unique();
    teams[current2].betterThan.push(teams[current1].name);
    teams[current1].worseThan = teams[current1].worseThan.concat(teams[current2].worseThan).unique();
    teams[current1].worseThan.push(teams[current2].name);
    next();
  }

  function addToWorse(worseTeam, betterTeam){
    for(let i = 0; i < 30; i++){
      if((teams[i].betterThan.includes(betterTeam)) && !(teams[i].betterThan.includes(worseTeam))){
        teams[i].betterThan.push(worseTeam);
      }
    }
  }

  function addToBetter(worseTeam, betterTeam){
    for(let i = 0; i < 30; i++){
      if(teams[i].worseThan.includes(worseTeam) && !(teams[i].worseThan.includes(betterTeam))){
        teams[i].worseThan.push(betterTeam);
      }
    }
  }

  function next(){
    current2++;
    if(current2 == 30){
      current2 = 0;
      current1++;
    } else {
      if(current2 == current1){
        next();
      }
    }
    if(current1 == 29){
      theEnd();
    } else {
      if(!(teams[current1].betterThan.includes(teams[current2].name) || teams[current1].worseThan.includes(teams[current2].name) 
      || teams[current2].betterThan.includes(teams[current1].name) || teams[current2].worseThan.includes(teams[current1].name))){
        setImg1(teams[current1].logo);
        setImg2(teams[current2].logo);
        setTxt1(teams[current1].name);
        setTxt2(teams[current2].name);
      } else {
        next();
      }
    }
  }

  function theEnd(){
    for(let i = 0; i < 30; i++){
      console.log(`${teams[i].name}: ${teams[i].betterThan.length}`)
    }
  }

  return (
    <>
        <div id = "options">
          <button class = "option" onClick={firstOption}><img src = {img1}></img><p>{txt1}</p><hr /></button>
          <p id = "or">or</p>
          <button class = "option" onClick={secondOption}><img src = {img2}></img><p>{txt2}</p><hr /></button>
        </div>
    </>
  )
}

export default App;
