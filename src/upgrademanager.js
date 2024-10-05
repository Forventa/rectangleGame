class upgrademanager{


    constructor(){
        this.speed = 100;
        this.income = 1;
    }

    upgradeCrit(rect){
        
    }


    upgradeSpeed(amount){
        this.speed -= amount;
    }

    upgradeIncome(amount){
        this.income += amount;
    }

}