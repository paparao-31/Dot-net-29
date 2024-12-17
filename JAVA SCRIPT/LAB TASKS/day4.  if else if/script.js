/*Que 1:Write a 'JavaScript' program to read age of person and check 
the person is eligible for vote or not using if-else.*/

function age(n)
{
    if(n>=18)
    return "You are eligible to vote."
    else
    return "You are not eligible to vote."
}
console.log(age(16))
console.log(age(20))

/*Que 2 : Write a 'JavaScript' program to find maximum
 between two numbers using if-else.*/
var a,b;
 function maximum(a,b)
 {
    if(a>b)
        return a 
    else 
    return b
 }
 console.log(maximum(100,200));

 /*Que 3 : Write a 'JavaScript' program to find maximum
  between three numbers.*/

  var a,b,c;

  function max(a,b,c)
  {
    if (a>b && a>c)
        return a1
    else if (b>a && b>c)
        return b
    else 
    return c
  }
  console.log(max(100,200,300))

  /*Que 4 : Write a 'JavaScript' program to check 
  whether a number is negative, positive or zero.*/

  function num(a)
  {
    if (a>0)
        return "positive number"
    else if (a==0)
        return "zero"
    else 
    return "negative number"
  }
  console.log(num(10))
  console.log(num(0))
  console.log(num(-2))

  /*Que 5 : Write a 'JavaScript' program to check whether
   a year is leap year or not.*/

   function year(n)
   {
       if(n%4==0 && n%100!=0 || n%400==0)
        return "leap year"
       else 
       return "not leap year"
   }
   console.log(year(2024))
   console.log(year(1500))
   console.log(year(1900))

   /*Que 6 : Write a 'JavaScript' program to check whether the string
    is uppercase or lowercase alphabet. */

    function alphabet(ch)
    {
        if(ch>='A'&&ch<='Z')
            return "Uppercase"
        else 
        return "Lowercase"
    }
    console.log(alphabet('A'))
    console.log(alphabet('b'))

/*Que 7 : Rajesh bought an old TV for 3500 RS. and Rajesh sold the TV for 7000 RS,
          which includes a 5% VAT and a 10% tax on the selling 	price. 
          Calculate the net selling price by removing VAT and tax.
          Determine whether Rajesh made a profit or incurred a loss,
          and calculate the respective amount.
          Program Requirements:

         The program should read the cost price and the total selling price (including VAT and tax).
         The program should calculate the net selling price by removing VAT and tax.
         The program should compare the net selling price with the cost price to determine profit or loss.
         The program should display the amount of profit or loss.

Sample input  : Enter the cost price of the TV: 3500
                Enter the selling price of the TV (including VAT and tax): 7000
Sample output : You made a profit of 1956.52
*/
var p=3500;
var sp=7000;
var VAT=0.05*7000   //{5/100*700}
var tax=0.1*7000;
var profit=sp-(VAT+tax)-p;
console.log("You made a profit of ",profit);

//function use program:

function profit()
{
    var p=3500;        //price
    var sp=7000;       //selling price
    var VAT=0.05*sp   //{5/100*700}
    var tax=0.1*sp;   
    var profit=sp-(VAT+tax)-p;  
}
console.log("You made a profit of ",profit);














 
