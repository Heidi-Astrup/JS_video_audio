// Fil: js.js
// Point: at lave JS med video og lyd

//variable for min video
var vid = document.getElementById("minVideo"); 
var lyd = document.getElementById("minLyd"); 


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
    vid.play()
} 

function curTimeRoar() { 
    vid.currentTime = 38;
    vid.play()
    lyd.currentPosition = 0;
    lyd.play();
} 



function curTimeGrind() { 
    vid.currentTime = 92;
    vid.play()
    /*vid.muted = true;/** video muted på dette sted */

} 
  
function curTimeHerdt() { 
    vid.currentTime = 115;
    vid.play()
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
  

  
