// Main.java

public class Main {
    public static void main(String[] args) {
        String[] studentNames = {
                "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
                "Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
                "Quincy", "Rachel"
        };

        StudentHelper.showNameAt(studentNames, 17); // Student: Rachel at index 17
        StudentHelper.showNameAt(studentNames, 41); // Error: Index 41 is out of bounds.
    }
}
