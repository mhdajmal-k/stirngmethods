x="hello"
x1="hwllr"
function hamindDistance(x,x1){
    if(x.length!==x1){
        return
    }
    count=0
    for (let i = 0; i < x.length; i++) {
       if(x[i]!==x1[i]){
        count++
       }
        
    }
    return count
}

console.log(hamindDistance(x,x1))