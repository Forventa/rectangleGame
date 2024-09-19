const gold = 0;
let goldoutput;
class resourcemanager{

    constructor(){
        this.gold = gold;
        this.goldoutput = goldoutput;
    }

    addGold(amount){
        this.gold += amount;
        this.loadResources();
    }

    removeGold(amount){
        this.gold -= amount;
        this.loadResources();
    }



    loadResources(){
        document.getElementById("goldoutput").innerHTML = `Gold: ${this.gold}`;
    }

}

