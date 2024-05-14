const studentNames: string[] = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
    "Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
    "Quincy", "Rachel"
];

function showNames(students: string[]): void {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}

// Example usage:
showNames(studentNames);
