    const number= 6;
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum =sum + i;
        }
    }
    if (sum === number && number !== 0) {
        console.log(`Число ${number} є досконалим числом`);
    } else {
        console.log(`Число ${number} не є досконалим числом`);
    }


