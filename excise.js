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



