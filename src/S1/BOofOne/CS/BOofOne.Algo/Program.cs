string[] studentNames = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Isaac",
    "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela", "Quincy", "Rachel"
];

ShowNameAt(studentNames, 17);

static void ShowNameAt(string[] students, int index)
{
    if (index >= 0 && index < students.Length)
    {
        WriteLine($"Student: {students[index]} at index {index}");
    }
    else
    {
        WriteLine($"Error: Index {index} is out of bounds.");
    }
}
