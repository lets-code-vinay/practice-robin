const square = (str) => {
  const newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) newStr[i] *= newStr[i];
  return newStr.join("");
};

console.log(square("9119"));