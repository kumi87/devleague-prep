/** a random Number value
b random Number value
We will be using both of these variables to pass as parameters to the following functions that we will write. Pay close attention to the other variable names you will create as they will become input to other functions.**/



var a = 6;
var b = 8;


/**This function returns the result of adding a and b together. Store this value in a variable named sum.
**/

function add (score1, score2){
	return score1 + score2 ;
}

var sum = add(a, b);
console.log(sum);


/**This function returns the result of subtracting b from a Store this value in a variable named difference**/



function subtract (score1, score2){
	return score1-score2;
}

var difference =  subtract(a,b);
console.log(difference);


/**This function returns the result of multiplying b by a. Store this value in a variable named product**/


function multiplay (score1,score2){
	return score1 * score2;
}

var product = multiplay(a,b);
console.log(product);



/**This function checks the value stored at product and multiplies it by the number stored at difference and then prints the result to the console.**/
function checkDifference(x){
	return "My football team lost " + x + " times this week";
}

console.log(checkDifference(difference));



/**This function checks the value stored at sum and uses that number to print to the screen the phrase "I CAN ADDZ X NUMBERS" where X is the value stored in the variable sum .**/
function checkSum (x){
	return "I CAN ADD "+ x +" NUMBERS";
}

console.log(checkSum(sum));




/**This function checks the value stored at product and multiplies it by the number stored at difference and then prints the result to the console.**/
function checkProducts (x, y){
	return x * y;
}

console.log(checkProducts(product, difference));



/**This function takes three Number arguments named by you, then adds the first two arguments together. Then with the sum of that operation, subtract the value at the third argument. This function should make use of your previous functions.

example: addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2 **/
function addThenSubtract(number1, number2, number3){
	return number1 + number2 - number3;
}

console.log(addThenSubtract(1,2,3));



/**This function takes three Number arguments named by you, then adds the first two arguments together. Then with the sum of that operation multiply it by the third argument. This function also should make use of your previous functions.

Store the return of this function to a variable named howMany **/
function addThenMultiply(number1, number2, number3){
	return ( number1 + number2 ) * number3;
}

var howMany = addThenMultiply(1,2,3);
console.log(howMany);


/**This function takes two String arguments firstName and lastName. This function returns back a string which represents someone's full name.

Call this function and pass your first and last name into it. Store the return value to a variable named myFullName **/

function createFullName (firstName , lastName){
	return firstName + " " + lastName ;
}

var myFullName = createFullName("kumiko","Hewitt");
	console.log(myFullName);

	/**This function takes one Number argument age. This function returns the Boolean value true or false if age is lower than the legal drinking age in the state of Hawaii.

Call this function and pass in a number value. Store the return value to a variable named canDrinkBeer **/

function verifyDrinkingAge(age){
	if (age >= 21){
		return true;
	}else{
		return false;
	}
}
var canDrinkBeer = verifyDrinkingAge(19);
console.log(canDrinkBeer);



/**This function checks the value stored at the canDrinkBeer variable and if the value is false it should print to a message to the screen, "The Party will have tons of Cake!" otherwise this message should be "This Party will have an open bar".**/
function throwParty (canDrinkBeer){
	if(canDrinkBeer===false){
		return  "The Party will have tons of Cakes!";
	}else　if(canDrinkBeer===true){
		return "This Party will have an open bar";
	}
}

console.log(throwParty(canDrinkBeer));

/***This function takes 3 arguments firstName, lastName, food and prints out a message to your screen. Internally this function will make use of the createFullName function you created earlier.

exmaple input: if someone called your program like this eatFood( "John", "Papa", "Pizza" )

example output: "John Papa loves to eat Pizza"

exmaple input: if someone called your program like this eatFood( "Peter", "Bojangles", "California Burritos" )

example output: "Peter Bojanglesloves loves to eat California Burritos"***/

function eatFood (firstName, lastName, food){
	return createFullName(firstName, lastName) + " loves to eat " + food;
}

console.log(eatFood("Kumiko", "Hewitt", "Pizza"));



