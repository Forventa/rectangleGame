const startbutton = document.getElementById("startbutton");
const gamesquare1 = document.getElementById("gamesquare1");

gm = new gamemanager;
rm = new resourcemanager;
um = new upgrademanager;
bm = new buttonmanager;

startbutton.addEventListener("click", () =>{
    //gm.moveRight(gamesquare1);
    gm.startMovement(gamesquare1);
    bm.hideButton(startbutton);

});


window.onload = rm.loadResources;