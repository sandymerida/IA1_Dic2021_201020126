function reflex_agent(location, state){
  if (state == "DIRTY") return "CLEAN";
  else if (location == "A") return "RIGHT";
  else if (location == "B") return "LEFT";
}

var indice = 0;
var next = false;
function test(states){
  var location = states[0];
  var state = states[0] == "A" ? states[1] : states[2];
  var action_result = reflex_agent(location, state);
  indice += 1;
  document.getElementById("log").innerHTML+="<br>".concat(indice).concat(".  Location:").concat(location).concat(" | Action: ").concat(action_result).concat(" | State: ").concat(location).concat(" / ").concat(states[1]).concat(" / ").concat(states[2]);
  if(states[1] == "CLEAN" && states[2] == "CLEAN"){
      if(!next){
          next = true;
          if (location == "A"){
              states[1] = "DIRTY";
              states[2] = "DIRTY";
          }else{
              states[1] = "DIRTY";
              states[2] = "DIRTY";
          }

      }else{
          document.getElementById("log").innerHTML+="<br>***ALL CLEAN***";
          return;
      }
  }else if(action_result == "CLEAN"){
      if (location == "A") states[1] = "CLEAN";
      else if (location == "B") states[2] = "CLEAN";
  }
  else if (action_result == "RIGHT") states[0] = "B";
  else if (action_result == "LEFT") states[0] = "A";

  setTimeout(()=>{ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);