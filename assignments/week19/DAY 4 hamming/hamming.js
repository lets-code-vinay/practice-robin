const backSpaces = (string) => {
    var list = [];
    for (let char of string) {
      if ((/[a-zA-Z0-9]/.test(char)))
        list.push(char);
      else if (char === '#') {
        list.pop();
      }
    }
    return `\"${list.join('')}\"`
  }
  
  console.log(backSpaces('a#bc#d'));      //"bc"
  console.log(backSpaces('abc#d##c'));    //"ac"
  console.log(backSpaces('abc##d######'));//""
  console.log(backSpaces('#######'));     //""