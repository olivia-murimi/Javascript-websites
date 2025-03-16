//console.log("Hello");
//console.log("I like pizza");

//window.alert(`This is an alert!`);
//window.alert(`I like pizza!`);
//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "I like pizza";
//This is a comment
/*This is a comment*/
/*let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(typeof gpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
let firstName = "Olivia";
console.log (typeof firstName);
console.log(`Your name is ${firstName}`);
let favoriteFood ="pizza";
console.log(`Your favorite food is ${favoriteFood}`);
let email = "murimiwaithira@gmail.com";
console.log(`Your email is ${email}`);
let online = true;
console.log(typeof online);
console.log(`Bro is online: ${online}`);*/
/*let fullName = "Olivia murimi";
let age = "25";
let student = true;
document.getElementById("p1").textContent =`Your name is ${fullName}`;
document.getElementById("p2").textContent =`You are ${age} years old`;
document.getElementById("p3").textContent =`Enrolled: ${isStudent}`;
let students = 30;*/
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2;

//students +=1;
//students-=1;
//students *=2;
//students /=2;
//students **=2;

//students++;
//students--;
//console.log(students);
//let result = 1+6+16;

//console.log(result);
//how to accept user Input
//easy way = window prompt
//
//proffessional way = HTML textbox
//let username;

//username = window.prompt("what's your username?");
//console.log(username);
//let username;

//document.getElementById("mySubmit").onclick = function(){
    //username = document.getElementById("myText").value;
//document.getElementById("myH1").textContent =`Hello ${username}`
//}
/*let x ="pizza";
let y ="pizza";
let z ="pizza";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/
//const = a variable that can't be changed
//const PI = 3.14159;
//let radius;
//let circumference;
 //document.getElementById("mySubmit").onclick = function(){
  //document.getElementById("myText").value;
  //radius = Number(radius);
  //circumference = 2 * PI * radius;
  //document.getElementById("myH3").textContent = circumference ;
 //}
 // COUNTER PROGRAM
 /*const decreaseBtn = document.getElementById("decreaseBtn");
 const resetBtn = document.getElementById("resetBtn");
 const increaseBtn = document.getElementById("increaseBtn");
 const countLabel = document.getElementById("countLabel");
 let count = 0;

 increaseBtn.onclick = function(){
   count++;
   countLabel.textContent = count;
 }
 decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
 }
 resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
 }*/
//RANDOM NUMBER GENERATOR
//let randomNum = Math.floor(Math.//random() * 6) + 1;
//console.log(randomNum);
const myButton = document.getElementById("myButton");
const label1= document.getElementById("label1");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}
