
/*CHECK PERSONAL ID */

var personNumInput = document.getElementById('personNumInput');
var personNumOutput = document.getElementById('outputField');
var personNum;

function performValidityCheck(){

	takeInput();
	personNum = checkNumLength(personNum);
	luhnCheck(personNum);
	if(luhnCheck(personNum) === true) {
		outputValid();
	} else
		outputInvalid();
}

/* This takes input from field on HTML file */
function takeInput() {
	personNum = personNumInput.value;

	}

/* this checks if the number is of 10 or 12 digits */
function checkNumLength(num) {

	if(num.length === 12) {
	num = shortenNumber(num);
		}
	else if(num.length === 10){
		num = num;
	}
	/* This is an exception handler */
	else if(num.length !== 10 || num.length !== 12){
		num = null;
		personNumOutput.innerHTML = "Invalid Number";
	}

	return num;
}

function shortenNumber(num) {
	return num.substring(2, 12);
}

/* Entire freakin Luhn check */
function luhnCheck(num) {
	var sum = (""+num).split("");
	var controlNum = parseInt(sum[9]);
	var value;
	var idNumSum = 0;

	for(var i=0; i<9; i++){
	 	if (i % 2 === 0) {
	 		value = 2 * parseInt(sum[i]);
	 		if (value >= 10) {
	 			value = (Math.floor(value / 10) + value %10);
	 		}
	 	} else {
	 		value = +sum[i];
	 	}
	 	idNumSum += value;
	}

	var luhnCheckDivide =  idNumSum + controlNum;
	if(luhnCheckDivide%10===0){
		return true;
	} else
		return false;
}

function outputValid(){
	personNumOutput.innerHTML = "Valid ID Number!";
	personNumOutput.style.backgroundColor = "#72e847";
}

function outputInvalid(){
	personNumOutput.innerHTML = "Invalid ID Number!";
	personNumOutput.style.backgroundColor = "#f20909";
}


/* CHECK IF SHOT YEAR */
var leapyearInput = document.getElementById('shotyearInput');
var leapyearOutput = document.getElementById('leapYearOutput');
var year;

function checkIfLeapyear() {
	year = leapyearInput.value;
	leapYearCalc(year);
}

function leapYearCalc(year){
	if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
		isLeapYear(year);
	} else
	isNotLeapYear(year);
}

function isLeapYear(year) {
	leapYearOutput.innerHTML = "" + year + " is a leap year!";
	leapyearOutput.style.backgroundColor = "#72e847";
}

function isNotLeapYear(year) {
	leapyearOutput.innerHTML = "" + year + " is not a leap year!";
	leapyearOutput.style.backgroundColor = "#f20909";
}


/* ################## */
/* CHECK SUM OF NUMBER */
var checkSumInput = document.getElementById('checkSumUserInput');
var checkSumOutput = document.getElementById('checkSumOutput');
var sumInput;
var sum = 0;
var digitArray = [];

function checkNumber() {
	addDigits(processSumInput());
	printSum(sum);
	clearArray();
}

function processSumInput(num){

	sumInput = checkSumInput.value;
	/* This takes the input digits (string) and converts into an array of numbers */
	digits = (""+sumInput).split("");

	for(var i = 0; i < digits.length; i++) {
		digitArray.push(parseInt(digits[i]));
	}	return digitArray;
}

function clearArray() {
	digitArray = [];
}

function addDigits(num) {
	var digitSum = 0;
	for(var i = 0; i < num.length; i++) {
		digitSum += num[i];
	}
	sum = digitSum;
}

function printSum(sum){
	var outputString = sum.toString(); 

	if(isNaN(sum)===true){
		outputString = checkSumInput.value.toString();
		checkSumOutput.innerHTML = outputString + " is not a number!";
		checkSumOutput.style.backgroundColor = "#f20909";
	} else if(isNaN(sum)===false){
	checkSumOutput.innerHTML = "Total: " + outputString;
	checkSumOutput.style.backgroundColor = "#72e847";
	}
}
