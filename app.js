/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza', 'cheeseburger')
// push means to add something to the end of an array, in this case the array was empty and we were "pushing into it"

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco')
//foods is what we use to call upon the array foods that was delacred in exercise 1.  
//unshift is used to add taco to the begining of the array, as push only adds things to the end
//if we had used shift it would have removd the first item from the array



console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

favFood = foods[1]

//favFood is what connects this line of code to the console log below
// foods[1]  retrieves the word pizza from the string

console.log('Exercise 4 result:', favFood);

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, 'tofu')

//in the splice method we can add or remove from an array.  
//start is the place in the array we are starting
//deleteCount is how many items we are deleting if any
//items are the items we are adding

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, 'sushi', 'cupcake')
//here i called upon the foods array
//then i used splice to add and remove at the same time
//1 is pizza the 2nd item in the array and what i need to remove so i need to start there
// 1 is also how many items im removing
//sushi and cupcake are adding in place of pizza or number 1


console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = foods.slice(1, 3)

//const yummy is creating the new array
//foods.slice is removing items from the foods array and making theminto the yummy array
//1 is starting at the the second spot in the array and 3 is stopping at the forth number in the array and not including it

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

soyIdx = foods.indexOf('tofu')

//soIdx connects to the console.log
//foods.indexOf calls upon the foods array and start the indexOf comman wich can locate values in an array
//tofu lets you know what value we are looking for


console.log('Exercise 8 result:', soyIdx);

 





