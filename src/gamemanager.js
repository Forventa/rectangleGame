let myint;


const endRight = document.getElementById("mainsquare").offsetWidth - 50;
const mainsquare = document.getElementById("mainsquare");

rm = new resourcemanager;
um = new upgrademanager;

class gamemanager{

    constructor(){
        this.moveint = 0;
        this.myint = myint;
    }



    moveRight(rect){
        this.moveint ++;
        rect.style.left = this.moveint + "px";
    }
    
    moveLeft(rect){
        this.moveint --;
        rect.style.left = this.moveint + "px";
    }




    startMovement(rect){
        this.startMovementRight(rect);
    }

    startMovementRight(rect){
        this.myint = setInterval(() => {
            this.changeDirection(rect);
            this.moveRight(rect);
        }, um.speed);
    }

    startMovementLeft(rect){
        this.myint = setInterval(() => {
            this.changeDirection(rect);
            this.moveLeft(rect);
        }, um.speed);
    }

    changeDirection(rect){
        if(this.moveint >= endRight){
            console.log("Changed dir");
            this.clearMovement();
            this.startMovementLeft(rect);
            rm.addGold(um.income);
            
        }

        if(this.moveint < 1){
            console.log("changed dir2");
            this.clearMovement();
            this.startMovementRight(rect);
            rm.addGold(um.income);
            
        }
    }

    clearMovement(){
        clearInterval(this.myint);
    }

}