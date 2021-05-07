var removeDuplicates = function(nums) {
    let count=1
    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            count++
        }else{
            if(count > 2){
                while(count > 2){
                    nums.splice(i-1,1)
                    i--
                    count--
                }
            }
            count= 1
        }
    }
       if(count > 2){
                while(count > 2){
                    nums.splice(nums.length-1,1)
                    count--
                }
       }
    return nums.length
};