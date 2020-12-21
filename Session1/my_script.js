

console.log(typeof 'c');
console.log(typeof "c");
console.log(typeof "This is a string, too.");
console.log(typeof "");
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(20/3);
console.log(20%3);

let variable_1 = "cat";
let variable_2 = prompt("Enter a string: ");

console.log(typeof prompt("Enter a value: "));

console.log(5 == 4);    // returns false
console.log(5 != 4);    // returns true

console.log(5 == 5);    // returns true
console.log(5 != 5);    // returns false

console.log(NaN == NaN); // will return false, because JavaScript

console.log("Kayla" == "Kayla"); // will return true
console.log("Kayla" == "kayla"); // will return false

console.log(true && true);      // prints true
console.log(true && false);     // prints false
console.log(false && false);    // prints false

console.log(true || true);      // prints true
console.log(true || false);     // prints true
console.log(false || false);    // prints false

console.log(!true);     // prints false
console.log(!false);    // prints true


let pet = prompt("Enter a kind of pet.");

// Switch statement
switch (pet)
{
    case "Dog":
        console.log("Dogs are the best pets.");
        break;
    case "Snek":
        console.log("Snakes are dumb pets.");
        break;
    case "Giraffe":
        console.log("Giraffes are tiny pets.");
        break;
    default:
        console.log("That's not a pet I recognize.");
    console.log("Outside of cases");
}

for (let line_number = 0; line_number < 147; line_number++)
{
    if (line_number % 4 == 0)
    {
        console.log("This line should get a heading.");
    }
    else
    {
        console.log("Regular line (i = " + line_number + ")");
    }
}
