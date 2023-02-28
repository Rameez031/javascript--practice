// arrays Method

// 1)Pop
// 2)push 
// 3)shift 
// 4)unshift 
// 5)splice 
// 6)slice 
// 7)sort
// 8)reverse
// 9)join
// 10)fill

// string method
// 1)split
// 2)toLowerCase
// 3)toUpperCase
// 4)trim

// var str = "askjajkankl053643843678sjcsncbj";
// var strNum = [];
// var strAlpha = [];
// for (i = 0; i <= str.length; i++) {
//     if (i = 0) {
//         strNum.push;
//     }
//     else {
//         strAlpha.push
//     }
// }
// console.log(str);

// (a)
// var arr1 = ["<p>" + "Red ", "Green ", "Blue" + "<p>"];
// var userCol = prompt("what color you wants to add to the beginning");
// arr1.unshift(userCol);
// document.write("<p>"+"Updated Array (After Adding Color to the Beginning):"+"<p/>"+"<p>" + arr1 + "<p/>");

// var colors = ["<p>" + "Red ", "Green ", "Blue" + "<p>"];
// var addColors = prompt("Enter the color you want to add to the beginning of the array:")
// colors.unshift(addColors)
// document.write("Updated Array (After Adding Color to the Beginning): <b>" + colors + "</b> <br>")


// var colours = ["<p>"+" Red "," Black "," Blue"+"<p/>"]
// colours.join("") 
// document.write(colours);
// var userCol = prompt("what color you wants to add to the beginning");
// colours.push(userCol);
// document.write("Updated Array (After Adding Color to the end): <b>" + colours + "</b> <br>")
// var expenses = [1444,145333,1221];
// var mealExpense = expenses[0];
// console.log(mealExpense);


// var fruits = ["Grapes","apple","banana", "mango","kiwi"];
// fruits.splice(0,0, "Strawberry");
// alert(fruits);



// let a = [1,2];
// a[3] = 4;

// console.log(a);

// var fruits = ["Grapes", "apple", "banana", "mango", "kiwi"];
// var copy = fruits.slice(4, 5);
// console.log(copy);


// FiFo
// unshift
// pop
// ******
// lifo
// push
// shift

// var names = ["Rameez", "Ramzy"];
// alert(names.join(" | "));

// var strNum = [0,6,3,2,8,9,6,4,7,2,3,];
// console.log(strNum);

// var str = "RAMEEZ RAMZY"
// console.log(str.toLowerCase());

// var str1 = "ramzy";
// console.log(str[0].toUpperCase());

// var str = "rameez";

// var firstLetter = str[0].toUpperCase();

// var result = firstLetter + str.slice(1);

// console.log(result);


// String method.....
// var str = "rameez-ramzy-project";
// console.log(str.split("-"));


// array method......
// var arr = ["<b>" + "Rameez ", "Ramzy ", "Evere " + "<b/>"];
// document.write(arr.reverse(),arr.join(" | "));


// var num = [1,5,6,7,4,3,9,2,];
// console.log(num.slice(-5));
// console.log(num.sort(),num.reverse());


// var arr = ["Ramzy","rameez"];
// console.log(arr.slice(-2));


// var str = prompt("Enter Your full Name!");

// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 2) === "  ") {
//         alert("No double spaces!")
//         break;
//     }
// }

// var pets = [];
// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "cow";
// pets[4] = "bell";
// pets[6] = "fall";
// pets[5] = "job";
// console.log(pets.slice(4));



// var pets = ["dog","cat","fly","bug","ox"];
// var noPets = pets.slice(2,5);
// console.log(noPets);

//sort method
// var num = [6,7,8,9,1,2,3,4];
// console.log(num.sort());


// string convert to array
// split method of string
// var names = "Rameez Sheikh Ramzy Sheikh Rabbi Sheikh";
// console.log(names.split(" "));

// if statement else if statement
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var cityToCheck = prompt("Enter your city Name");

// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }

// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities");
// }

// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }

// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// } else {
//     alert("It's not on the list");
// }

//for Loop......

// var arr1 = ["Rameez" , "Ramzy", "Rabbi" , "Rasheed"];
// for(var x = 0; x < arr1.length; x++){
//     document.write("<h1>" + arr1[x] + "<h1/>")
// }
//js Library sweet Alert.......
// Swal.fire({
//     title: "RamzY's page!",
//     text: 'This Developer learn with Smit association',
//     imageUrl: '/smit--img/Smit.png',
//     imageWidth: 400,
//     imageHeight: 400,
//     imageAlt: 'Custom image',
// })



//For loop.......
// var cleanestCities = ["karachi", "lahore", "islamabad", "quetta", "peshawer"];
// var cityToCheck = prompt("Enter your city Name");
// var flag = "nahi";
// for (var x = 0; x < cleanestCities.length; x++) {
//     if (cityToCheck == cleanestCities[x]) {
//         flag = "han"
//         break;
//     }
// }
// if (flag == "han") {
//     alert("It's one of the cleanest cities");
// } else {
//     alert("It's not on the list");
// }


//Chapter 14....Array.

// task (1)
// var color =["Red","Green","Blue"];
// document.write("<p>"+"Before:: "+color+"<p/>"); 

// task (2)
// var userCol = prompt("what color you wants to add to the beginning");
// color.unshift(userCol);

// task (3)
// var addColors = prompt("what color you wants to add to the End");
// color.push(addColors);
// document.write("<p>"+"updated colour:: "+"<br/>"+color+"<p/>");

// task (4)
// color.unshift("pink","black");

// task (5)
// var color =["Red","Green","Blue"];
// console.log(color.shift());



//check pelindrome word using method...
// var str =prompt("Enter your word!");
// var strsplit = str.split("").reverse().join("");

// if (str == strsplit){
//     swal.fire("Its a pelindrome word");
// }else{
//     swal.fire("Its not a pelindrome word");
// }

// bagair method ke.....
// var str =prompt("Enter your word!");
// var strReverse = "";
// for (var i = str.length - 1; i >= 0; i--) {
//     strReverse = strReverse + str[i];
// }
// if (str == strReverse){
//     swal.fire("Its a pelindrome word");
// }else{
//     swal.fire("Its not a pelindrome word");
// }

// Nested Loop......
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         console.log(i, j);
//     }
// }

//Table.........
for (var i = 1; i <= 10; i++) {
    document.write("<p>" + "5 x " + i + "=" + i * 5 + "<br/>" + "<p/>");
}