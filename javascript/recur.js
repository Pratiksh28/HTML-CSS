debugger
// recurrusion function 
function recur(n){
    let add =0
    if(n==0){
        return add;
    }
    add=n+recur(n-1)
    return add 
}
console.log(recur(5));