package main

import "fmt"

func moveZerosToEnd(nums []int) {
	left, right := 0, 0

	for right < len(nums) {
		if nums[right] != 0 {
			nums[left], nums[right] = nums[right], nums[left]
			left++
		}
		right++
	}
}

func main() {
	nums := []int{0, 1, 0, 3, 12, 0, 8}
	fmt.Println("Original array:", nums)

	moveZerosToEnd(nums)

	fmt.Println("Array after moving zeros to the end:", nums)
}
