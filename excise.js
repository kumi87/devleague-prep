/**Write a function that takes a single String parameter called action. 
If the value passed into our function is eathave the function 
return the String value EAT TACOS.**/
function youGetTaco(action){
	var eat = "eat";
	if (action === eat){
		return 'EAT TACOS';
	}else{
		return ":(";
	}
}

var myAction = "eat";
var myActionResult = youGetTaco(myAction);
console.log('1. youGetTaco' , myAction , myActionResult);

var myOtherAction = 'drink';
var myOtherActionResult = youGetTaco(myOtherAction);
console.log('1. youGetTaco', myOtherAction, myOtherActionResult);


/**Write a function that takes two variables of type Number called first
 and secondrespectively. 
Return true if the first number is greater than the second.**/
function  isNumberGreaterThan (first, second){
	if(first > second){
		return true;
	}else{
		return false;
	}	
}

var number1 = 6;
var number2 = 12;
var checkNumber = isNumberGreaterThan(number1, number2);
console.log(checkNumber);




/**Write a function that takes in a Boolean value named val and 
have the function return whether the value is true.**/

/**function isTrue (val){
	if(val){
      return true;
   }else {
return false;
	}
}**/

function isTrue (val){
	return (val === true);
}

var BooleanResult = true;
var checkResult = isTrue(BooleanResult);
console.log(checkResult); 



/**Write a function that takes in a Boolean value named val and have 
the function return whether the value is false.**/

/**function isFalse (val){
	if(val){
		return true;
	}else{
		return false;
	}
}**/

function isFalse (val){
	return (val === false);
}

var value = true;
var result = isFalse(value);
console.log(result);


/**Write a function that takes two variables of type String called 
firstWord and secondWordrespectively. 
Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.**/
function isEqual (firstWord, secondWord){
	if(firstWord == secondWord){
		return "'AWWWWRIGHT'";
	}else{ 
		return "Y U NO MATCH!"; }
}

var word1 = "like";
var word2 = "like";
var wordComparison = isEqual(word1, word2);
console.log(wordComparison);



/**Write a function that takes two variables of type Boolean 
called first and secondrespectively. 
Return true if both values are true otherwise return false.**/
function doubleEquals (first, second){
	if(first === true && second === true){
		return true;
	}else{
		return false;
	}
}

var firstBoolean = true;
var secondBoolean = true;
var bothBoolean = doubleEquals(firstBoolean, secondBoolean);
console.log(bothBoolean);



/**Write a function that takes three variables of 
type Number called first and second and third respectively. 
Return true if the sum of all values are greater than 30 otherwise return false.**/
function totalOver30 (first, second, third){
	if (first + second + third >= 30){
		return true;
	}else{
		return false;
	}
}

var myFirstNumber = 70;
var mySecondNumber = 10;
var myThirdNumber = 10;
var total3Number = totalOver30(myFirstNumber, mySecondNumber, myThirdNumber); 
console.log(total3Number);



/**Write a function that takes four variables of 
type Number called first and second and third and fourth respectively. 
Return true if the sum of first, second and third are less than fourth 
otherwise return **/
function totalUnderWhat (first, second, third, fourth){
	if((first + second + third) <= fourth){
		return true;
	}else{
		return false;
	}
}

var myFirstNum = 1;
var mySecondNum = 2;
var myThirdNum = 3;
var myForthNum = 1;
var total4Number = totalUnderWhat(myFirstNum, mySecondNum, myThirdNum, myForthNum);
console.log(total4Number);


//Write a function that takes in a Number value named limit 
//and have the function write a for loop that loops the number of times of limit and 
//console.log each number as the loop executes.

function looptoNumber(limit){
	for(var i=0; i<limit; i++){
		console.log(i);
	}
}
 looptoNumber(8);


//Function - showEachValue
//Write a function that takes in a Array value named characters that has a sequence of single 
//character String values and have the function write a for loop that loops for each number 
//of elements in the Array and console.log each character as the loop executes.


function showEachValue (elements){
	for (var i=0; i<elements.length; i++){
		console.log(elements[i]);
	}
}

var characters = ["a", "b", "c"];

showEachValue(characters);



//Function - createArrayFromString
//Write a function that takes a single variable of type String called word and 
//write a for loop that creates an Array made up of each character in word except for A. 
//We don't want no stinking A in our Array. Note: You will need to use the Array.
//push() method to complete this function.

function createArrayFromString (word){
	var wordArray = [];
  
	for(var i=0; i<word.length; i++){
      if(word[i] === "a" && word[i] === "A"){
        continue;
      }
        wordArray.push(word[i]);
	}
  return wordArray;
}

var myString = "I hate Kale!";
var string2Array = createArrayFromString(myString);
console.log(string2Array);

//Other solution
function createArrayFromString (word){
	var wordArray = [];
  
	for(var i=0; i<word.length; i++){
		var currentLetter = word.charAt(i);
      if(currentLetter !== "a" && currentLetter !== "A"){
        
        wordArray.push(currentLetter);
	}
}  
return wordArray;

}

var myString2 = "I hate Kale!";
var string2Array2 = createArrayFromString(myString2);
console.log(string2Array2);


//Function - greatSummator
//Write a function that takes an Array with any number of type Number and 
//write a for loop to add all numbers in the Array and return the sum.

function greatSummator (arrayNumber){
	var sumNumber = 0;

	for(var i=0; i<arrayNumber.length; i++){ //can't put var inside that for function
    sumNumber += arrayNumber[i];
		
	}
return sumNumber;  
	
}

var myNumber = [1,3,5,3,1];
var arraySum = greatSummator(myNumber);
console.log(arraySum);



//Function - totalUnderWhatFor
//Write a function that takes an Array with any number of type Number and second variable called total. 
//Return true if the sum of all values in the Array are less than total otherwise return false.

/*function totalUnderWhatFor (Array1, total){
	var array = [];

	if(for(var i=0; i < Array1.length; i++)
		(array += Array1[i];) < total) {
		return true;
	} else {
		return false;
	}

	
}/*/




function totalUnderWhatFor (arr, total){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
    }
	return (sum < totalNum);
}

var totalNum = 10;

var array = [1,2,3,4,5];

console.log(totalUnderWhatFor(array, totalNum));


//Function - checkTrueValues
//Write a function that takes an Array with any number of type Boolean values and 
//write a for loop to call our isTrue function with each value as input and return true 
//if all values return true from our isTrue function.

function isTrue (bool){
	return bool === true;
}



function checkTrueValues(arr){
for(var i=0; i<arr.length; i++){
	if(!isTrue(arr[i])){
		return false;
	}
  }
return true;
}

var someArr = [true, false, true];
var someArr2 = [true, true, true];

console.log (checkTrueValues(someArr));
console.log (checkTrueValues(someArr2));



