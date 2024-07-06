// main.go

package main

func main() {
	studentNames := []string{
		"Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
		"Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
		"Quincy", "Rachel",
	}

	showNameAt(studentNames, 17) // Student: Rachel at index 17
	showNameAt(studentNames, 41) // Error: Index 41 is out of bounds.
}
