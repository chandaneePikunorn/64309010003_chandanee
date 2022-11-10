const kelvin = 293;
const celsius = kelvin - 273;
let farenheit = celsius * (9 / 5) + 32;
farenheit=Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);