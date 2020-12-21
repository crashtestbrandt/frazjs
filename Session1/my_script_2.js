

let my_value = prompt("Enter a direction");
if (my_value == "Yes")
{
    console.log("Yes");
}
else if (my_value == "No")
{
    console.log("No");
}

/*
if (my_value == "N")
{
    console.log("Congrats! You win the game");
}
else if (my_value == "S")
{
    console.log("You died");
}
else if (my_value == "E")
{
    console.log("East room!");
}
else if (my_value == "W")
{
    console.log("West room!");
}
else
{
    console.log("Please pick a direction, loser.");
}
*/

switch (my_value)
{
    case "N":
        console.log("Congrats! You win the game");
        break;
    case "E":
        console.log("East room!");
        break;
    case "S":
        console.log("You died");
        break;
    case "W":
        console.log("West room!");
        break;
    default:
        console.log("Please pick a direction.");
}





