const base = 1;

function showStars(rows) {
  for (let r = 1; r <= rows; r++) {
    let spaces = " ".repeat(rows - r);
    let stars = "*".repeat(2 * r - 1);
    console.log(spaces + stars);
  }
}

const rows = base + 2;
console.log(`Problem 2: Star Pattern (rows = ${rows})`);
showStars(rows);
