const studentNames = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Isaac",
    "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela", "Quincy", "Rachel"
];

function showNames(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}

module.exports = { showNames };

console.log(showNames(studentNames));
