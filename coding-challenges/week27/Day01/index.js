
function longest_common_starting_substring(arr1){
    const arr= arr1.concat().sort();
        //console.log('arr--',arr)
    const a1= arr[0];
        //console.log('a1----',a1)
    const a2= arr[arr.length-1];
        //console.log('a2----',a2)
    const L= a1.length;
        //console.log('L----',L)
    let i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
        //console.log('a1---sub----',a1.substring(0,i))
  }
  
  console.log(longest_common_starting_substring(['gold', 'google', 'goggles','googly'])); 
  
  console.log(longest_common_starting_substring(['flower', 'flow'])); 
  
  console.log(longest_common_starting_substring(['abcd', '1234']));