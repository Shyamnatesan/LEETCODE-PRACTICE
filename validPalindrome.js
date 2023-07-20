function validPalindrome(s) {
  let formattedString = "";
  for (let i = 0; i < s.length; i++) {
    if (isLetters(s[i])) {
      formattedString += s[i].toLowerCase();
    }
  }

  let start = 0;
  let end = formattedString.length - 1;
  while (start < end) {
    if (formattedString[start] !== formattedString[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}

function isLetters(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57)
  );
}

let string = "0P";
console.log(validPalindrome(string));
