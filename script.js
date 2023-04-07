setInterval(() => {
        date = new Date();
        xHour = date.getHours();
        xMins = date.getMinutes();
        xSec = date.getSeconds();
        hourRotation = 30*xHour + xMins/2;
        minRotation = 6*xMins + xSec/10;
        secRotation = 6*xSec;
    
        document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;  // rotate(xdeg)
        document.getElementById('min').style.transform = `rotate(${minRotation}deg)`;
        document.getElementById('sec').style.transform = `rotate(${secRotation}deg)`;
    }, 1000);

// The setInterval() method calls a function at specified intervals (in milliseconds) ie, repeats the assigned work every 1000 milliseconds(1 sec)
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.