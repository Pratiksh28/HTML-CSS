//! generetor function syntax: function* functiom(){
// !                             yield 1;
//  !                            yield 2;
//   !                           yield 3;
//!                              }
// !                            let variable=function()
// !                            console.log(data.next().value);

//? example
function* generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let data=generator()
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);


// 