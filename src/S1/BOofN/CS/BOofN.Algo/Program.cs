static void ShowNames(string[] students)
{
    foreach (var student in students)
    {
        Console.WriteLine(student);
    }
}

var studentNames = new string[]
{
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Isaac",
    "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela", "Quincy", "Rachel"
};

ShowNames(studentNames);
