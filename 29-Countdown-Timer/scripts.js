let counter;
const displayTime = document.querySelector('.display__time-left');
const displayBackTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll(`[data-time]`);


customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const seconds = this.minutes.value * 60;
    timer(seconds);
    this.reset();
})


buttons.forEach(button => {
    button.addEventListener('click', function() {
        const seconds = parseFloat(this.dataset.time);
        timer(seconds)
    })
})



function timer(seconds) {
    
    clearInterval(counter);
    const now = Date.now();
    const then = now + seconds * 1000;
    
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    counter = setInterval(function() {
        const secondsLeft = Math.round((then - Date.now())/ 1000);
        if (secondsLeft < 0) {
            clearInterval(counter);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}


function displayTimeLeft(seconds) {
    const minutesLeft = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    
    const display = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    displayTime.textContent = display;
    document.title = display;
}

function displayEndTime(seconds) {
    const time = new Date(seconds);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    displayBackTime.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}


