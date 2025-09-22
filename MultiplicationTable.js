const base = 1;

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

console.log(`Problem 4: Multiplication Table for ${base}`);
multiplicationTable(base);
