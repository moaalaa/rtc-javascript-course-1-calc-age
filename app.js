// Get The Button
var btn 	= document.querySelector('#calc-age');
// var btn = $('#calc-age');
// Get The Input
var input 	= document.querySelector('.year');
// var input = $('.year');

// Add Click Event Listener
btn.addEventListener('click', function () {
// btn.on('click', function () {
	//  Get Input Value
	 var myAge = calcYear(input.value)
	console.log(myAge);
	input.value = ''
});

//  Calc  Your Age
function calcYear(birthYear) {

	var currentYear = new Date().getFullYear()

	var myYear = currentYear - birthYear;

	return 'You Are ' + myYear + ' Years Old';
}
