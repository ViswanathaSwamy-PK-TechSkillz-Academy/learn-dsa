const studentNames1: string[] = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
    "Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
    "Quincy", "Rachel"
];

function showNames(students: string[]): void {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].toUpperCase());
    }

    for (let i = 0; i < students.length; i++) {
        console.log(students[i].toLowerCase());
    }
}

// Example usage:
showNames(studentNames1);
