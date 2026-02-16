//1
function add(a,b){
    return a+b ;
}
console.log(add(3,9));
//2
function print(a,b,c){
    // return a,b,
    console.log(a,b,c)
}
print(3,4,5);
//3
function greeting(name){
    console.log('hello',name);
}
greeting('sakshi')
//4
function square(a){
    console.log(a*a);
}
square(3);
//5
function greater(a,b){
    if(a>b){
    console.log(a ,'is greater');
    }    
    else
        console.log(b,'is greater');
}
greater(22,9)


//! Arguments object
//1
function printall(){
    console.log(arguments.length)
}
printall(2,3,4,5,6,7);
//2
function index(){
    console.log(arguments[2])
}
index(2,4,5,6,6);
//3
function all(){
    // console.log(arguments);
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
all(4,5,6,8,9,2,4,6,7);
//4
function addition(){
    console.log('addition',arguments[0]+arguments[1]);
}
addition(2,44,5,6);
//5
function last(){
    let n=arguments.length;
    console.log('last elemetnt',arguments[n-1])
}
last(2,5,7,9,3,5);
//!anonymous function
//1
(function (){
        console.log('anonyomus function executed');
    }
())
//2
