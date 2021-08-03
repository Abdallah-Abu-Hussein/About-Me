/* eslint-disable no-var */
/* eslint-disable eqeqeq */
'use strict';
let score = 0;
let name = prompt('What\'s Your Name');

let lovingsummer = prompt('Do you think I love summer ?, type y(yes)/n(no)');
lovingsummer.toLowerCase();
alert(lovingsummer === 'y' ? 'WE are burnnig here, how could anyone tolerate summer' : 'Your right the sun is going to kill me,Can\'t wait for winter !!!!');

if(lovingsummer === 'y'){
  score++;
}

let favfood = prompt('Is jordanin Food my favorite food ? , type y(yes)/n(no)');
favfood.toLowerCase();
alert(favfood === 'y' ? 'You are right I would not stay here if it wasn\'t for the food' : 'WRONG, I like the food here!');
if(lovingsummer === 'y'){
  score++;
}

let lovingSports = prompt('Do you think I like sports ?, type y(yes)/n(no)');
lovingSports.toLowerCase();
alert(lovingSports === 'y' ? 'You are right' : 'WRONG, I love sports, we can\'t be healthy without it!');

if(lovingSports === 'y'){
  score++;
}

let goodCoder = prompt('Do Think am a good coder ?');
goodCoder.toLowerCase();
alert(goodCoder === 'y' ? 'Thinks a lot' : 'I appreciate your honesty ');

if(goodCoder === 'y'){
  score++;
}
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

let guessedNumber = prompt('guess a number , you have 4 attempts ;)');
let rand_number = Math.floor( Math.random() * 11);
console.log(rand_number);
let counter = 0;

while (counter <= 4) {
  if (guessedNumber == rand_number) {
    alert('nice, correct answer (:');
    score++;
    break;
  } else if (guessedNumber < rand_number) {
    alert('too low');
    counter++;
    guessedNumber = prompt('guess a number ...?');

  } else if (guessedNumber > rand_number) {
    alert('too high');
    counter++;
    guessedNumber = prompt('guess a number ...?');
  }

}
alert('the number was ' + rand_number);
let what_is_Myfav = prompt('What is My favorite fast food chain ? , you have 6 attempts, hint Subway');

let fav_chains = ['Subway', 'McDonald', 'Pizza_Hut', 'Taco_Bell'];

for (let i = 0; i < 6; i++) {
  for (var j = 0; j < fav_chains.length; j++) {

    if (what_is_Myfav == fav_chains[j]) { alert('yes I love this restaurant');
      score++;
      break;
    }

  } if (what_is_Myfav == fav_chains[j]) {
    break;
  }else
  {
    alert('Sorry wrong answer, try again');}
  what_is_Myfav = prompt('What is My favorite fast food chain ? ');

}
alert('My favorite chains are ,Subway ,McDonald ,Pizza_Hut ,Taco_Bell');


alert('Nice to meet you ! ' + name + ' your score is = ' + score);







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
// messages and replace them with the alerts() to complete the project
