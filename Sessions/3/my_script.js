
/*
// Initialize loop variable
let i = 0;

// Create a check condition
while (i < 100)
{
    // Run some code as long as check condition true
    console.log(i);

    // Update loop variable
    i++;
}
*/

let my_data = [
    "Heading 1",
    "Data",
    "Data",
    "Data",
    "Data",
    "Heading 2",
    "Data",
    "Data",
    "Data",
    "Data",
    "Heading 3",
    "Data",
    "Data",
    "Data",
    "Data",
    "Heading 4",
    "Data",
    "Data",
    "Data",
    "Data",
    "Heading 5",
    "Data",
    "Data",
    "Data",
    "Data",
    "Heading 6",
    "Data",
    "Data",
    "Data",
    "Data",
    "Heading 7",
    "Data",
    "Data",
    "Data",
    "Data",
    
];

for (let i = 0; i < my_data.length; i++)
{
    if (i % 5 == 0)
    {
        console.log(my_data[i]);
    } else {
        console.log("\t" + my_data[i])
    }
}

