function fizzBuzz(number) {
    console.log("FIZZBIZZ input:", number);
    if (!isNaN(number)) {
        let i = number;
        let f = i % 3 == 0;
        let b = i % 5 == 0;
        console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    } else {
        console.log("Not a Number");
    }

}

fizzBuzz(21);


//isprime number 
function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}


let inputnum = 33
console.log("Prime number below:", inputnum)
for (var i = 0; i < inputnum; i++) {
    if (isPrime(i)) console.log(i);
}


