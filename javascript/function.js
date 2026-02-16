// //!NAMED FUNCTION
// function greeting(){
//     console.log('good afternooon');
// }
// greeting();
// greeting();//reuseable

// function add(){
//     // return 'this is add function'; //excecute oly first line when we call function...
//     return 5+4;
    
// }
// console.log(add())

// function addn(a,b){//parameter
// return a+b;
// }
// console.log(addn(2,6));//argument

// function addi(a,b){
//     console.log(a+b);
//     console.log(arguments[2]); //arguments object

// }
// addi(7,3,9,2);

// //!ANONMONS FUNCTION
// (function (){
//     console.log("anonmons function")
// }())

// //!function with expression
// let A=function(){
//     console.log("function with expression ")
// }
// A();

// let B=function b(){
//     console.log("function with expression 2")
// }
// B();

// //!first class function
// // when we store the function inside variable that function is called first class function 
// // named function is first class function but that have been stored in variable

// //!IIFE-->immediate invoke fn expr.
// (
//     function(){
//         var c=10
//         console.log("this is IIFE");
//     }
// ())

//! 
function sorry(n){
for(let i=1;i<=n;i++){
    console.log('sorry',i);
}
}
// sorry(155555);

// ! named function : the functio has named that function is called named function 
function greet(){
    console.log('good afternoon');
    return 'sir la zhop yet aaahhhe';
}
console.log(greet());

// !anoymous function
(function(){
    console.log('anonymous function')
}())

// !function with expression
let ano=function(){
    console.log('anonymous function store in variable');
}
ano()


let fun=function add(){
    return 10+30
}
console.log(fun());


// !IIFE immediate invoke function exepression
// (fun)()

(
    function (){
        console.log(' i am iiiieeff');
    }
)()