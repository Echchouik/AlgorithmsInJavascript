"use strict"

/*
This function take a number as a param and log all the numbers between 0 an numb
It will return "fizz buzz" if the number is divisible by 3 an 5
else if the number is only divisible by 3 it will return "fizz"
else if the number is only divisible by 5 it will return "buzz"
else te function will return the number
*/
function fizzBuzz (numb) {
    for (var i = 1; i <= numb; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log(String("fizz buzz"));
        else if (i % 3 === 0) console.log(String("fizz"));
        else if (i % 5 === 0) console.log(String("buzz"));
        else console.log(i);
    }
}

fizzBuzz(20);