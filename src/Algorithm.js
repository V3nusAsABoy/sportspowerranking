import data from "./nba.json";

if(document.getElementById("option1")){
    document.getElementById("option1").setAttribute("src", data[0].logo);
  }
  if(document.getElementById("option2")){
    document.getElementById("option2").setAttribute("src", data[1].logo);
  }
  if(document.getElementById("option1txt")){
    document.getElementById("option1txt").innerHTML = data[0].team;
  }
  if(document.getElementById("option2txt")){
    document.getElementById("option2txt").innerHTML = data[1].team;
  }