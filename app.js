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

 /*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

allFoods = foods.join(" -> ")

//allFoods connects the join command to the console.log
//foods.join calls upon the foods array
//(" -> " make the array display as a string with -> in between each element.  do not forget the spaces if needed.

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

hasSoup = foods.includes("soup")
//hasSoup connects this to the console.log
//foods.includes calls upon the foods array and also uses the includes method
//('whatever is in the "" is what the includes command is looking for and it will produce a bolean aka true/false')

console.log('Exercise 10 result:', hasSoup);

// for loop
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//  }
 
// for ... of loop
//  for (const element of arr) {
//    console.log(element);
//  }
 
// forEach() method
//  arr.forEach((element) => {
//    console.log(element);
//  });
 
/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
//this is my starting array

const odds = []
//this is my new empty array that i will put the odds into and it connects to the console.log directly

for (let i = 0; i < nums.length; i++){
//a for loop for declares it 
// let i = 0 starts it at the begining of the array, position 1 aka 0
//i < nums.length is a condition, if it is true the condition will keep going, if not it will stop this basically means the entire length of the array
// i++ means to keep looping plus one plus one
   if(nums[i] % 2 !== 0){
      //if the nums array [i] or intiger is not divisible by 2 to = 0 then it will grab that [i]
      odds.push(nums[i])
      // this taks what was found and puts it in the odds array
   }
}


console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
const fizz = []
const buzz = []
const fizzbuzz = []
//these declare the new arrays and are currently empty

for (let i = 0; i < nums.length; i++){
   //starting the for loop at the begining, spaning the entire loop, counting up by one each time
   
   if(nums[i] % 3 === 0 && nums[i] % 5 === 0){
      fizzbuzz.push(nums[i])
      //if the intger in the array is divisible by 3 and 5 then display is fizzbuzz array
   } if(nums[i] % 3 === 0){
      fizz.push(nums[i])
      //if the intiger in the array is divisible by 3 only then display fizz array
   } if(nums[i] % 5 === 0){
      buzz.push(nums[i])
      //if the intiger in the array is divisible by 5 only then display in the buzz array
   } 

}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


// const oneDArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const oneDArray = [
//    1, // 0 index
//    2, // 1 index
//    3, // 2 index
//    // and so on
//  ]
//  const twoDArray = [
//    [1, 2, 3], 
//    [4, 5, 6],
//    [7, 8, 9]
//  ];
 
//  const twoDArray = [
//    [1, 2, 3], // index 0
//    [4, 5, 6], // index 1
//    [7, 8, 9]  // index 2
//  ];
 
//  const twoDArray = [
//    [1, 2, 3], // index 0
//  // 0  1  2
//    [4, 5, 6], // index 1
//  // 0  1  2
//    [7, 8, 9]  // index 2
//  // 0  1  2
//  ];
 
 /*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

numList = numArrays[numArrays.length -1]



console.log('Exercise 13 result:', numList);



