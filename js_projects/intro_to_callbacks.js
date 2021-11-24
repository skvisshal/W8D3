class Clock {
    constructor() {
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        this.printTime();
        setInterval(
            this._tick.bind(this), 1000
        )
    }
  
    printTime() {
        if (this.minutes < 10) {
            this.minutes 
        }
        console.log(`${this.hours < 10 ? "0" + this.hours : this.hours}:${this.minutes < 10 ? "0" + this.minutes : this.minutes}:${this.seconds < 10 ? "0" + this.seconds : this.seconds}`)
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1; 
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1 ;
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
        this.printTime();
    }
}
  
  const clock = new Clock();