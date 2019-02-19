//VARIABLES
let car = {
    make: 'Ferrari',
    model:'458 italia spider',
    color:'black',
    mileage:0,
    isworking: true,

    drivetowork(){
        alert(`Old Mileage: ${this.mileage}`);
     this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },
    
    drivearoundusa(){
        alert(`Old Mileage: ${this.mileage}`);
     this.mileage += 7000;
        alert(`New Mileage: ${this.mileage}`);
        alert('Car needs a tuneup');
        this.isworking= false;
    },

    gettuneup(){
        alert('Car is fixed and ready to go')
        this.isworking=true;
    },

    honk(){
        alert("Beep,Beep");
    }

};

//FUNCTIONS
//logs all our car's current stats to the console
 rewritestats=()=>{
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`IsWorking: ${car.isWorking}`);
    console.log("---------------------------------------------------------------------")
}

//MAIN PROCESS
//Captures keyboard input depending on the letter pressed it will call different functions
document.onkeyup = (event) => {
   
    //Captures the key press, converts it to a lowercase, and saves it to variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === 'd'){
        car.drivetowork();
        rewritestats();
    }
    if (letter === 'r'){
        car.drivearoundusa();
        rewritestats(); 
    
    }
    if (letter === 't'){
        car.gettuneup();
        rewritestats(); 
    }
    if (letter === 'h'){
        car.honk();
        rewritestats();
}
