function unlock(str){
    str=str.toLowerCase()
    let code=''
    const cypher={2:'abc', 3:'def',4:'ghi',5:'jkl', 6:'mno',7:'pqrs',8:'tuv', 9:'wxyz'}
    for (let i=0;i<str.length;i++){
      for (let j in cypher){
        if (cypher[j].indexOf(str[i])!==-1) code+=j
      }
    }
     return code
  }