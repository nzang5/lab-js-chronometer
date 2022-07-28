class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;       //iteration 1
  }

  start(printTimeCallback) {
   this.intervalId = setInterval(()=> {
    
    this.currentTime++;

    if(printTimeCallback){
      return printTimeCallback();
    }
    
   }, 1000) // iteration 2
  }

  getMinutes() {
    let totalTime = Math.floor(this.currentTime / 60);
    return totalTime;                                 // iteration 3
  }

  getSeconds() {
    let totalSeconds = (this.currentTime % 60);
    return totalSeconds;   // iteration 4
  }

  // getCentiseconds() {
  //   let centiSeconds = (this.getSeconds / 100);
  //   return centiSeconds;
  //   }

  computeTwoDigitNumber(value) {
    if(value >= 10){
    return `${value}`;
    }

   else if(value < 10 && value > 0){
       return `0${value}`;                         // iteration 4
    }
    else{
      return `00`
    }
  }

  stop() {
   clearInterval(this.intervalId);                // iteration 5
  }

  reset() {
   this.currentTime = 0;                     // iteration 6
  }

  split() {
   let minutes = this.computeTwoDigitNumber(this.getMinutes());
   let seconds = this.computeTwoDigitNumber(this.getSeconds());
 // let centiSeconds = this.computeTwoDigitNumber(this.getcentiSeconds());
   
    return `${minutes}:${seconds}` 
  
  }
 

}
