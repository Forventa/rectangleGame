const startbutton = document.getElementById("startbutton");
const gamesquare1 = document.getElementById("gamesquare1");
const gamesquare2 = document.getElementById("gamesquare2");
const buybutton = document.getElementById("buynewsquare");

gm = new gamemanager;
rm = new resourcemanager;
um = new upgrademanager;
bm = new buttonmanager;

startbutton.addEventListener("click", () =>{
    //gm.moveRight(gamesquare1);
    gm.startMovement(gamesquare1);
    bm.hideButton(startbutton);

});


buybutton.addEventListener("click", ()=>{
    gm2 = new gamemanager;
    gamesquare2.hidden = false;
    gm2.startMovement(gamesquare2);
});


window.onload = rm.loadResources;