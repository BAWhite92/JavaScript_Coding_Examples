function rot13(str) {
  let arr = str.split("");
  let charsArr = [];
  for(let i=0; i < arr.length; i++){
    charsArr.push(arr[i].charCodeAt(0));
  }
  let res = charsArr.map((item) => {
    if(item >= 65 && item <= 77){
      item += 13;
      return String.fromCharCode(item);
    }
    else if (item <= 90 && item >= 78) {
      let shift = 90 - item;
      let overflow = 13 - shift;
      item = 64 + overflow;
      return String.fromCharCode(item);
    }
    else{
      return String.fromCharCode(item);
    }
  });
  return res.join("");
}

console.log(rot13("SERR PBQR PNZC"));
