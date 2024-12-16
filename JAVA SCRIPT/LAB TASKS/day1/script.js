/*1.print student details using console.log() function only.*/
console.log("Name=danny");
console.log("roll no=777");
console.log("Branch= B.Tech");
console.log("Address= Hyderabad");
console.log("College Name= Naresh It");

/*2.Addition, subtraction, multiplication, division, Modulation*/
var a=20;
var b=10;
console.log("Addition is:"+(a+b));
console.log("subtraction is:"+(a-b));
console.log("Multiplication is:"+(a*b));
console.log("Division is:"+(a/b));
console.log("Modulation is:"+(a%b))

/*3.without using (+) operator and print*/
let k=10,l=20;
console.log("Addition is " +(a-(-b)));

/*4.sum of first and last digit*/
function sum(n)
{
    var ld=(n%10);
    var fd=parseInt(n/10);
    console.log(fd+ld);
}
sum(23)

/*5.sum of first and last digit of given any 3 digit number*/
function sum2(n)
{
    var ld=(n%10);
    var fd=parseInt(n/100);
    console.log(fd+ld);  
}
sum2(123)

/*6.area of a square and rectangle*/
    var s=(5);
    var Length=(4);
    var breadth=(5);
    console.log("area of the square: " +(s*s));
    console.log("area of the rectangle: " +(Length*breadth));

/*7.swap any two integer number using third variable*/
let a1=10,b1=20;
console.log(("Befour swaping : a1="+a1)+","+("b1="+b1));
sw=a1;
a1=b1;
b1=sw;
console.log(("After swaping : a1="+a1)+","+("b1="+b1));

/*swap any two integer number without using third variable*/
let a2=10,b2=20
console.log("without using third :")
console.log(("Before Swapping : a2="+a2)+","+("b2="+b2));
a2=a2+b2;
b2=a2-b2;
a2=a2-b2;
console.log(("After Swapping : a2="+a2)+","+("b2="+b2));

/* find previous multiple of 10 of given 2 digit value only */
let p=26;
m=parseInt(p/10);    //m=math.floor(p/10);   also use......... 
r=m*10;
console.log(+r)

/*find next multiple of 10 of given 2 digit value only*/
let x=34;
y=parseInt(x/10);
z=((y+1)*10);
console.log(+z);

//OTP
var m=Math.floor((Math.random()*9000)+1000);
console.log("you'r 4 digits OTP is ", m);

//OTP IN 4 DIGIT:

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}
const otp = generateOTP();
console.log("Your OTP code is:", otp);

