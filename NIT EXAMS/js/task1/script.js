/*Que 1 : Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays.

Sample Input :
	 [12, 25, 47, 18, 30, 55];


   Sample output :
	Even Array : [12, 18, 30]
	Odd Array :  [25, 47, 55]
function EvenOdd(arr) {
  const even = [];
  const odd = [];

  for (let n of arr) {
    if (n % 2 === 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }

  return { even, odd };
}

const inputArray = [12, 25, 47, 18, 30, 55];
const { even, odd } = EvenOdd(inputArray);

document.write("Even Array are:", even);
document.write("Odd Array are:", odd);   */

/*Que 2 : write a 'JavaScript' program to print Sum of All elements.

Sample Input :
	 [10, 20, 30, 40, 50];

Sample output:
	Sum of Array element is : 150

  function sumArray(arr) {
    let sumarray = 0;
    for (let n of arr) {
      sumarray += n;
    }
    return sumarray;
  }
  const inputArray = [10, 20, 30, 40, 50];
  const sum = sumArray(inputArray);
  
  document.write("Sum of Array element is:", sum);  */

  /*Que 3 : 
---------
Write a JavaScript program that finds and prints all pairs of numbers from a given array whose sum is equal to a specified target value. 
The program should iterate through the array, compare every pair of numbers, and print each pair that meets the condition.

Example:
Sample input:
	Array: {1, 5, 7, -1, 5}
	Target Sum: 6

Sample output:
	Pair found: (1, 5)
	Pair found: (7, -1)
	Pair found: (1, 5)   
  
  */

  function PairsTargetSum(arr, target) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
          pairs.push((`${arr[i]}, ${arr[j]}`));
        }
      }
    }
    return pairs;
  }
  
  const inputArray = [1, 5, 7, -1, 5];
  const targetSum = 6;
  const pairs =PairsTargetSum(inputArray, targetSum);
  
  if (pairs.length > 0) {
    pairs.forEach(pair => document.write (" Pair found: ", pair ));
  } else {
    document.write("No pairs found.");
  }
  







