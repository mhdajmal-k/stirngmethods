function palindrome(num){
    const s=num.toString().split("")
    for (let i = 0; i < s.length; i++) {
       if(s[i]!==s[s.length-1-i]) {
        return false
       }
    }
    return true
}
const x=121
console.log(palindrome(x));

