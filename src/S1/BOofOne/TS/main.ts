const studentNames: string[] = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
    "Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
    "Quincy", "Rachel"
];

function showNameAt(students: string[], index: number): void {
    if (index >= 0 && index < students.length) {
        console.log(`Student: ${students[index]} at index ${index}`);
    } else {
        console.log(`Error: Index ${index} is out of bounds.`);
    }
}

// Example usage:
showNameAt(studentNames, 41); // Error: Index 41 is out of bounds.
