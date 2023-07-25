function validParanthesis(s) {
  let stack = [];
  for (let bracket of s) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else {
      let popElement = stack.pop();
      if (popElement !== "(" && bracket === ")") {
        return false;
      } else if (popElement !== "{" && bracket === "}") {
        return false;
      } else if (popElement !== "[" && bracket === "]") {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}

let s = "([]){}";
console.log(validParanthesis(s));
