import React, { useState } from 'react';
import data from "./nba.json";
import './main.css';

function App() {
  let [img1, setImg1] = useState(data[0].logo);
  let [img2, setImg2] = useState(data[1].logo);
  let [txt1, setTxt1] = useState(data[0].team);
  let [txt2, setTxt2] = useState(data[1].team);
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
