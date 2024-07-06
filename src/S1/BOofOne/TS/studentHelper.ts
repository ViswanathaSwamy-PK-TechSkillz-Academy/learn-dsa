// studentHelper.ts

export function showNameAt(students: string[], index: number): void {
    if (index >= 0 && index < students.length) {
        console.log(`Student: ${students[index]} at index ${index}`);
    } else {
        console.log(`Error: Index ${index} is out of bounds.`);
    }
}
