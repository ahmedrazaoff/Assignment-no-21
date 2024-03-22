// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Please enter your first name:");
var lastName = prompt("Enter your Last Name: ");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

fvrtMob = prompt("Enter your Favorite Mobile Phone Model:");
document.write("My Favorite Phone is:" + fvrtMob + "<br>");
lenFvrtMob = fvrtMob.length;
document.write("<hr/>Length of string is :" + lenFvrtMob);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
var arry = ["pakistani"];
document.write("String " + " " + arry);
indexN = arry[0].indexOf("n");
document.write("<hr/>Index of 'n' is :" + indexN);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var arr = ["Hello", "World"];
str = arr.join(" ");
document.write("String:" + " " + str);
lastIndxL = str.lastIndexOf("l");
document.write("<hr/>Last Index of 'l' is :" + lastIndxL);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var ary = ["pakistani"];
document.write("String " + " " + ary);
indexI = arry[0].indexOf("i");
document.write("<hr/>Index of 'i' is :" + indexI);

// 6. Repeat Q1 using string concat() method.
firstName = "Ahmed";
lstNm = "Raza";
fullNm = firstName.concat(" ", lstNm);
alert("Hello," + fullNm);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "hyderabad";
if (city == "hyderabad") {
  var newCity = city.replace("hyder", "islam");
} else {
  alert(city);
}
document.write("<br>" + newCity);
