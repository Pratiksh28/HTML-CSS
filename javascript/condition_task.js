let marks=67;
if(marks>80){
    console.log("grade A");
}
else if(marks >70){
    console.log("grade B");
}
else if(marks >55){
    console.log("grade C");
}
else if(marks >35){
    console.log("grade D");
}
else if(marks <35){
    console.log("fail");
}
else{
    console.log("enter valid marks");
}

//2
let number=35;
if(number>0){
    console.log("number is positive");
}
else if(number <0){
    console.log("number is negetive");
}
else if(number ==0){
    console.log("number is zero");
}

//3
let age=40;
if(age<15){
    console.log("ticket prize is 20");
}
else if(age <50){
    console.log("ticket price is 40");
}
else if(age <60){
    console.log("ticket price is 50");
}
else if(age>60){
    console.log("ticket price is 20");
}
else{
    console.log("enter valid age");
}
//4
let username='sakshi';
let password='oop';
if(username=='sakshi' && password=='oop'){
    console.log("login sucessful");
}
else{
    console.log("check username or password");
}

//!switch case
//1
let day= 1;
switch(day){
    case 1:
    console.log("sunday");
        break;
    case 2:
    console.log('monday');
        break;
    case 3:
    console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console,log("thrusday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");     
    default:
        console.log("enter proper number");           
}
//2
let a=10;
let b=4;
let c="division";
switch (c){
    case "addition":
        console.log(a+b);
        break;
    case "subraction":
        console.log(a-b);
        break;
    case "multiplication":
        console.log(a*b);
        break;
    case "division":
        console.log(a/b);
        break;
    default :
        console.log("invalid arithmatic opretion");            
    }
    

    //3
    let month=3;
    switch(month){
        case 1:
            console.log("january");
            break;
        case 2:
            console.log("february");
            break;
        case 3:
            console.log("march");
            break;
        case 4:
            console.log("april");
            break;
        case 5:
            console.log("may");
            break;  
        case 6:
            console.log("june");
            break;
        case 7:
            console.log("july");
            break;
        case 8:
            console.log("august");
            break;  
        case 9:
            console.log("september");
            break;
            case 10:
                console.log("octomber");
                break;
                case 11:
                    console.log("november");
                    break;
                    case 12:
                        console.log("december");
                        break;
        default:
            console.log("enter valid month number");
    }
    //4 menu driven calcuulater using switch case
    let num1=10;
    let num2=5;
    let calculate="addition";
    switch(calculate){
        case "addition":
            console.log(num1+num2);
            break;
        case "subraction":
            console.log(num1-num2);
            break;
        case "multiplication":
            console.log(num1*num2);
            break;
        case "division":
            console.log(num1/num2);
            break;
        default:
            console.log("invalid arithmatic opretion");

    }
    //5 grade a,b,c,d,f using swtich case
    let marks1=67;
    switch(true){
        case marks1>80:
            console.log("grade A");
            break;
        case marks1>70:
            console.log("grade B");
            break;
        case marks1>55:
            console.log("grade C");
            break;
        case marks1>35:
            console.log("grade D");
            break;
        default:
            console.log("fail");
    }