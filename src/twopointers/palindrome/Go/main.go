package main

import (
	"fmt"
	"strings"
	"unicode"
)

func isPalindrome(inputString string) bool {
	// Convert the input string to lowercase
	inputString = strings.ToLower(inputString)

	// Initialize two pointers
	left, right := 0, len(inputString)-1

	// Move the pointers towards the middle
	for left < right {
		// Skip non-alphanumeric characters from both ends
		for left < right && !unicode.IsLetter(rune(inputString[left])) && !unicode.IsDigit(rune(inputString[left])) {
			left++
		}
		for left < right && !unicode.IsLetter(rune(inputString[right])) && !unicode.IsDigit(rune(inputString[right])) {
			right--
		}

		// Compare characters at the pointers
		if inputString[left] != inputString[right] {
			return false // Not a palindrome
		}

		// Move the pointers inward
		left++
		right--
	}

	return true // Palindrome
}

func main() {
	// Test the function
	inputString := "A man, a plan, a canal, Panama!"
	fmt.Printf("Is \"%s\" a palindrome? %t\n", inputString, isPalindrome(inputString))

	inputString = "kaYak"
	fmt.Printf("Is \"%s\" a palindrome? %t\n", inputString, isPalindrome(inputString))
}
