function chunkArrayInGroups(arr, size) {
  let count = 1;
  let temp = [];
  let ans = [];
  for(let i=0; i < arr.length; i++){
    temp.push(arr[i]);
    if(count % size === 0){
      ans.push(temp);
      temp = [];
    }
    count ++;
  }
  if(temp.length > 0){
    ans.push(temp);//handles cases where asked for "size" leaves remaining indexes in the original array eg. arr = 5, size asked for = 3
  }
  console.log(ans);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
