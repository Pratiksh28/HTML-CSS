console.log("pratiksha");

//var 
var age=90
console.log(age);

//declaration
var sname
//console.log(sname);

//initialization
sname="pshi"
console.log(sname);

//re-declaration
var sname="psha"
//re-initialization
sname="pratiksha"
sname="pshi"
sname="prulu"
sname="psha"
console.log(sname);

//let declaration
let city
//let initilaization
city="pune"
//let redeclaration
// let city="goa"//error
//let re-initialization
city="mumbai";
console.log(city);

//const declaration
const myname="Pratiikshan"
console.log(myname);
//const re-initialization
//myname="psha"//error
//const redeclaration
//const myname="psha"//error


//~~~~~~~hoisting:asseccing the variable before its initiliczation possible only by var not by let or const
console.log(ename);
var ename="parti";

// TDZ : temporal dead zone(time between the variable is declared and initialized)
// console.log(dname)
// let dname="ola"

// console.log(cname)
// const cname="polo"

// ~~~~~~Keyword :keywords are the predefined words whose task is fixed 
//       we can utilize the keyword but we cannot change their task
//       keywords must not use as indentifier
//       eg: var , let , const , if , else , for , while , do , switch , case , break , function , return , try , catch , finally , throw , class , extends , super , this , new , in , typeof , instanceof , void , delete , with , yield , await , import , export , default , null , true , false

// ~~~~~~Identifier : the name given to variable is called identifier
// we must not use the keywords as identifier

// let true=90//error

//* rules for naming the identifier
// 1. after first character we can use 0-9 add in between also
// 2.it must not contain spaces
// 3. it should start with a-z or A-Z or _ or $

//DATATYPES
//? 1.primitive datatype          2.non-primitive datatype
// a.number                      a.array
// b.string                      b.object
// c.boolean                     c.function
// d.undefined
// e.null
// f.symbol
// g.bigint


//1.number
let num=90
console.log(typeof num);

//*string
let str='pratuksha';
console.log(str);
console.log(typeof str);

//!string
let str1="pPratiksha"
console.log(str1);

let str2= "pratikshaaa"
console.log(typeof str2);

//booolean
let isplaced=true;
console.log(typeof isplaced);

//bigint
let numm=98483890578573495809589085095053n
console.log(typeof numm)

let nummm=5165456566546546546546546545168451656545;
console.log(nummm);
console.log(typeof nummm);

//undefined typeof=undefined
let und;
console.log(und);
console.log(typeof und);

//null typeof=object
let nll=null;
console.log(nll);
console.log(typeof nll);

//symbol digramatic representation
let a=Symbol("pratiksha");
console.log(a);
let b=Symbol("pratiksha");
console.log(typeof a);
console.log(a==b);



// //non-primitive datatype
// //array-hetrogenous and homogeneous
// let arr=[90,"pratiksha",true,null,undefined,'a'];
// console.log(arr);
// console.log(typeof arr);

// // console.log(arr[2]);

// //objet
// let obj={
//     id:101,
//     namee:"pratiksha",
//     age:21,
// }
// console.log(obj);
// console.log(typeof obj);

// //function
// function fun(){
//     let a=2
//     let b=3
//     let c=a+b;
//     console.log(c);
// }
// fun()
// fun()
// console.log(typeof fun);

//!opretor in JavaScript
//1.arithmetic operator(+,-,*,/,%,**)
let n1=10;
let n2=4;
let total=n1+n2;
console.log(total);
console.log(n1+n2);
console.log(34-12);
console.log(total +" is addtitation");
console.log("subraction" ,67-7)
console.log("multiplaction " + 9*9)
console.log("modulo"+ 81%9)
console.log("power " +2**5)

//assignment opretor(+=,-+,*=,/+,%=)
let salary=200000
let bonus=20000
salary+=bonus
console.log(salary);

let sal=2000000
let deduction=200
sal-=deduction;
console.log(sal);

let kurkure=10
let sibling=2
kurkure /=sibling;
console.log(kurkure);

let tripbudget=1200
let sakshi=2
tripbudget *= sakshi
console.log(tripbudget)

let data=30
let n=4
data%=n
console.log(data)

//relational opretor(<,>,<=,>=,!=,==,===(strictly equaler))
console.log(2>5);
console.log(2<4);
console.log(9<=9)
console.log(9>=9)
console.log(9!=9)//false
console.log(9!=8)//true
console.log(8=='8')//imlicitly tycasting by compiler //true
console.log(8==='8')//false beacuse it means strictly
console.log(8==="8")//false

//logical opretor(&&,||,!)
//! Logical operators 

console.log(false && false);
console.log(false && true);
console.log(true && true);
console.log('true' && true);
console.log(10 && false);
console.log(10 && 'false');
console.log(undefined && true);
console.log(null && undefined);
console.log(1867687 && true);
console.log(-765757 && 'hello');
console.log(0 && 1);

//? OR ||
console.log(true || false);
console.log(true|| 'true');
console.log(0 || false);
console.log(1||false);
console.log(['hello'] || false);
console.log(false || -1);
console.log(false || '-1');
console.log(null || undefined);
console.log(undefined || null);
console.log(55 || true);
console.log(true || !false);
console.log(!true || !false);
console.log(!true || !false || -1);
console.log(!true || !false || '-1');

console.log(!false );
console.log(!1);
console.log(0);
console.log(!'TRUE');


console.log(1+1);
console.log(1+'1');
console.log(1-1);
console.log(1-'1');
console.log(true - 1);
console.log(true - '1');
console.log(true - '11');
console.log(false + '11'); 

