function isPalindrome(inputString) {
    // Convert the input string to lowercase
    inputString = inputString.toLowerCase();

    // Initialize two pointers
    let left = 0;
    let right = inputString.length - 1;

    // Move the pointers towards the middle
    while (left < right) {
        // Skip non-alphanumeric characters from both ends
        while (left < right && !isAlphaNumeric(inputString[left])) {
            left++;
        }
        while (left < right && !isAlphaNumeric(inputString[right])) {
            right--;
        }

        // Compare characters at the pointers
        if (inputString[left] !== inputString[right]) {
            return false; // Not a palindrome
        }

        // Move the pointers inward
        left++;
        right--;
    }

    return true; // Palindrome
}

function isAlphaNumeric(char) {
    return /[a-z0-9]/.test(char);
}

// Test the function
let inputString = "A man, a plan, a canal, Panama!";
console.log(`Is "${inputString}" a palindrome? ${isPalindrome(inputString)}`);

inputString = "kaYak";
console.log(`Is "${inputString}" a palindrome? ${isPalindrome(inputString)}`);
