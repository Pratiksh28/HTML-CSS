// let i=1
// do{
//     console.log('menu card');
//     i++
// }while(i>10);

//
// let job=false
// do{
// console.log('party')
// if(job){
//     job=true
// }else{
//     job=false
// }
// }while(job);

//1.print number from 1 to 10
// let i=1
// do{
//     console.log(i)
//      i++;
// }while(i<=10);

//2.print 10 to 1 in reverse order
// let j=10;
// do{
//     console.log(j)
//     j--;
// }while(j>=1);

//print all even number
// let i=1;
// do{
//     if(i%2==0){
//     console.log(i);
//     }
//     i++;
// }while(i<=20);

//print odd numbers
// let i=1;
// do{
//     if(i%2==1){
//     console.log(i);
//     }
//     i++;
// }while(i<=20);

//print 5 table
// let i=1;
// do{
//     if(i%5==0)
//         console.log(i);
//     i++
// }while(i<=50);

//print number starinting from 1 until the number become
// let i=1
// do{
//     console.log(i)
//      i++;
// }while(i<=7);

// ! printing 1 to 20 but stop if the number is divisible by 5
// let i=1;
// do{
//     if(i%5!=0){
//     console.log(i);
//     i++}
// }while(i<=20);

// !print the number form 1 to 10 and skip 6
// let i=1
// do{
//     if(i!=6){
//             console.log(i);
//     }
//     i++
//     }while(i<=10);

// count the number from 1 to 50 divisible by 3
// let i=1;
// let count;
// do{
//     if(i%3==0){
//         console.log(i);
//     }
//     i++;
// }while(i<=50);

//!sum of 1 to 10
// let i=1;
// let sum=0;
// do{
//     sum+=i;
//     i++;
// }while(i<=10);
//     console.log(sum);

// ! reverse number 123-->321...................
// let num=123;
// let a=num;
// let rev=0;
// do{
//     let rem=num%10
//     rev=rev*10+rem;
//     num=num/10;

// }while(num>0);
// console.log(rev);

//! count digit in  given number
// let a=1234;
// let count=0;
// do{
//     count++;
//     let rem=a%10;
//     a=(a-rem)/10;
// }while(a>0)
//     console.log(count);

// // !sum of digit of number......................
// let b=23;
// let sum=0;
// do{
//     let c=b%10;
//     sum += b;
//     b/= 10;
// }while(b>0)
//     console.log(sum)



// reverse 123-->321
// let num=123;

// do{
//    let next=num%10;
//    let rev= next

// }while(num>0)
//        console.log(rev)

//!keep asking for a passwor until user enter correct password enter
let username='sakshi';
let password=1234;
let user,pass;
do{
      user=prompt('username');
      pass=prompt('password');
      if(user===username && pass===password){
          console.log('login successful');
      }
      else{
          console.log('invalid credentials');
      }
}while(user!==username || pass!==password);