






//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number,
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"

function percentOf(num1, num2) {
	var percentage = (num1*num2%)
	return num1+"is"+" "+percentage+" "+"of"+num2

  // TODO: your code here
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats"
//pluralize('cat', 1)  ==>  "1 cat"

function pluralize(noun, number) {
	if (number%2===0)
		return number+" "+noun+s
	return number+" "+noun
	
  // TODO: your code here
}

//=============================================== 3

//Write a function called average that takes three numbers as parameters
//and returns their average.
//average(4, 6, 8); ==> 6
//average(2, 3, -2); ==> 1

function average(num1, num2, num3) {
	var evarage= num1+num2+num3/3
	return everage
  // TODO: your code here
}

//=============================================== 4

//Write a function called wasItFunny that takes a boolean input as parameter
//and returns "meh" if the input was false, and "HAHAHA" if the input was true.
//wasItFunny(true);  ==> "HAHAHA"
//wasItFunny(false); ==> "meh"

function wasItFunny(response) {
	if(response===true)
		return "HAHAHA"
	else return "meh"
  // TODO: your code here
}

//=============================================== 5

//Write a function called get10thChar that takes a string as parameter
//and returns the 6th character of an input string.
//Note: assume all input strings will have at least 8 characters
//get10thChar("abcdefghi");  ==>  "f"
//get10thChar("HelloCohort9");  ==>   "C"

function get6thChar(str) {
	return charAt(5)
  // TODO: your code here
}
//=============================================== 6

// Write a function that takes a number n and return the summation for
// odd numbers starting from 0 and exclusive n.
// Note: you can use either while or for loop.

// oddSum(7) --> 9
// oddSum(12) --> 36

function oddSum(n) {
	var sum = 0
	for(var i = 0; i<n ;i=i+2){
		sum = sum + i
	}
  // TODO: your code here
  return sum 
}

//=============================================== 7

/*
Write a function that uses console.log to give the following triangle:
#
## 
###
####
#####
######
#######
*/

function drawTriangle() {
	var x = "#"
	for (var i =0; i < 8; i++){
		x++
		console.log(x)
	}
  // TODO: your code here
}

//=============================================== 8
//Short Answer Theoretical Questions:
//In your own words, no more than 3 sentences, answer the following:
//What is Function parameter?
//Write your answer here...
//What is function argument?
//Write your answer here...
//What is function signature?
//Write your answer here...
//What is a variable?
//Write your answer here...

//Good Luck :))
