// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age = 0, dogYear = 0) {
  return dogYear;
}
let dogAge = 4
let humanToDogYears = 7 * dogAge;
calculateDogAge(dogAge,humanToDogYears);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age,noOfMovies) {
  // Your code goes here
 	return MAX_AGE * 12 * 4 * noOfMovies;
}
const MAX_AGE = 80;
calculateMoviesToWatch(MAX_AGE, 2);
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temperature) {
  // Your code goes here
  let result = (temperature * 9/5) + 32;
  return `${result}°F is ${temperature}°C`;
}
celsiusToFahrenheit(0);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/
function fahrenheitToCelsius(temperature) {
  // Your code goes here
  let result = (temperature - 32) * 9/5;
  return `${temperature}°F is ${result}°C`;
}

fahrenheitToCelsius(32);

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  // Your code goes here
  let result = n;
  if(n <= 0){
  	return `The number below 1 is not allowd`;
  }
  while(x > 1){
  	result *= n;
  	x--;
  }
  return result;
}

pow(3,3);

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n,a) {
  // Your code goes here
  let result = 1;
  if(a !== "sum" && a !== "product"){
  	return `Not a valid input`;
  }else if(a === "sum"){
  	while(n > 1){
  		result += n;
      n--;
  	}
  }else if(a === "product"){
  	while(n > 1){
  		result *= n;
      n--;
  	}
  }
  return result;
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/
function sumOfN(n) {
  // Your code goes here
  let result = 0;
  while(n){
  	result += n;
  	n--;
  }
  return result;
}
sumOfN(2);

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
function sumOfN(n) {
  // Your code goes here
  let result = 0;
  while(n){
  	if(n % 5 == 0 || n % 7 == 0){
  		result += n;
  	}
  	n--;
  }
  return result;
}
sumOfN(20);


// Your code goes here

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,b) {
  // Your code goes here
  return a < b ? a : b;
}
min(2,4);
min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(arg) {
  // Your code goes here
  return typeof arg;
}
typeCheck(1);

