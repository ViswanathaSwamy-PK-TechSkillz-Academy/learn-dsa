// showNameAt.cs

namespace BOofOne.Algo;

public static class StudentHelper
{
    public static void ShowNameAt(string[] students, int index)
    {
        if (index >= 0 && index < students.Length)
        {
            WriteLine($"Student: {students[index]} at index {index}");
        }
        else
        {
            WriteLine($"Error: Index {index} is out of bounds of total {students.Length}.");
        }
    }
}
