function reachLastIndex(arr){
    if(arr[0] == 1 ||arr[0] == 0 && arr.length == 1 || arr.length == 2){
        return true
    }
    if( arr[0] == 0 && arr.length == 2){
        return false
    }
    var count = 0
    var last_index = arr.length-1 
    for(var i=1;i<arr.length;i++){
        count = arr[i]
        i = count + 1 
        if(i<last_index){ 
            continue        
        }
        else if(i == last_index){
            return true
        }else{
            return false
        }
    }
}

// console.log(reachLastIndex([0,1]))
// console.log(reachLastIndex([2,3,1,1,4,1,2,3,2,5,1,7]))
console.log(reachLastIndex([3,2,1,0,4]))
console.log(reachLastIndex([2,3,1,1,4]))
// console.log(reachLastIndex([1,1,4,2,3,5,4]))
