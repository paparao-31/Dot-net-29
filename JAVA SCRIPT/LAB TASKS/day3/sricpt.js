
/*1.Write a JavaScript program to Add Two Numbers using function.*/

function add(a,b)
{
var adds=("add no = "+(a+b));
console.log(adds);
}
add(10,4);

//2.Write a JavaScript program to  Find the Maximum of Two Numbers using function.

function max(c,d)
{
var maxno=(c>d)?"a max= "+(c):"b max= "+(d);
console.log(maxno);
}
max(4,10);
max(10,5);

/*3.Write a JavaScript program to
Calculate the Square of a Number using function.*/

function Square(s)
{
    console.log(s*s);
}
Square(10);

/*4.Write a JavaScript program
 to Check if a Number is Even using function.*/

 function even(n)
 {
    var result=(['even','odd'][n%2]);
    console.log(result);
 }
 even(10);

 /*5.Write a JavaScript program 
 to Concatenate Two Strings using function.*/
  
  function addStrings(s1,s2) 
  {
    console.log(s1+s2);
  }
  addStrings("danny"," daniels");

  /*6.Write a JavaScript program to
   Find the Absolute Value of a Number using function.*/

   function ads(a)
   {
    (a<0)?console.log(-(a)):console.log(a);
   }
   ads(-5);

   /*7.Write a JavaScript program to
    Multiply Two Numbers using function.*/

    function mul(a,b)
    {
        console.log(a*b);
    }
    mul(2,3);

    /*8.Write a JavaScript program to Convert
     Fahrenheit to Celsius using function.*/

      function Fahrenheit(f) 
      {
        console.log((f-32)*(5/9));
      }
      Fahrenheit(95);

     /*9.Write a JavaScript program to Calculate the 
     Area of a Circle using function.*/

     function area(r)
     {
        console.log(3.14*(r*r));
     }
     area(10);

     /*10.Write a JavaScript program to print the sum
      of n natural numbers using function.*/
      
      function naturalno(n)
      {
        console.log((n*(n+1))/2);
      }
      naturalno(100);



