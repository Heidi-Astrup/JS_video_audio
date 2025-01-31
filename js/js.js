// Fil: js.js
// Point: at lave JS med video og lyd

//variable for min video
var vid = document.getElementById("minVideo"); 

//Play/pause knap
function playPause() { 
  if (vid.paused) 
    vid.play(); 
  else 
    vid.pause(); 
} 

//størrelse på video
function stor() { 
    vid.width = 760; 
} 

function lille() { 
    vid.width = 220; 
} 

function normal() { 
    vid.width = 420; 
} 

//timestamps
function curTimeTic() { 
    vid.currentTime = 80;
} 

function curTimeGrind() { 
    vid.currentTime = 92;
} 

  
function curTimeHerdt() { 
    vid.currentTime = 115;
} 

//Loop
function enableLoop() { 
    vid.loop = true;
    vid.load();
  } 
  
  function disableLoop() { 
    vid.loop = false;
    vid.load();
  } 
  
  function checkLoop() { 
    alert(vid.loop);
  }
  

  
