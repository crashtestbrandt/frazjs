// while loop
let power = Number(prompt("Enter a power:"));
let result = 1;
let i = 0;
while (i < power) {
	result = result * 2;
	i = i + 1;
}
console.log(result);

// do-while loop
let your_name = "";
do {
	your_name = prompt("Who are you?");
} while (your_name == "");

console.log(your_name);

// for loop
for (let i = 0; i < 100; i=i+1)
{
	if (i % 5 == 0)
	{
		console.log(i);
	}
}

// functions
/*
const square = function(x) {
	return x * x;
}
*/
function square(x) {
    return x * x;
}
console.log(square(12));