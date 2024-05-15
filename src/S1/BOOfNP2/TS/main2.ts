function displayCoordinates(size: number): void {
    let str: string = "";

    for (let i: number = 0; i < size; i++) {
        for (let j: number = 0; j < size; j++) {
            str += `(${i}, ${j}) `;
        }
        str += "\n"; // Add a newline after each row
    }

    console.log(str);
}

export { displayCoordinates };

const size: number = 8;
displayCoordinates(size);
