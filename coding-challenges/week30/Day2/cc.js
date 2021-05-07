var combine = function(n, k) { //k is slot, n is 1- n range
    if (k > n) return [];
    let res = [];
    var helper = function(cur, index){
        if (cur.length == k) {
            res.push([...cur]);
            return;
        }
        for(let i = index; i <= n; i++){
            cur.push(i);
            helper(cur, i+1);
            cur.pop();
        }
    }
    helper([], 1);
    return res;
};