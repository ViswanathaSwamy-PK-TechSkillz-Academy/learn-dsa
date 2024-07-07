// studentHelper.go

package main

import "fmt"

func showNameAt(students []string, index int) {
	if index >= 0 && index < len(students) {
		fmt.Printf("Student: %s at index %d\n", students[index], index)
	} else {
		fmt.Printf("Error: Index %d is out of bounds of total %d.\n", index, len(students))
	}
}
