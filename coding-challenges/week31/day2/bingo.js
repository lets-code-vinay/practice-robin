const winSequence = [2, 9, 14, 7, 15];
function bingo(input = []){
 return [...new Set(input)].filter(value => winSequence.includes(value)).length === winSequence.length ? "WIN" : "LOSE";
}
