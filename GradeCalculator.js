const base = 1;

function calculateGrade(score) {
  if (score >= 90 && score <= 100) return "A";
  else if (score >= 80 && score <= 89) return "B";
  else if (score >= 70 && score <= 79) return "C";
  else if (score >= 60 && score <= 69) return "D";
  else return "F";
}

const score = base * 10 + 5;
const grade = calculateGrade(score);

console.log(`Problem 1: Grade Calculator`);
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
