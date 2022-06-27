// !operators
// *assignment operators
var a = 12;
var b = 13;

a += b;
console.log(a);

// *postfix and prefix

var a = 1;
var b = ++a; //incrimination
console.log("a: ", a);
console.log("b: ", b);


var c = 1;
var d = c++;
console.log("c: ", c);
console.log("d: ", d);

// *comparison operator =>boolean operation
console.log(12 == '12'); //!not strict check
console.log(12 === '12'); //!strict check

console.log(12 != '13'); //!not strict check
console.log(12 !== '13'); //!strict check
console.log(12 !== 12); //!strict check

console.log(12 > 3);
console.log(12 >= 12);

// *Logical Operators

// !&&
console.log("&&: ", true && false);
console.log("&&: ", true && true);
// ! >10 and <20
var num = 15;
console.log("The number is: ", num > 10 && num < 20);

// !Or
console.log("&&: ", true || false);
console.log("&&: ", false || false);

// !Not Operator !
console.log(!true);
console.log(!false);

// !if else
var y = 12;
var z = 12

if (y > z) {
    console.log(`${y} is greater than ${z}`);
} else {
    console.log(`${y} is smaller than ${z}`);
}

if (y > z) {
    console.log(`${y} is greater than ${z}`);
} else if (y < z) {
    console.log(`${y} is smaller than ${z}`);
} else {
    console.log(`${y} is equal to ${z}`);
}

// !Nested If

if (y > z) {
    if (y < z) {

    }
}

// !switch case

var p = 20;
switch (p > 10) {
    case true: {
        console.log(`${p} is greater than 10`);
        break;
    }
    default: {
        console.log(`${p} is smaller than 10`);
        break;
    }
}


switch (p) {
    case 20: {
        console.log('Number is 20');
        break;
    }

    case 10: {
        console.log('Number is 10');
        break;
    }
    default: {
        console.log('Number is other');
        break;
    }
}