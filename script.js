/* Change the value of Kelvin to forecast the temperature in Fahrenheit.
Current temperature in Kelvin degrees. */
const kelvin = 283;

// Log the temperature in Kelvin.
console.log(`Current Temperature:`);
console.log(`${kelvin} degrees Kelvin.`);

// Convert Kelvin to Celsius.
const celsius = kelvin - 273;

// Log the temperature in Celsius.
console.log(`${celsius} degrees Celsius.`);

// Convert Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit.
console.log(`${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton scale.
// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down Newton temperature.
newton = Math.floor(newton);

// Log the temperature in Newton.
console.log(`${newton} degrees Newton.`);
