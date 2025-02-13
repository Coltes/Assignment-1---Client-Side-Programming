// Part 1: Variables, Data Types & Type Casting
let studentName = "Colton Trainor";  // String
let studentAge = 23; // Number
let isEnrolled = true; // Boolean

// Display values on the webpage
document.write("<h2>Part 1: Variables</h2>");
document.write("Student Name: " + studentName + "<br>");
document.write("Student Age: " + studentAge + "<br>");
document.write("Is Enrolled: " + isEnrolled + "<br>");

// Convert studentAge to a string and show data types before and after
document.write("Data Type Before: " + typeof studentAge + "<br>");
studentAge = String(studentAge);
document.write("Data Type After: " + typeof studentAge + "<br><br>");

// Part 2: Operators & User Interaction
document.write("<h2>Part 2: Operators & User Interaction</h2>");
 
let num1 = Number(prompt("Please enter a number", "2"));
let numr2 = Number(prompt("Please enter another number", "2"));

// Using +
document.write("This is adding two variables together: " +   (num1+numr2)   );
// Using -
document.write(" <br> This is subtracting two variables together: ", num1-numr2);
// Using *
document.write(" <br> This is multiplying two variables together: ", num1*numr2);
// Using /
document.write(" <br> This is dividing two variables together: ", num1/numr2);
// Using %
document.write(" <br> This is when modules is used on the two variables together: ", num1%numr2);
 

// Part 3: Conditional Execution
document.write("<h2>Part 3: Conditional Execution</h2>");
let userAge = prompt("Enter your age:");
userAge = Number(userAge);

if (userAge >= 18) {
    document.write("You are eligible to vote!<br><br>");
} else {
    document.write("You are not eligible to vote yet.<br><br>");
}

// Part 4: Loops
document.write("<h2>Part 4: Loops</h2>");

// For Loop: Print numbers from 1 to 10
document.write("For Loop Output: ");
for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
}
document.write("<br>");

// While Loop: Prompt the user for a number greater than 10
let number;
do {
    number = prompt("Enter a number greater than 10:");
} while (number <= 10);

document.write("Valid number entered: " + number);

