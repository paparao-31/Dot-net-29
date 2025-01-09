/*Que 1 :
---------
	Write a 'JavaScript' program to store 10 elements in array 
    and print them on a console take the inputs from the user. 
  
var n=(prompt("enter the n value "))
var arr = []
for(var i=0;i<n;i++){
    arr[i]=prompt("Enter elements:");
}
console.log(arr);
*/

/* Que 2 :
-----------
	Write a 'JavaScript' program to sort the numbers array using 
    selection sort technique without using predefined function.


var arr=[]
var n;
n=prompt("Enter the size of array:");
console.log("Enter elements:");
for(var i=0;i<n;i++){
    arr[i]=prompt("");
}
console.log("Original array is:",arr);
console.log("Sorted array is:",arr.sort(arr[i]))
 */ 

/*var arr = [];
var n = prompt("Enter the size of array:");
n = parseInt(n);
console.log("Enter elements:");
for (var i = 0; i < n; i++) {
    arr[i] = parseInt(prompt(`Enter element ${i + 1}:`));
}
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; 

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log("Original array is:", arr);
var sortedArray = selectionSort(arr);
console.log("Sorted array is:", sortedArray); */


/*Que 3 : 
--------
	write a 'JavaScript' program to Sort the array [45, 3, 25, 78, 12]
    in ascending and descending order using predefined method.
    
let x = [45, 3, 25, 78, 12];
console.log("the array is " , x)
//// Sort in Ascending order
let ascendingOrder = x.sort((a, b) => a - b);
console.log("Ascending Order:", ascendingOrder);
// Sort in descending order
let descendingOrder = x.slice().sort((a, b) => b - a);
console.log("Descending Order:", descendingOrder);
// Length of the array
let n = x.length;
console.log("Length of the array:",n);
____________________________

var arr=[]
var n;
n=prompt("Enter the size of array:");
console.log("Enter elements:");
for(var i=0;i<n;i++){
    arr[i]=prompt("");
}
console.log("Original array is:",arr);
console.log("Sorted array is:",arr.sort(arr[i]))

 */ 

    


/*Que 4 :
--------
	Write a 'JavaScript' program to Separat Strings and Numbers and print array using the forEach method.

	// Array containing both strings and numbers
let mixedArray = [45, "hello", 78, "world", 25, "JavaScript", 12, "coding"];

// Arrays to store separated values
let numbers = [];
let strings = [];

// Separate strings and numbers
mixedArray.forEach(item => {
  if (typeof item === "number") {
    numbers.push(item);
  } else if (typeof item === "string") {
    strings.push(item);
  }
});
// Print the separated arrays
console.log("Numbers:", numbers);
console.log("Strings:", strings);

Que 5 :
-------
	Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays.
	

	function filterEvenOdd(n) {
		var even = [];
		var odd = [];
		for (var i = 1; i <= n; i++) {
			if (i % 2 === 0) {
				even.push(i); 
			} else {
				odd.push(i); 
			}
		}
		console.log("Even numbers:", even);
		console.log("Odd numbers:", odd);
	}
	var n = parseInt(prompt("Enter the n value:"));
	filterEvenOdd(n);
	
	*/



/*Que 6 :
--------
	Write a 'JavaScript' program to create an array of 10 image names an display the images on the webpage using forEach method.

Que 7 :
--------
	Write a 'JavaScript' program to print Sum of All elements.

Que 8 :
--------
	Write a 'JavaScript' program Convert Names to Uppercase in array.


Que 9 :
--------
	Write a 'JavaScript' program to Remove Null and Undefined Values from array.


Que 10 :
--------
	Write a 'JavaScript' program to Calculate Average from an Array elements.
	sample input : const nums = [10, 20, 30, 40, 50];
	output : 30

Que 11 :
--------
	Write a 'JavaScript' program to Flatten a Nested Array.

	sample input : const nestedArray = [1, [2, [3, [4, 5]]]];
	output : [1, 2, 3, 4, 5]   */


