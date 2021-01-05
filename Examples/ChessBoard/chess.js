let num_rows = 8;
let num_cols = 8;

for (let i = 0; i < num_rows; i++)
{
    let row = "|";
    for (let j = 0; j < num_cols; j++)
    {
        if (i%2 == 0)
        {
            row += (j%2 == 0) ? "#" : " ";
        } else {
            row += (j%2 == 0) ? " " : "#";
        }
        row += "|";
    }
    console.log(row);
}