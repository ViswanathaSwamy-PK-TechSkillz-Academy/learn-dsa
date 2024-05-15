function showNameAt(students, index) {
    if (index >= 0 && index < students.length) {
        console.log(`Student: ${students[index]} at index ${index}`);
    } else {
        console.log(`Error: Index ${index} is out of bounds.`);
    }
}

module.exports = { showNameAt };

const studentNames = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Isaac",
    "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela", "Quincy", "Rachel"
];

showNameAt(studentNames, 41);
