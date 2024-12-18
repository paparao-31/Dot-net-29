/*Write a simple 'JavaScript' program that reads an integer from 
the user and prints the multiplication table of the given number using a while loop.

Example :

Sample input : N = 7

Sample output :

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
.....
.....
7 x 10 = 70 


var n,i=0,t=0;
function table(n)
{
 while(i<10)
 {
    i++;
    t= n*i;
   console.log(n+" x "+i +" = " +t);
}
 }
table((n=prompt("enter the number"))); */


/*Que 2 :
=======

Write a 'JavaScript' program that reads a positive integer N from the user and calculates the sum of even and odd numbers between 1 and N using a while loop. 
The program should print the sum of even numbers and the sum of odd numbers.

NOTE : If user entered negative input then print "Invalid Input" message.

Example_1 :

Sample input  : N = -10;

Sample output : Invalid Input


var N,i=0,es=0,os=0;
 function sum(N)
 {
    if(N>0)
    {
    while(N>i)
    {
        i++;
        if(i%2==0)
         es+=i
        else
          os+=i
    }
    console.log("even="+es)
    console.log("odd="+os)

}
  else
  {
    console.log("Invalid Input");
    
  }
 }
 sum((prompt("enter the nummber"))) */


 /*Que 3 :
=======

Write a 'JavaScript' program that reads an integer from the user 
and prints the count of digits in the given number. 
The program should handle both positive and negative
numbers if the number is negative it should print 'negative number' 
and if the number is zero it should print 'zero'.

Example :

Sample input1  : 12348
Sample output1 : 5

Sample input1  : 0
Sample output1 : zero

Sample input1  : -1
Sample output1 : negative number 

var n,count=0;
function countsum(n)
{ 
    if(n<0){ 
        console.log("negative number") }
    else if(n==0) { 
        console.log("zero") }
    else
    {   
    while(n!=0)
{
    var c=(n%10)
    count++;
    n=Math.floor(n/10)
   
}
console.log(count);
    }
}
countsum(n=(prompt("enter the number")))  */

/*
 Que 4 :
=======

Write 'JavaScript' program to reverse a number using while 

Sample input  : Enter a number : 12345
Sample output : Reverse : 54321
*/




