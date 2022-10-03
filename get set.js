// Only change code below this line
class Thermostat{
    constructor(tmprtr){
      this.tmprtr = tmprtr;
    }
  
    // get
    get temperature(){
        // this will return in Celsius
      return (5/9) * (this.tmprtr - 32)
    }
    // set
    set temperature(celsius){
        // this will take any value to Fahrenheit
      this.tmprtr = celsius * 9.0 / 5 + 32
    }
  }
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);