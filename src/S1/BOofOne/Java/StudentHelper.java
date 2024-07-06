// StudentHelper.java

public class StudentHelper {
    public static void showNameAt(String[] students, int index) {
        if (index >= 0 && index < students.length) {
            System.out.printf("Student: %s at index %d%n", students[index], index);
        } else {
            System.out.printf("Error: Index %d is out of bounds.%n", index);
        }
    }
}
