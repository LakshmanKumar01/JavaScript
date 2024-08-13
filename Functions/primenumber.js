function PrimeOrNot(number) {
  let count = 0;
  for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count === 1) {
    console.log(number, "Prime");
  } else {
    console.log(number, "Not a Prime");
  }
}
// PrimeOrNot(11);

for (let i = 1; i <= 10; i++) {
  PrimeOrNot(i);
}
