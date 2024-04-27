function isAnagram(x,x1){
    a=x.split("").sort().join("")
    b=x1.split("").sort().join("")
    return a==b
}

x="anagram"
x2='nagaram'
console.log(isAnagram(x,x2))