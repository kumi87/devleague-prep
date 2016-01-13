/**Write a function that takes a single String parameter called action. 
If the value passed into our function is eathave the function return the String value EAT TACOS.**/
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


/**Write a function that takes two variables of type Number called first and secondrespectively. 
Return true if the first number is greater than the second.**/
function  isNumberGreaterThan (first, second){
	if(first >= second);
	return true;

}

var numbers = isNumberGreaterThan(6, 4);
console.log(numbers);

/**Write a function that takes in a Boolean value named val and have the function return whether the value is true.**/
function isTrue (val){
	if( val === 7){
      return true;
   }else {
return false;
	}
}

console.log(isTrue(8)); //changed 7 to 8

/**Write a function that takes in a Boolean value named val and have the function return whether the value is false.**/
function isFalse (val){
	if(val === 'water'){
		return false;
	}else{
		return true;
	}
}
console.log(isFalse('coke'));

/**Write a function that takes two variables of type String called firstWord and secondWordrespectively. 
Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.**/
function isEqual (firstWord, secondWord){
	if(firstWord === secondWord){
		return "'AWWWWRIGHT'";
	}else{ 
		return "Y U MATCH!"; }
}

console.log(isEqual("sun", "sunday"));

/**Write a function that takes two variables of type Boolean called first and secondrespectively. 
Return true if both values are true otherwise return false.**/
function doubleEquals (first, second){
	if(first === second){
		return true;
	}else{
		return false;
	}
}

console.log(doubleEquals(true, true));

/**Write a function that takes three variables of type Number called first and second and third respectively. 
Return true if the sum of all values are greater than 30 otherwise return false.**/
function totalOver30 (first, second, third){
	if (first + second + third >= 30){
		return true;
	}else{
		return false;
	}
}

console.log(totalOver30(10,10,10));

/**Write a function that takes four variables of type Number called first and second and third and fourth respectively. Return true if the sum of first, second and third are less than fourth otherwise return **/
function totalUnderWhat (first, second, third, fourth){
	if((first + second + third) <= fourth){
		return true;
	}else{
		return false;
	}
}

console.log(totalUnderWhat(1,2,3,1));
//

