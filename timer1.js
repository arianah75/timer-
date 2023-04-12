const args = process.argv.slice(2);
//we get array of [10,3,5,15,9] these repesent seconds take for bell to go off.
const timer = function(seconds) {
  //isNaN() function takes argument and checks if it is number or not.
  if (isNaN(seconds) || seconds < 0) {
    return; // Ignore/skip negative or non-numeric input
  }

  setTimeout(() => {
    process.stdout.write('\x07'); // Make a beep sound.
  }, seconds * 1000);

  console.log(`Timer set for ${seconds}s`);
};

for (const arg of args) {
  timer(Number(arg)); //change to number for constancy even if the given number is a string such as "2".
}