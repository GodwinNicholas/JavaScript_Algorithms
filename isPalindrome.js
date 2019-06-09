// checks if a word is Palindrome or not using ES6 syntax

const isPalindrome = str => str.split('').reverse().join('') == str

// call function
isPalindrome("madam");