function fizzbuzz(num) {

    const divisible = (divisor, num) => num % divisor === 0 && num !== 0;

    if(divisible(3, num) && divisible(5, num)){
        return 'fizzbuzz'
    }
    if(divisible(3, num)) {
        return 'fizz';
    }
    if(divisible(5, num)) {
        return 'buzz'
    }
    return num;
}

function print(num){
    for(let i=0; i<=num; i++){
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

print(16)
module.exports = fizzbuzz;