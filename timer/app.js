//console.log("Connected!")
const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const circle = document.querySelector('circle');
const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        //console.log('Timer Started!!!')
        duration = totalDuration;
    },
    onTick(timeRemaining){
        //console.log('Tick Tock!!')
        circle.setAttribute('stroke-dashoffset',
        perimeter * timeRemaining/duration - perimeter
        );
    },
    onComplete(){
        console.log("TIME'S UP!! OVER, BLAOW!! ")
    }
});