function celsiusToFahrenheit(celsius){
let fahrenheit=(celsius*1.8)+32;

console.log(celsius+" Celsius is equal to " + fahrenheit +" Faranheit")

}

function FahrenheitToCelsius(fahrenheit){
    let celsius=Math.floor((fahrenheit - 32) * 0.5556);
    console.log(fahrenheit+" fahrenheit is equal to " + celsius +" celsius")

}


celsiusToFahrenheit(50);

FahrenheitToCelsius(122);