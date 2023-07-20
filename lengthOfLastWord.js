function findLength(string) {
  const trimmedString = string.trim();
  const words = trimmedString.split(" ");
  return words[words.length - 1].length;
}

let string = "   fly me   to   the moon  ";
console.log(findLength(string));
