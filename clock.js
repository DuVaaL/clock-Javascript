
var seconde = document.querySelector('.second');
var minutes = document.querySelector('.minute');
var hour = document.querySelector('.hour');

function setDate(){

    var getDate = new Date();
    var getSecond = getDate.getSeconds() ;
    var rotationSecond = ((getSecond / 60) * 360) + 90;
    seconde.style.transform = `rotate(${rotationSecond}deg)`;
  
    var getMinute = getDate.getMinutes() ;
    var rotationMinute = ((getMinute / 60) * 360) + 90;
    minutes.style.transform = `rotate(${rotationMinute}deg)`;

    var getHour = getDate.getHours() ;
    var rotationHour= ((getHour / 12 ) * 360) + 90;
    hour.style.transform = `rotate(${rotationHour}deg)`;
    
}

setInterval(setDate, 1000);
