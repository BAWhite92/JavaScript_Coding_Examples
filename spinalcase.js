function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('thisIs_Spinal_Tap'));
console.log(spinalCase('this Is Spinal-tap'));
