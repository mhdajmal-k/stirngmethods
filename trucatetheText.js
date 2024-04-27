//input: str="muhammed ajmal k"  maxlength=8
//outPut="muhammed..."

function truncate(string,maxLength){
if(string.length<maxLength){
    return string
}
const a=string.slice(0,8)
const b=a.concat("...")
return b
}

const string="muhammed ajmal k"
const maxLength=9
console.log(truncate(string,maxLength))
