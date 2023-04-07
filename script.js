setInterval(() => {
        date = new Date();
        xHour = date.getHours();
        xMins = date.getMinutes();
        xSec = date.getSeconds();
        hourRotation = 30*xHour + xMins/2;
        minRotation = 6*xMins + xSec/10;
        secRotation = 6*xSec;
    
        document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`; 
        document.getElementById('min').style.transform = `rotate(${minRotation}deg)`;
        document.getElementById('sec').style.transform = `rotate(${secRotation}deg)`;
    }, 1000);
