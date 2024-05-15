static void ShowNames(string[] students)
{
    foreach (var student in students)
    {
        WriteLine(student.ToUpper());
    }

    foreach (var student in students)
    {
        WriteLine(student.ToLower());
    }
}

static void DisplayCoordinates(int size)
{
    string str = "";

    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size; j++)
        {
            str += $"({i}, {j}) ";
        }
        str += "\n"; // Add a newline after each row
    }

    WriteLine(str);
}

var studentNames = new string[]
{
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Isaac",
    "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela", "Quincy", "Rachel"
};

ShowNames(studentNames);

const int size = 8;
DisplayCoordinates(size);