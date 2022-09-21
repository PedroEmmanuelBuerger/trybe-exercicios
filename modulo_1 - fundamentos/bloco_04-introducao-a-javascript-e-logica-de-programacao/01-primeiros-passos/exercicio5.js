const a = 5;
const b = 10;
const c = 25;
const parametro = a + b + c;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

if (a > b) {
    console.log(a)
}
else console.log(b);

if (a > b && a > c) {
    console.log(a)
}
else if (b > a && a > c) {
    console.log(b)
}
else console.log(c);
console.log(typeof parametro)
if (typeof a == true) {
    console.log('jesue')
}