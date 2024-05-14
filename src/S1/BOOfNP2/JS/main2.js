function displayCoordinates(size) {
    let str = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            str += `(${i}, ${j}) `;
        }
        str += "\n"; // Add a newline after each row
    }

    console.log(str);
}

module.exports = { displayCoordinates };

const size = 8;
displayCoordinates(size);

