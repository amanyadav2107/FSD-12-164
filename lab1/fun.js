const toWords = (digit)=>{
    const words =["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    return words[digit];

}
console.log(toWords(5));
console.log(toWords(3));
console.log(toWords(6));
console.log(toWords(9));