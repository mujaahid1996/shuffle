
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var n = arr.length;
// console.log(arr[0]);
// console.log(arr.length);

// Creating a object for Random class
var rn = require('random-number');
// shuffle definition
var option = {
	min: 0
	, max: n 
	, integer: true
}

// Start from the last element and swap one by one. We don't
// need to run for the first element that's why i > 0
for( i = n-1 ; i > 0; i-- ){

	// Pick a random index from 0 to i
	var option = {
		min: 0
		, max: i  
		, integer: true
	}
    var j = rn(option);

    // Swap arr[i] with the element at random index
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;

	// console.log(
	// 	i+' '+
	// 	'pick random '+ j +' '+
	// 	'swap '+ temp +' '+ arr[i] +' '+ arr[j]	
	// );
}

console.log( arr.toString() );