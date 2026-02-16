// loops in javascript for,while,do while
// for loop used when we know the number of iterations
// while loop used when we don't know the number of iterations
// do while loop used when we want to execute the loop at least once

for(let i=1;i<=5;i++){
   console.log('sorry',i);
}
//write a programm to print number from 1 to 10 using for loop
for(let i=1;i<10;i++){
    console.log(i);
}
//write a programm to print 10 to 1 using for loop
for(let i=10;i>=1;i--){
    console.log(i);
}
//write a program to print the even number between 1 to 20
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}
//write a program to print the sum of number between 1 to 100
let sum =0;
for(let i=1;i<=100;i++){
    sum=sum+i;
}
console.log(sum);

//multiplication table of 5
let table=5;
for(let i=1;i<=10;i++){
    let a=i*table;
    console.log(a)
}
//prime number check  user input
// let num=prompt('enter a number'); //is use when will want to ge tinput form the user......
// let count=0;
// for(let i=1;i<=num;i++){
//     if(num%i===0){
//         count ++;
//     }
// }
// if(count===2){
//     console.log(num ,"prime");
// }
// else{
//     console.log(num, "not prime");
// }

// 2nd method

let number=prompt('enter a number');
let isPrime=true;
if(number ==1){
    isPrime=true;
}
for(let i=2;i<number;i++){
    if(number%i==0){
        isPrime=false;
        break;
    }
}
if(isPrime){
    console.log(number, "is prime");
}
else{
    console.log(number, "is not prime");
}


