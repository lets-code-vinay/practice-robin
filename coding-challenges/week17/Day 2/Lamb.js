function answer(lambs){
    var totals = [generous(lambs), stingy(lambs)]
    var difference = Math.max(...totals) - Math.min(...totals)
    return difference
}
function generous(lambs){
    var num = 1
    while (lambs>1){
        total = Math.pow(num,2) -1
        if (total <= lambs){
            num += 1
        }
        else{
            num -= 1
            break
        }
    }
    return num
}
function stingy(lambs){
    var num = 1
    while (lambs>1){
        var total = (fibonacci(num + 2) - 1)
        if (total <= lambs){
            var num =num + 1;
        }
        else{
            num = num - 1;
            break
        }
    }
    return num
}
function fibonacci(num){
    var a = 1;
    var b = 1;
    for (var i=2;i<=num;i++){
        temp=b;
        b=a+b;
        a=temp
    }
    return a
}
console.log(answer(10))