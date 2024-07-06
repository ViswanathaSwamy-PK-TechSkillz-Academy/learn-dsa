// main.ts

import { showNameAt } from './studentHelper';

const studentNames2: string[] = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
    "Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
    "Quincy", "Rachel"
];

showNameAt(studentNames2, 17);  // Student: Rachel at index 17
showNameAt(studentNames2, 41);  // Error: Index 41 is out of bounds.
