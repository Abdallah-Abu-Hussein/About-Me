'use strict';

let name = prompt('What\'s Your Name');

let lovingsummer = prompt('Do you think I love summer, type y(yes)/n(no)');
lovingsummer.toLowerCase();
alert( lovingsummer === 'y' ? "WE ARE burnnig here how could anyone tolerate summer": "Your right the sun is going to kill me,Can't wait for winter !!!!");

let favfood = prompt('Is jordanin Food my favorite food , type y(yes)/n(no)');
favfood.toLowerCase();
alert( favfood === 'y' ? "You are right I would not stay here if it wasn't for the food": "WRONG, I like the food here!");

let lovingSports = prompt('Do you think I like sports ??, type y(yes)/n(no)');
lovingSports.toLowerCase();
alert( lovingSports === 'y' ? "You are right": "WRONG, I love sports, we can't be healthy without it!" );

let goodCoder = prompt('Do Think am a good coder');
goodCoder.toLowerCase();
alert( goodCoder === 'y' ? "Thinks a lot": "I appreciate your honesty ");

alert('Nice to meet you ! '+name);








// //TODO

// // Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

// // Include on your HTML page a short biography, your education history, an overview of your job experience, 
// and any goals that you may have.

// // Prompt the user a total of exactly five yes or no questions. The user input for the answer 
// must accept either y/n or yes/no responses while taking into consideration case sensitivity by
//  normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() 
//  functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// // Add console.log() messages within your app to notify the user if they 
// are correct. Before submitting, comment out (don’t delete) your console.log()
//  messages and replace them with the alerts() to complete the project .