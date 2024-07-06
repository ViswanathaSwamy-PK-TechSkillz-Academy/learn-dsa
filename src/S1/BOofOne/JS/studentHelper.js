// studentHelper.js

function showNameAt(students, index) {
    if (index >= 0 && index < students.length) {
        console.log(`Student: ${students[index]} at index ${index}`);
    } else {
        console.log(`Error: Index ${index} is out of bounds.`);
    }
}

module.exports = { showNameAt };
