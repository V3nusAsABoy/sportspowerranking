import React from 'react';
import './main.css';
import data from "./nba.json";

document.getElementById("option1").setAttribute("src", data[0].logo);
document.getElementById("option2").setAttribute("src", data[1].logo);
document.getElementById("option1txt").innerHTML = data[0].team;
document.getElementById("option2txt").innerHTML = data[1].team;

function App() {
  return (
    <>
      <div><img id = "option1"></img><p id = "option1txt"></p></div>
      <div><img id = "option2"></img><p id = "option2txt"></p></div>
    </>
  )
}

export default App;
