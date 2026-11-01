let hasKey = false;
let toyFound = false;
let bowlFound = false;
let couchFound = false;
let spoolieFound = false;
let livingVisited = false;
let drawerVisited = false;
let workspaceVisited = false;
let studioVisited = false;
function updateClueCounter() {
  document.getElementById("clue-counter").innerHTML =
    "Clues found: " + cluesFound() + " of 3";
}


function hideAll() {
  document.getElementById("entrance").style.display = "none";
  document.getElementById("living").style.display = "none";
  document.getElementById("drawer").style.display = "none";
  document.getElementById("workspace").style.display = "none";
  document.getElementById("studio").style.display = "none";
}

function showLiving() {
  let returnNote = document.getElementById("return-note");
  if (livingVisited == true) {
    returnNote.innerHTML = "You have been here before.";
  } else {
    returnNote.innerHTML = "";
  }
  livingVisited = true;
  hideAll();
  document.getElementById("living").style.display = "block";
}

function showDrawer() {
  let returnNote = document.getElementById("return-note");
  if (drawerVisited == true) {
    returnNote.innerHTML = "You have been here before.";
  } else {
    returnNote.innerHTML = "";
  }
  drawerVisited = true;
  hideAll();
  document.getElementById("drawer").style.display = "block";
}

function showWorkspace() {
  let returnNote = document.getElementById("return-note");
  if (workspaceVisited == true) {
    returnNote.innerHTML = "You have been here before.";
  } else {
    returnNote.innerHTML = "";
  }
  workspaceVisited = true;
  hideAll();
  document.getElementById("workspace").style.display = "block";
}

function showStudio() {
  let returnNote = document.getElementById("return-note");
  if (studioVisited == true) {
    returnNote.innerHTML = "You have been here before.";
  } else {
    returnNote.innerHTML = "";
  }
  studioVisited = true;
  hideAll();
  document.getElementById("studio").style.display = "block";
}

function cluesFound() {
  let count = 0;
  if (toyFound == true) { count++; }
  if (bowlFound == true) { count++; }
  if (couchFound == true) { count++; }
  return count;
}
document.getElementById("toy").addEventListener("click", updateClueCounter);
document.getElementById("bowl").addEventListener("click", updateClueCounter);
document.getElementById("couch").addEventListener("click", updateClueCounter);
document.getElementById("pumpkin").addEventListener("click", function () {
  hasKey = true;
  document.getElementById("entrance-text").innerHTML = "You found a spare key under the pumpkin.";
});

document.getElementById("door").addEventListener("click", function () {
  if (hasKey == true) {
    showLiving();
  } else {
    document.getElementById("entrance-text").innerHTML = "The door is locked.";
  }
});

document.getElementById("toy").addEventListener("click", function () {
  if (toyFound == false) {
    toyFound = true;
    updateClueCounter();
    document.getElementById("living-text").innerHTML = "Mochi's favourite toy is lying untouched. She never leaves this behind!";
  } else {
    document.getElementById("living-text").innerHTML = "You already checked the toy.";
  }
});

document.getElementById("bowl").addEventListener("click", function () {
  if (bowlFound == false) {
    bowlFound = true;
    updateClueCounter();
    document.getElementById("living-text").innerHTML = "Her food is still here. Wherever Mochi went, she must have been in a hurry.";
  } else {
    document.getElementById("living-text").innerHTML = "You already checked the bowl.";
  }
});

document.getElementById("couch").addEventListener("click", function () {
  if (couchFound == false) {
    couchFound = true;
    updateClueCounter();
    document.getElementById("living-text").innerHTML = "There's a little indentation in the cushion. Mochi was definitely here earlier.";
  } else {
    document.getElementById("living-text").innerHTML = "You already checked the couch.";
  }
});

document.getElementById("drawer-go").addEventListener("click", function () {
  if (cluesFound() == 3) {
    document.getElementById("drawer-text").innerHTML = "The drawer opens. Mochi has been busy all day. Maybe she's in her mom's workplace, helping.";
    document.getElementById("drawer-workspace").style.display = "inline";
  } else {
    document.getElementById("drawer-text").innerHTML = "The drawer won't budge. Maybe there's something else to investigate.";
    document.getElementById("drawer-workspace").style.display = "none";
  }
  showDrawer();
});

document.getElementById("drawer-back").addEventListener("click", function () {
  showLiving();
});

document.getElementById("living-workspace").addEventListener("click", function () {
  showWorkspace();
});

document.getElementById("drawer-workspace").addEventListener("click", function () {
  showWorkspace();
});

document.getElementById("laptop").addEventListener("click", function () {
  document.getElementById("workspace-text").innerHTML = "Her mom's appointment schedule is fully booked.";
});

document.getElementById("smoothie").addEventListener("click", function () {
  document.getElementById("workspace-text").innerHTML = "Oh wait! She has a smoothie open with her mom's laptop.";
});

document.getElementById("spoolie").addEventListener("click", function () {
  spoolieFound = true;
  document.getElementById("workspace-text").innerHTML = "A pink lash brush? Mochi must be helping with the lashes.";
  document.getElementById("studio-go").style.display = "inline";
});

document.getElementById("studio-go").addEventListener("click", function () {
  enterStudio();
});

document.getElementById("workspace-back").addEventListener("click", function () {
  showLiving();
});

function enterStudio() {
  let text = document.getElementById("studio-text");
  let restart = document.getElementById("restart");
  if (cluesFound() == 3 && spoolieFound == true) {
    text.innerHTML = "She wasn't missing, she was filling in for her mom!";
    restart.style.display = "inline";
  } else {
    text.innerHTML = "Looks like you just missed her! Maybe there's another clue you haven't discovered.";
    restart.style.display = "inline";
  }
  showStudio();
}

function resetGame() {
  hasKey = false;
  toyFound = false;
  bowlFound = false;
  couchFound = false;
  spoolieFound = false;
  livingVisited = false;
  drawerVisited = false;
  workspaceVisited = false;
  studioVisited = false;
  document.getElementById("return-note").innerHTML = "";
  document.getElementById("entrance-text").innerHTML = "It's getting late, and Mochi is nowhere to be seen. Maybe there's a way inside.";
  document.getElementById("living-text").innerHTML = "The living room is quiet.";
  document.getElementById("drawer-text").innerHTML = "";
  document.getElementById("workspace-text").innerHTML = "Maybe she's in her mom's workplace, helping.";
  document.getElementById("studio-text").innerHTML = "";
  document.getElementById("drawer-workspace").style.display = "none";
  document.getElementById("studio-go").style.display = "none";
  document.getElementById("restart").style.display = "none";
  hideAll();
  document.getElementById("entrance").style.display = "block";
}

document.getElementById("restart").addEventListener("click", function () {
  resetGame();
});

document.getElementById("drawer-workspace").style.display = "none";
document.getElementById("studio-go").style.display = "none";
document.getElementById("restart").style.display = "none";
document.getElementById("entrance").style.display = "block";
