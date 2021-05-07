function binaryAddition(a,b){
  var result = "",
      carry = 0;

  while(a || b || carry){
    let sum = +a.slice(-1) + +b.slice(-1) + carry; // get last digit from each number and sum 

    if( sum > 1 ){  
      result = sum%2 + result;
      carry = 1;
    }
    else{
      result = sum + result;
      carry = 0;
    }
    
    // trim last digit (110 -> 11)
    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }
  
  return result;
}

// Tests
[
  ["0","0"],
  ["1","1"],
  ["1","0"],
  ["0","1"],
  ["10","1"],
  ["11","1"],
  ["10","10"],
  ["111","111"],
  ["1010","11"]
].forEach(numbers => 
   document.write(
     numbers[0] + " + " + 
     numbers[1] + " = " + 
     binaryAddition(numbers[0], numbers[1]) + 
     "      <mark> (" +
     parseInt(numbers[0], 2) + " + " + 
     parseInt(numbers[1], 2) + " = " + 
     parseInt(binaryAddition(numbers[0], numbers[1]),2) +
     ")</mark><br>" 
   )
)
document.body.style="font:16px monospace";

