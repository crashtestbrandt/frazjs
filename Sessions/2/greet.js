
function greet(element)
{
    let name = document.getElementById("name_field").value;
    if (name == "")
    {
        alert("Please enter a name.");
    } else {
        alert("Greetings, " + name + "!");
    }
}