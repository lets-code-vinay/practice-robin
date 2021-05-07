const backspace = function(string){ 
    let newArr = []
    let str = [...string];

    for (const x of str) {
        if (x!='#') newArr.push(x)
        else newArr.pop()
    }
    return newArr.join('')
}

    
console.log(backspace('abc#d##c'));
console.log(backspace('abc##d######'));
console.log(backspace('#######'));
console.log(backspace(''));