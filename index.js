// Using for loop, print out the first 6 numbers starting from 8, but terminate the loop once you find a number that is divisible by 5.

for (let count = 8; count < 14; count++) {
    if (count % 5 === 0) {
        break;
    }
    console.log(count);
}



// Using a while loop, calculate the factorial of 12
let number = 12;
let factorial = 1;
while (number > 0) {
    factorial *= number;
    number--;
}

console.log(factorial);


// Using for loop, print out the multiplication table for 13 up to the 13 multiplied by 20
for (let i = 1; i <= 20; i++) {
    let result = i * 13;
    console.log(result);
};



// using a while loop, find the sum of all odd numbers between 1 and 100
let sum = 0;
let num1 = 1;
while (num1 <= 100) {
    if (num1 % 2!== 0) {
        sum += num1;
    }
    num1++;
}
console.log(sum)


// use a for loop to count down from 30 to 1 and print each number
for (let n = 30; n >= 1; n--) {
    console.log(n);
}



