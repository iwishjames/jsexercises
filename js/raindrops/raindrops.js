function raindrop(number) {
  let sound = ""; // an empty array to which to push the sounds of the rain.

  if (number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    console.log(number); // if number does is not a factor of the 3, then just console the number.
  }
  else { // nested if statements within this else, where if it matches any of the factors it pushes the sound to the array.

    if (number % 3 === 0) {
      sound += "pling"; // adding pling to the empty array.
    }
    if (number % 5 === 0) {
      sound += "plang";
    }
    if (number % 7 === 0) {
      sound += "plong";
    }
    console.log(sound); // finally console logging sound to reveal the array's contents.
  }
}

raindrop(28);
raindrop(30);
raindrop(34);
