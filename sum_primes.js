//sum all prime numers that are less than or equal to the given number.
function sumPrimes(num) {
  let arr = [];
  for(let primeCheck = 2; primeCheck <= num; primeCheck++){
    //push each number onto the array to be checked.
    arr.push(primeCheck);
    for(let i = 2; i < primeCheck; i++){
      if(primeCheck % i === 0){
        //if the number is not prime pop it back off the array + move on.
        arr.pop();
        break;
      };
    };
  };
  return arr.reduce((sum, value)=> sum + value);


}

console.log(sumPrimes(977));
