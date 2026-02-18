// !arrow function
//?ex1
// let a=()=>{
//     console.log('arrow function')

// a();

// ?ex2 Explicit return
// let b=()=>{
//     return 'Arrow function with return keyword';
// }
// console.log(b());

// ?ex3 Implicit return
// let c=()=>'Arrow function without return keyword';
// console.log(c());

// ?ex4 
// let d=e=>e
// console.log(d(10));

// let d=(e,f)=>[e,f]
// console.log(d(10,20))

// ?ex5
// let nameArrow=()=>{
//     return 'sakshi';
// }
// console.log(nameArrow());

// // ?ex6
// let nameArrow2=a=>a
// console.log(nameArrow2('pratiksha'))

// ?ex 7
// let add=(a,b)=>a+b
// console.log(add(10,20));

// ?ex7
// let even=(a)=>{
//     if(a%2==0){
//         console.log('even');}
//     else{
//         console.log('odd');
//     }
// }
// even(7);
//  console.log(even(3))

// ?ex 8 celsius to fahrenheit.

// ? 9.check no is negetive  positive or zero
// let num=(a)=>{
//     if(a>0){
//         console.log('positive');
//     }
//     else if(a<0){
//         console.log( a, "negetive");
//     }
//     else{
//         console.log('zero');
//     }
// }
// num(-6);


// ?10.takes array and return the sum of array
// let add=(a,b,c)=>[a+b+c]
// console.log(add(2,3,4));

//  ? 10.factorial of number
// let fact=(n)=>{
//     for(let i=n-1;i>=1;i--){
//         n*=i;
//     }
// return n;
// }
// console.log(fact(5));

//? 11.square of number
// let square=(a)=>a*a
// console.log(square(3));

// ? 12.greet msg 
// let msg=(a)=>{
//     console.log('hello',a);
// }
// msg('sakshi');

// ?13.maximum number
// let max=(a,b)=>{
//     if(a>b){
//         console.log(a,'is greater');
//     }
//     else if(a<b){
//         console.log(b,'is greater');
//     }
// }
// max(44,99);

// ?14.reverse string
// let reverseString=(str)=>{
//     let rev ='';
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//     return rev;
// }
// console.log(reverseString('sakshi'));

//?15.pallindrome
// let pallindrome=(str)=>{
//     let rev='';
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//     if(str===rev){
//         console.log('palindrome');
//     }
//     else{
//         console.log('not palindrome');
//     }

// }
// pallindrome('madam');

// // ?vowles in string
// let vowles=(str)=>{
//     let count=0;
    
//     for(let i=0;i<=str.length-1;i++){

//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o'|| str[i]=='u'){
//          count++;

//         }
// }
// return count;
// }
// console.log(vowles('sakshi'));

//higher order function a function which is accepting another function as an argurment
//call back function a functioon which acts as an argument in highter order function.

// function greet(a){
//  console.log("avc");
//   console.log(a);
// }
// greet(call(),'aaa')//here aaa is not print because after call() <--function end here only..

// function call(){
    
//     console.log('gm');
//     return 'good morning';
// }

// ! HOF
// function greet(z){
//     z();
// }
// greet(morning)
// greet(morning)

// function morning(){
//     console.log('good mornign');
// }
// function afternoon(){
//     console.log('good afternoon');
// }
// function evening(){
//     console.log('good evening ');
// }

// !hof with name.............
// function greet(z,sname){
//     z(sname)
// }
// greet(morning,'sakshi');

 // ?call back function.........

// function morning(a){
//     console.log('good morning',a);
// }
// function afternoon(){
//     console.log('good afternoon');
// }
// function evening(){
//     console.log('good en=vening');
// }


//? example
// function add(a,b){
//     return a+ b ;
// }
// function sub(a,b){
//     return a-b ;
// }
// function multiple(a,b){
//     return a*b ;
// }
// function divide(a,b){
//     return a/b ;
// }
// function calculater(callback, a,b){
//     return callback(a,b) ;
// }
// console.log(calculater(add,10,20));

//? example_1
// function num(a){
//     console.log(a());
// }
// num(fun);
// function fun(){
//     return 10;
// }

//? example_2
// function num(a){
//     for(let i=1;i<=5;i++){
//     console.log(a());
//     }
// }
// num(fun);
// function fun(){
//     return 'hello sakshi';
// }


// ?example_3

// function fun(a,b,c){
// console.log(a(b,c));
// }
// fun(num,10,45);
// function num(b,c){
//  if(b>c){
//     return 'a is greater';
//  }
//  else{
//     return 'b is greater';
//  }
// }

// ?example_4
function fun(f,a){
console.log(f(a));
}
fun(even,20);
function even(a){
    if(a%2==0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

// ?example_5 login simulation function 
function fun(){

}
fun();
function login(user,pass){
    let username='sakshi';
    let password='123';
    if(user==username && pass==password){
        return 'login successfully'
    }
    else{
        return 'error';
    }
}