function smallestCommons(arr) {
  let num = arr[1] + 1;
  let found = false;
  let low = 0
  let high  = 0
  if(arr[0] > arr[1]){
    low = arr[1];
    high = arr[0];
  } else{
    low = arr[0];
    high = arr[1];
  }

  while(found === false){
    let test = true;
    for(let i = low; i <= high; i++){
      if(num % i !== 0){
        test = false;
        num ++;
        break;
      }
    }
    if(test === true){
      found = true;
    }
  }
  return num;
}


console.log(smallestCommons([1,5]));
