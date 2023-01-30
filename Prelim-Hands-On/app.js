const calc = require('./calculation.js');

const rhr = 300;
const dys = 6;
const hrs = 4;

const whr = calc.multiply(dys, hrs);
const gross = calc.multiply(whr, rhr);
const tax = calc.multiply(gross, 0.1);

const sss = 1200;
const p_ibig = 300;
const ph = 400;

const dduct = calc.add(calc.add(tax, sss), calc.add(p_ibig, ph));

console.log('The gross income is: ' + gross);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig fund: ' + p_ibig);
console.log('phealth: ' + ph);
console.log('Total dductions: ' + dduct);

console.log('The net salary is: ' + calc.subtract(gross, dduct));
