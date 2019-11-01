const planetData = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

function age(seconds, planet) {
  // This will allow the users to input it as Uppercase, Lowercase or Capital and this function should still work the same!
  let planetLowerCase = planet.toLowerCase();
  let earthAge = seconds / 31557600;


  // want to see the age according to all planets.
  if (planetLowerCase === "all" ) {
    for (let planetBody in planetData) {
      let age = (earthAge / planetData[planetBody]).toFixed(2);
      console.log(`You are ${age} ${planetBody.charAt(0).toUpperCase() + planetBody.slice(1)}-years old`);
      // This is taking the first character of the string changing into to uppercase and them combining it with the slice of the rest of the string - So as to capitalise the first names.
    }

  //seeing age to a specific planet!
  } else {
    let age = (earthAge / planetData[planetLowerCase]).toFixed(2);
    console.log(`You are ${age} ${planetLowerCase.charAt(0).toUpperCase() + planetLowerCase.slice(1)}-years old`);
  }
}

age(1000000000, "Mercury");
age(1000000000, "MERCURY");
age(1000000000, "mercury");
age(1000000000, "all");

//Need to figure out how to catch for errors in spelling of plants! currenly would come as NaN
