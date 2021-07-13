var compliments = ["Your hair looks great!", 
"You have a great smile!", 
"You light up every room you walk into!", 
"Your third eye is WIDE OPEN.", 
"Nobody does kindness like you.", 
"Your jokes make me pee a little bit.", 
"You are like a chickpea: the best of all beans."];

// 1. Add a new compliment to the end of the array!
compliments.push('Do you have a map? Because I got lost in your eyes');

  // 1a. Did the method mutate the array?
  console.log(compliments);

// 2. Add an insult to the end of the compliment array!
compliments.push('Ew poop brown eyes');

  // 2a. Did the method mutate the array?
  console.log(compliments);

// 3. Oh no! Remove that insult from the array! Get it out of here! 
compliments.pop();

  // 3a. Did the method mutate the array?
  console.log(compliments);

// 4. Add a new compliment to the beginning of the array!
compliments.unshift('Hi beautiful');

  // 4a. Did the method mutate the array?
  console.log(compliments);


// 5. Wait, remove that compliment from the beginning of the array!
compliments.shift();

  // 5a. Did the method mutate the array?
  console.log(compliments);


// 6. Remove the third compliment, the one that says 'You have a great smile!'
const index = compliments.indexOf('You have a great smile!');
if (index > -1) {
    compliments.splice(index, 1);
}

  // 6a. Did the method mutate the array?
  console.log(compliments);


// 7. Make a new array that only has the last 4 elements in it.
console.log(compliments.slice(compliments.length - 4, compliments.length));

  // 7a. Did the method mutate the array?
  console.log(compliments);


// 8. Check to see if the array includes the string "Your third eye is WIDE OPEN."
console.log(compliments.includes("Your third eye is WIDE OPEN."));

// 9. Check to see if the array includes a string that includes the word "rad". (you may need to use a for loop!)
for (var i = 0; compliments.length; i++) {
    if (compliments)
}

// 10. Find the index of the string "Nobody does kindness like you."