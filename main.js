//Variables
let car = {
    make: "Ferrari",
    model:"458 italia spider",
    color:"black",
    mileage:0,
    isworking: true,

    drivetowork(){
        alert('Old Mileage: ${this.mileage}');
        this.mileage = this.mileage +10
        alert('New Mileage: ${this.mileage}');
    }
}

//Functions
//logs all our car's current stats to the console
const rewritestats() => {

}

//Main Process
//Captures keyboard input depending on the letter pressed it will call different functions
const document.onkeyup(event) => {
    //Captures the key press, converts it to a lowercase, and saves it to variavle
    let letter = string.fromCharCode(event.keycode)toLoweCase();

    if (letter === 'd'){
        car.drivetowork();
        rewritestats();
    }
}
