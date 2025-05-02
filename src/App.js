import React, { useState} from 'react';
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

const [results, setResults] = useState(false);
const [options, setOptions] = useState(true);

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
      TheEnd();
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

  function TheEnd(){

    teams.sort(function(a, b){
      return (a.betterThan.length - b.betterThan.length)
    });

    setResults(true);
    setOptions(false);

  }

  return (
    <>
      { options && (
        <div id = "options">
          <button class = "option" onClick={firstOption}><img src = {img1}></img><p>{txt1}</p><hr /></button>
          <p id = "or">or</p>
          <button class = "option" onClick={secondOption}><img src = {img2}></img><p>{txt2}</p><hr /></button>
        </div>
      )}
      { results && (
        <>
          <h1>Final Ranking</h1>
          <ol>
              <li>{` ${teams[29].name}`}</li>
              <img src={`${teams[29].logo}`} />
              <hr />
              <li>{` ${teams[28].name}`}</li>
              <img src={`${teams[28].logo}`} />
              <hr />
              <li>{` ${teams[27].name}`}</li>
              <img src={`${teams[27].logo}`} />
              <hr />
              <li>{` ${teams[26].name}`}</li>
              <img src={`${teams[26].logo}`} />
              <hr />
              <li>{` ${teams[25].name}`}</li>
              <img src={`${teams[25].logo}`} />
              <hr />
              <li>{` ${teams[24].name}`}</li>
              <img src={`${teams[24].logo}`} />
              <hr />
              <li>{` ${teams[23].name}`}</li>
              <img src={`${teams[23].logo}`} />
              <hr />
              <li>{` ${teams[22].name}`}</li>
              <img src={`${teams[22].logo}`} />
              <hr />
              <li>{` ${teams[21].name}`}</li>
              <img src={`${teams[21].logo}`} />
              <hr />
              <li>{` ${teams[20].name}`}</li>
              <img src={`${teams[20].logo}`} />
              <hr />
              <li>{` ${teams[19].name}`}</li>
              <img src={`${teams[19].logo}`} />
              <hr />
              <li>{` ${teams[18].name}`}</li>
              <img src={`${teams[18].logo}`} />
              <hr />
              <li>{` ${teams[17].name}`}</li>
              <img src={`${teams[17].logo}`} />
              <hr />
              <li>{` ${teams[16].name}`}</li>
              <img src={`${teams[16].logo}`} />
              <hr />
              <li>{` ${teams[15].name}`}</li>
              <img src={`${teams[15].logo}`} />
              <hr />
              <li>{` ${teams[14].name}`}</li>
              <img src={`${teams[14].logo}`} />
              <hr />
              <li>{` ${teams[13].name}`}</li>
              <img src={`${teams[13].logo}`} />
              <hr />
              <li>{` ${teams[12].name}`}</li>
              <img src={`${teams[12].logo}`} />
              <hr />
              <li>{` ${teams[11].name}`}</li>
              <img src={`${teams[11].logo}`} />
              <hr />
              <li>{` ${teams[10].name}`}</li>
              <img src={`${teams[10].logo}`} />
              <hr />
              <li>{` ${teams[9].name}`}</li>
              <img src={`${teams[9].logo}`} />
              <hr />
              <li>{` ${teams[8].name}`}</li>
              <img src={`${teams[8].logo}`} />
              <hr />
              <li>{` ${teams[7].name}`}</li>
              <img src={`${teams[7].logo}`} />
              <hr />
              <li>{` ${teams[6].name}`}</li>
              <img src={`${teams[6].logo}`} />
              <hr />
              <li>{` ${teams[5].name}`}</li>
              <img src={`${teams[5].logo}`} />
              <hr />
              <li>{` ${teams[4].name}`}</li>
              <img src={`${teams[4].logo}`} />
              <hr />
              <li>{` ${teams[3].name}`}</li>
              <img src={`${teams[3].logo}`} />
              <hr />
              <li>{` ${teams[2].name}`}</li>
              <img src={`${teams[2].logo}`} />
              <hr />
              <li>{` ${teams[1].name}`}</li>
              <img src={`${teams[1].logo}`} />
              <hr />
              <li>{` ${teams[0].name}`}</li>
              <img src={`${teams[0].logo}`} />
              <hr />
              <br />
          </ol>
          <br />
        </>
      )}
    </>
  )
}

export default App;
