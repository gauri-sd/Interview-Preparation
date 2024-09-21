let maxSpaces = 5;
//upper
for (let i = 0; i <= 5; i++) {
  let space = maxSpaces - i;
  let stars = "*".repeat(i * 2 + 1);
  console.log(" ".repeat(space), stars);
}
// lower
for (let i = 5; i >= 0; i--) {
  let spaces = maxSpaces - i;
  let stars = "*".repeat(i * 2 + 1);
  console.log(" ".repeat(spaces), stars);
}
