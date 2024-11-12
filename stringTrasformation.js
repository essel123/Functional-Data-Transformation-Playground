// FUNCTION TO CAPITALIZE STRING
function capitalize(str) {
  return `${str.charAt(0).toUpperCase() + str.substr(1)}`;
}


// FUNCTION TO REVERSE A STRING
function reverse(str) {
  return `${str.split("").reverse().join("")}`;
}


//FUNCTION TO CHECK IF A STRING IS A PALINDROME
function isPalindrome(str) {
  if (str.split("").reverse().join("") === str) {
    return `${str} is a Palindrome`;
  } else {
    return `${str} is not a Palindrome`;
  }
}

// FUNCTION TO COUNT THE NUMBER OF CHARACTERS IN A STRING
function wordCount(str) {
  return `${str.length}`;
}

// calling  functions and logging their return valuse
console.log("----------------------------------");
console.log(capitalize("mark"));
console.log(reverse("mark"));
console.log(isPalindrome("mark"));
console.log(wordCount("mark"));

console.log("----------------------------------");

// COMPOSED FUNCTION
console.log("|Composed function return value|");
function compose(...fns) {
  return function(arg) {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  };
}

const str = compose(reverse, wordCount, capitalize);
console.log("----------------------------------");
console.log(str("mark"));
console.log("----------------------------------");
