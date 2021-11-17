class Rocket{
    // name states first
    constructor(
        fuelType,
        weight,
        power
    ){ // substanite states
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;

    } 
        launch(){
            alert("luanch sequence started");
            return true;
        }
        
        landing(){
            alert("landing started");
            return true;
        }

        burn(fuelUsed){
            alert(" Fuel used" + fuelUsed);
            return true;
        }

}
class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("the spacecraft " + this.spaceCraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear + " with an 02 Level of " + this.oxyLvl + "%");
    }

    launch(){
        alert("luanch sequence started");
    }
}

function launchFall(){
    fallLaunch.launch();
}

function displayFall(){
    console.log("auhdiuahiudworking")
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    springLaunch.launch();
}

function displaySpring(){
    springLaunch.displayMissionParameters();
}