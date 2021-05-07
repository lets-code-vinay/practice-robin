function spinWords(backward){

    var sentence = "";
    var separate = backward.split("");
   
    for (var i = separate.length - 1; i >= 0; i--){
      if (separate[i].length >= 1){
      sentence += separate[i].split("").reverse().join("");
      }
     else {
     sentence += "" + separate[i];
     }
    }
   return sentence;
   }
   
   spinWords("Hey fellow warriors");