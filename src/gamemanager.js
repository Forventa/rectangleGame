let myint;


const endRight = document.getElementById("mainsquare").offsetWidth - 50 + 10;

rm = new resourcemanager;

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
        }, 10);
    }

    startMovementLeft(rect){
        this.myint = setInterval(() => {
            this.changeDirection(rect);
            this.moveLeft(rect);
        }, 10);
    }

    changeDirection(rect){
        if(this.moveint >= endRight){
            console.log("Changed dir");
            this.clearMovement();
            this.startMovementLeft(rect);
            rm.addGold(1);
        }

        if(this.moveint < 1){
            console.log("changed dir2");
            this.clearMovement();
            this.startMovementRight(rect);
            rm.addGold(1);
        }
    }

    clearMovement(){
        clearInterval(this.myint);
    }

}