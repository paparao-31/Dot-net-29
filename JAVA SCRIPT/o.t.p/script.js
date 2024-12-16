//OTP
var n=Math.floor((Math.random()*9000)+1000);
console.log("you'r 4 digits OTP is ", n);

//OTP IN 4 DIGIT:

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}
const otp = generateOTP();
console.log("Your OTP code is:", otp);