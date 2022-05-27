let n = +prompt("insert a number");
let even = 0,
  odd = 0,
  zero = 0;
while (n > 0) {
  let yekan = n % 10;
  if (yekan === 0) {
    zero += 1;
    n = Math.trunc(n / 10);
  } else if (yekan % 2 === 0) {
    even += 1;
    n = Math.trunc(n / 10);
  } else {
    odd += 1;
    n = Math.trunc(n / 10);
  }
}
console.log(even, odd, zero);
