//console.log(`Hello`);
//window.alert(`This is alert message`);
//alert("Javascript connected");
// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I am yashika.`;
//let x=113;
//console.log(x);
//JAVASCRIPT VARIABLES
// var number1 = 99;
// var number2 = 43;
// console.log(number1 + number2);
//DATA TYPES
//NUMBERS
// var num = 99.2;
// //STRING
// var str1 = "This is string";
// var str2 = 'This is also string';
// //OBJECTS
// var marks = {
//     Ayush: 33,
// Yashika: 45,
// }
// console.log(num);
// console.log(marks);
// //BOOLEAN
// var a = true;
// var b = false;
// console.log(a);
// //UNDEFINED
// var und;
// console.log(und);
// //NULL
// var n = null;
// console.log(n);
//ARRAYS
//  var arr = [1,4,"Java script", 5,2];
// console.log(arr);
// console.log(arr[2]);
//OPERATORS
//ARETHMETIC OP
// var a = 88;
// var b = 44;
// console.log("The value of a + b is: ", a+b);
// console.log("The value of a - b is: ", a-b);
// console.log("The value of a * b is: ", a*b);
// console.log("The value of a / b is: ", a/b);
//ASSIGNMENT OP
// var c = b;
// c +=2;
// c-=3;
// c*=2;
// c/=2;
// console.log(c);
//COMPARISON OP
//var x = 66;
//var y = 33;
//console.log(x == y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);
//LOGICAL OP
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// console.log(!true);
// console.log(!false);


// FUNCTIONS
// DO NOT REPEAT YOURSELF
//  function avg(a, b){
//      return (a+b)/2;
//  }
//  c1 = avg(9,7);
//  c2 = avg(4,2);
//  console.log(c1);
//  console.log(c2);

// CONDITIONALS
// //if statement
// var age = 18;

// if (age >= 18) {
//   console.log("You are an adult");
// }
// //if-else statement
// var age = 2;

//  if(age>18){
//      console.log("You are not a kid");
//  }
//  else{
//      console.log("You are a kid");
//  }
// //if-else Ladder
// var marks = 33;
// if(marks>90){
//     console.log("Excellent");
// }
// else if(marks>80){
//     console.log("Very good");
// }
// else if(marks>70){
//     console.log("Good");
// }
// else if(marks>60){
//     console.log("Average");
// }
// else{
//     console.log("Poor");
// }
// //Switch statement
// var day = 3;
// switch(day){
//     case 1;
//     console.log("Monday");
//     break;

// case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//         console.log("Wednesday");
//         break;
//         default:
//             console.log("Invalid day");
// }
// //Ternary short condition
// var age = 16;
// var result = age>=18 ? "Adult" : "Minor";
// console.log(result);
// //Logical condition
// var username = "admin";
// var password = "1234";

// if (username === "admin" && password === "1234") {
//   console.log("Login successful");
// }
LOOPS
//for loop
var arr = [1,6,5,9,8];
 console.log(arr);
 for(var i=0;i<arr.length;i++){
     console.log(arr[i]);
 }
//forEach loop
 var arr = [1,2,3,4,5];
 arr.forEach(function(num){
     console.log(num);
});
//while loop
 var arr = [1,4,3,6,5];
 var j = 0;
while(j<arr.length){
     console.log(arr[j]);
     j++;
 }
//do while loop
 var arr = [6,8,4,2,7];
 j = 4;
 do{
     console.log(arr);
     j++;
 }while(j<arr.length);
//Break
 var arr = [1,7,9,8,5];
 for(var i=0;i<arr.length;i++){
     if(i==3){
         break;
     }
    console.log(arr[i]);
 }
//Continue
 var arr = [8,8,4,2,4];
 for(var i=0;i<arr.length;i++){
     if(i==2){
         continue;
     }
     console.log(arr[i]);
 }


