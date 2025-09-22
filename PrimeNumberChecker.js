const base = 1;

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

const check = base + 10;
console.log(`Problem 3: Prime Checker`);
console.log(`Number Checked: ${check}`);
console.log(`${check} is ${isPrime(check) ? "a prime" : "not a prime"}.`);
