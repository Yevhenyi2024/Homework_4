const number = 5;
let templist_1 = `Число ${number} є простим числом`;
let templist_2 = `Число ${number} не є простим числом`;

let isPrime = true;
if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false;
}

if (isPrime) {
    console.log(templist_1);
} else {
    console.log(templist_2);
}

// while(number % number === 1 && number / 1 === number ){
// console.log(templist_1);

// }